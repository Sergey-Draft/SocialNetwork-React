import React from 'react';
import s from './../Dialogs.module.css'

const Message = (props) => {


    if(props.message.id % 2 === 0)
    return (
        <div>
            <div className={s.chat}>
                <img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg' alt='avatar' className={s.imgleft} />
                <p>{props.message.id} {props.message.message}</p>
                <span className={s.timeRight}>11:00</span>
            </div>
        </div>
    )
    else {
        return (
            <div>
            <div className={s.chat + ' ' + s.chatDark}>
            <img src='https://yt3.ggpht.com/ytc/AAUvwniT8TGYkstItBq_pP1SJj-NSrRQU7cAjajmPl9i_Q=s900-c-k-c0x00ffffff-no-rj' alt='avatar' className={s.imgright} />
                <p>{props.message.id} {props.message.message}</p>
                <span className={s.timeRight}>11:00</span>
            </div>
            </div>
        )
    }
}

export default Message;