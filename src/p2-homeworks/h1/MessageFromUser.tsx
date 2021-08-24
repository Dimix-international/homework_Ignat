import React from 'react';
import './Message.css';


type propsType = {
    key: number,
    id: number,
    avatar: string,
    name: string,
    message: string,
    time: string
}

function MessageFromUser(props: propsType) {
    const classesUsers: Array<string> = ['message'];
    if (props.id === 0) {
        classesUsers.push('left')
    } else{
        classesUsers.push('right')
    }
    return (
        <div className={classesUsers.join(' ')}>
            <div className="message__container">
                <div className="message__row">
                    <div className='message__image'>
                        <img src={props.avatar} alt=""/>
                    </div>
                    <div className="message__body">
                        <div className="message__name">
                            {props.name}
                        </div>
                        <div className="message__text">
                            {props.message}
                        </div>
                        <div className="message__time">
                            {props.time}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageFromUser
