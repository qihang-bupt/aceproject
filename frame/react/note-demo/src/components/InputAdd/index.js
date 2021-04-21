import React, {useRef} from 'react'

const InputAdd = (props) => {
    const { isInputShow, addItem} = props
    const inputRef = useRef(null)
    return (
            isInputShow &&
                (<div className="input-wrapper">
                    <input type="text" ref={inputRef}/>
                    <button onClick={() => addItem(inputRef.current.value.trim())}>添加</button>
                </div>)

    )
}

export default InputAdd