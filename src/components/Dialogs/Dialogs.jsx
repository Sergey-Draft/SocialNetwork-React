import React from 'react';
import { AddMessageBodyCreator, updateNewMessageCreator } from '../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsData = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgurl={d.imgurl} store={props.store} />)
    /* let messagesData = props.state.messages.map(m => <Message message={m.message} id={m.id} />) */

    let NewMessageObj = React.createRef()

    let writeMessage = () => {
        props.store.dispatch(AddMessageBodyCreator());
        NewMessageObj.current.value = '';
    }

    let onMessageChange = () => {
        let text = NewMessageObj.current.value;
        props.store.dispatch(updateNewMessageCreator(text));
    }



    let messages = state.messages/* .filter(item => item.id === props.store.getState().dialogsPage.newUserId ) */
        .map(item => <Message message={item} id={item.id} store={props.store} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData}
            </div>

            <div className={s.messages}>
                {messages}

                <div className={s.sendArea}>
                    <input type='text' placeholder='Type your message...' className={s.postmessage} ref={NewMessageObj} onChange={onMessageChange} ></input>
                    <button className={s.btn} onClick={writeMessage} >Send</button>
                </div>

                {/* {messagesData} */}
            </div>
        </div>
    )
}

export default Dialogs;