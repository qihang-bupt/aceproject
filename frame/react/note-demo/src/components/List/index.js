import React from 'react'
import Item from "../Item/index"

const List = (props) => {
    const { list } = props
    return (
        <ul>
            {
                list.map((item,index) => {
                    return <Item data={item} key={index}/>
                })
            }
        </ul>
    )
}

export default List;