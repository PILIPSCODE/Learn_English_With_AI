"use client"
import React, { useEffect, useState } from 'react'

type AiResponse = {
    correct:string,
    response:string
  }

type props = {
   Airesponse:AiResponse[]
  }

const BubleChat = (props:props) => {
   

   
    return (
        <div>
 
        {props.Airesponse.map((item,index)=>(

        <div key={index} className='pt-10'>
            <div className="chat chat-start">
               
                <div className="chat-header font-bold">
                   Corrected 
                </div>
                <div className="chat-bubble">{item.correct}</div>
               
            </div>
            <div className="chat chat-end">
                <div className="chat-header font-bold">
                    Ai   
                </div>
                <div className="chat-bubble">{item.response}</div>
            </div>
        </div>
        ))}
        </div>
    )
}

export default BubleChat