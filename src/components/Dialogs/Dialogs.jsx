import React from 'react';
import { Redirect } from 'react-router';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsData = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} imgurl={d.imgurl} NewUserIdUpdate={props.NewUserIdUpdate} />)
    /* let messagesData = props.state.messages.map(m => <Message message={m.message} id={m.id} />) */

    let NewMessageObj = React.createRef()

    let onWriteMessage = (e) => {
        props.addMessage()
        NewMessageObj.current.value = '';
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    }

    let messages = state.messages/* .filter(item => item.id === props.store.getState().dialogsPage.newUserId ) */
        .map(item => <Message message={item} key={item.id} id={item.id} />)

    if(!props.isAuth) {
        return <Redirect to= {"/login"} />
    }


    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData}
            </div>

            <div className={s.messages}>
                {messages}

                <div className={s.sendArea}>
                    <input type='text' placeholder='Type your message...' className={s.postmessage} ref={NewMessageObj} onChange={onMessageChange} ></input>
                    <button className={s.btn} onClick={onWriteMessage} >Send</button>
                </div>

                {/* {messagesData} */}
            </div>
        </div>
    )
}

export default Dialogs;