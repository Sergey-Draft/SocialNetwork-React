import React from 'react';
import { NavLink } from 'react-router-dom';
import { UpdateNewUserIdCreator } from '../../redux/dialogsReducer';
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    const NewUserIdUpdate = () => {
        let newId = props.id;
        props.store.dispatch(UpdateNewUserIdCreator(newId))
    }

    return (
        <div className={s.dialog /* + ' ' + s.active */}>
            <img src={props.imgurl} alt='img' />
            <NavLink to={path} onClick={NewUserIdUpdate} activeClassName="active">{props.name}</NavLink>
            <span className={s.numbers}>1</span>
        </div>
    )


}

export default DialogItem;