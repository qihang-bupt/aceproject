import React, {useCallback, useEffect, useState} from "react";
import Header from "./components/Header";
import InputAdd from "./components/InputAdd";
import Item from "./components/Item";
import CheckModal from "./components/Modal/CheckModal";
import './App.css';

function App() {
    const [isInputShow, setInputShow] = useState(false)
    const [list, setList] = useState([])
    const [curData, setCurData] = useState({})
    const [isShowModal, setShowModal] = useState(false)
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('todolist') || '[]')
        setList(data)
    },[])
    useEffect(() => {
        localStorage.setItem('todolist',JSON.stringify(list))
    },[list])
    const handleClick = () => {
        setInputShow(!isInputShow)
    }
    const clickConfirm = () => {
        setShowModal(false)
    }
    const handleDetailClick =(id) => {
        if(isShowModal) return
      const curData =  [...list].filter(item => item.id === id)[0]
      setCurData(curData)
      setShowModal(true)
    }
    const handleDeleteClick = (id) => {
        const restList =  [...list].filter(item => item.id !== id)
        setList(restList)
    }
    const changeCheckbox = (id) => {
        const checkedItem = [...list].filter(item => item.id == id)[0]
        checkedItem.complete = !checkedItem.complete
        setList(list => Object.assign([], list, checkedItem))
    }
    const addItem = useCallback((val) => {
        if(val.length ==0 ) return
        const item = {
            id: new Date().getTime(),
            text: val,
            complete: false
        }
        setList((list) => [...list,item])
        setInputShow(false)
    }, [])
    return (
    <div className="App">
       <CheckModal
           isShowModal={isShowModal}
           title={'modal'}
           clickConfirm={clickConfirm}
           curData={curData}
       />
       <Header handleClick={handleClick}/>
       <InputAdd isInputShow={isInputShow} addItem={addItem}/>
       <ul>
           {
               list.map((item, index) => {
                   return <Item
                       data={item}
                       key={index}
                       handleDetailClick={handleDetailClick}
                       handleDeleteClick={handleDeleteClick}
                       changeCheckbox={changeCheckbox}
                   />
               })
           }
       </ul>
    </div>
  );
}

export default App;
