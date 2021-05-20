import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog /* + ' ' + s.active */}>
            <NavLink to={path}>{props.name}</NavLink>
            <span className={s.numbers}>1</span>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogs = [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Vladimir" },
        { id: 5, name: "Petya" },
    ]

    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your doing" },
        { id: 3, message: "Yo!" },
        { id: 4, message: "Yo!" },
        { id: 5, message: "Yo!" },
    ]


    let dialogsData = dialogs.map(d =><DialogItem name={d.name} id={d.id} />)
    let messagesData = messages.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogsData}
            </div>

            <div className={s.messages}>
            {messagesData}
            </div>
        </div>
    )
}

export default Dialogs;