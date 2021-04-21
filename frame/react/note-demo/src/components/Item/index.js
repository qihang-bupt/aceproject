import React from 'react'


const Item = (props) => {
    const {data, handleDetailClick, handleDeleteClick, changeCheckbox} = props;
    return (
        <li key={data.id}>
            <input
                type="checkbox"
                checked={data.complete}
                onChange={() => changeCheckbox(data.id)}
            />
            <span style={{textDecoration: data.complete ? "line-through" : "none"}}>{data.text}</span>
            <button onClick={() => handleDeleteClick(data.id)}>delete</button>
            <button onClick={() => handleDetailClick(data.id)}>detail</button>
        </li>
    )
}

export default Item;