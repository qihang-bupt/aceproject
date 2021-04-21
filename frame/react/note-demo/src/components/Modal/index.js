import React from 'react'


const Modal = (props) => {
    const { isShowModal, title, children} = props
    return (
        <>
            {
                isShowModal &&
                (
                    <div className="modal-wrapper">
                        <h1>{title}</h1>
                        {children}
                    </div>)
            }
        </>
    )
}

export default Modal;