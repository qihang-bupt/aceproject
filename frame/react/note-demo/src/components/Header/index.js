import React from 'react'

const header = (props) => {
    const {handleClick} = props
    return (
        <div className="header-wrapper">
            <div>Title</div>
            <div onClick={handleClick}>++++++</div>
        </div>
    )
}

export default header