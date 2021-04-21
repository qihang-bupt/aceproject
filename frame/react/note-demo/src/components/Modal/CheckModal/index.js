import React from 'react'
import Modal from "../index";

const CheckModal = (props) => {
    const { isShowModal, title, clickConfirm, curData } = props
    return (
        <Modal
            isShowModal={isShowModal}
            title={title}
        >
            <p>id: {curData.id}</p>
            <p>text: {curData.text}</p>
            <button onClick={() => clickConfirm(false)}>confirm</button>
        </Modal>
    )
}

export default CheckModal;