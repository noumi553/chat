import axios from 'axios'
import React, { useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import './Chatbot.css'
import Footer from './Footer';

export default function Chatbot(){
    const [text , setText] = useState('')
    const [input , setInput] = useState('')
    async function genretanswer(){
        console.log('data is loading please wait....')
      const response = await  axios({
            url:'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyD29LOyZf8VuI5gH70I-t6-2lvNk3Rhp9Q',
            method: 'post',
            data:{
                    "contents": [{
                      "parts":[{"text": input}]
                    }]
                },
            
        })
        console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
        console.log(response)
        setText(response['data']['candidates'][0]['content']['parts'][0]['text'])
        setInput('')
    }
    return(
        <>
          <div className='container'>
              <div className='item1'>
                   <h3><FaBookBookmark className='ai-icon'/>  Ai Chatbot</h3>
              </div>
              <div className='item2'>
                <div className='text'><p>{text}</p></div>
              </div>
              <div className='item3'>             
                 <div className='item3-parent'>
                   <input type='text' placeholder='write your Question...' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                   <button onClick={genretanswer}><FaArrowUp /></button>
                 </div>
              </div>
              <div className='item4'>
                <Footer/>
              </div>
          </div>
        </>
    )
}