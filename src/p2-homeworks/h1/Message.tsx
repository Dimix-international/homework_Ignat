import React from 'react';
import './Message.css'
import MessageFromUser from "./MessageFromUser";
import state from "./state";


function Message() {
    const user = state.users.map((user, index) => {
        return (
            <MessageFromUser
                key={index}
                id = {user.id}
                avatar={user.avatar}
                name={user.name}
                message={user.message}
                time={user.time}
            />
        )
    })
    return (
        <div className='message__wrapper'>
            {user}
        </div>
    )
}

export default Message
