import React, {useContext, useEffect, useState} from 'react';
import { appContext } from './index'
import './App.css';

const App:React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [info, setInfo] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const value = useContext(appContext)
  useEffect(() => {
      document.title = `${count}`;
  },[count]);
  useEffect(() => {
      const fetchData = async () => {
          setLoading(true)
          try{
              const res = await fetch('https://jsonplaceholder.typicode.com/users');
              const data = await res.json();
              setInfo(data)
              setLoading(false)
          }catch{
              setLoading(false)
              console.log('error:::error')
          }
      };
      fetchData()
  }
  ,[])
  return (
      <div>
          {
              loading ?
                  <h2>页面正在加载。。。</h2>:
                  <div>
                      <h1>{value.ajaxname}</h1>
                      {info.map((item:any) => (<p>{item.phone}</p>))}
                  </div>
          }
      </div>
  )
}
export default App;
