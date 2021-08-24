import React, {useState} from 'react';
import Message from "./Message";
import './Chat.css'



function HW1() {
    return (
        <div className={'chat'}>
            <h1 className="chat__title">homeworks 1 should work (должно работать)</h1>
            <div className="chat__container">
                <Message/>
            </div>
        </div>
    )
}

export default HW1
