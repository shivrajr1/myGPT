
import { useEffect, useContext, useState } from 'react'
import './Sidebar.css'
import context from './context'
import { func, getThread, dlt } from './utils/sidbar'


export default function Sidebar() {


  const {
    totalThread,
    setThread,
    setTotalThread,
    loading,
    setLoading } = useContext(context)
  const [activeThread, setActiveThread]=useState(null)


  useEffect(() => {
    func({ setTotalThread })
  }, [])


  return (
    <section className="sidebar">
      <div className="sidebar-icon">
        <span className='icon'>
          <i className="fa-brands fa-openai" 
          onClick={() => {setThread({});setActiveThread(null)}}></i>
        </span>
        <span className='icon'>
          <i className="fa-solid fa-pen-to-square" 
          onClick={() => {setThread({});setActiveThread(null)}}></i>
        </span>
      </div>
      <ul className="thread">
        {
          totalThread?.map((obj, idx) => {
            return <li 
            key={idx} 
            onClick={() => { 
              getThread({ id: obj._id, setThread, setTotalThread }) 
              setActiveThread(idx)
            }} 
            className={activeThread === idx ? 'activeThread' : ''}>
              {obj.title}
              <i className="fa-solid fa-trash"
                onClick={(e) => {
                  e.stopPropagation();
                  dlt({ id: obj._id, setTotalThread, setThread })
                  setActiveThread(null)
                }}></i></li>
          })
        }
      </ul>
      <div className="sidebar-user">By Shivraj ~</div>
    </section>
  )
}
