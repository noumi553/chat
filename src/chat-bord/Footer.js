import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import './Footer.css'

export default function Footer(){
    return(
        <>
         <h3>Author: Nouman Aziz</h3>
         <div className='item4-container'>
               <div className='contact-component'>
                  <ul>
                      <li><a href='https://web.facebook.com/noumanaziz302'><FaFacebook id='facebook' className='contact-icon'/></a></li>
                      <li><a href='https://github.com/noumi553'><FaGithub className='contact-icon'/></a></li>
                      <li><FaSquareWhatsapp id='whatsapp' className='contact-icon'/></li>
                  </ul>
               </div>
         </div>
        </>
    );
}