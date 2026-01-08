
import { useContext, useState } from 'react'
import './Chatbar.css'
import Chat from './Chat'
import context from './context'
import Loader from "react-js-loader";
import {submit} from './utils/chatbar'


export default function Chatbar() {


    const {
        input, setInput, 
        reply, setReply, 
        thread, setThread, 
        loading, setLoading}=useContext(context)
    const [userToggle, setUserToggle]=useState(false)
        
    
    return (
        <section className='chatbar'>

            <div className='nav'>
                <span className='icon'>
                    myGPT <i className="fa-solid fa-angle-down"></i></span>
                <span className='user-icon icon' onClick={()=>setUserToggle(!userToggle)}>
                    <i className="fa-solid fa-user"></i></span>
            </div>
            <div className={`userToggle ${userToggle ? 'on':''}`}>
                <p><i class="fa-solid fa-gear"></i> Settings</p>
                <p><i class="fa-regular fa-circle-up"></i> Upgrade plan</p>
                <p><i class="fa-solid fa-arrow-right-from-bracket"></i> Log out</p>
            </div>
            <Chat />
            {loading &&<Loader type="box-rectangular"/>}

            <div className='bottom'>
                <div className='input'>
                    <input type="text" 
                    placeholder='Ask anything' 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    onKeyDown={(e)=>e.key=='Enter'? submit({input, reply, setInput, setReply, setThread, thread, loading, setLoading}) :''}
                    />
                    <span className='icon' onClick={()=>submit({input, reply, setInput, setReply, setThread, thread, loading, setLoading})}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </span>
                </div>
                <p>myGPT can make mistakes. Check important info. See Cookie Preferences.</p>
            </div>

        </section>
    )
}
