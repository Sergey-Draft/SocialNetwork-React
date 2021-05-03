import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' +s.active}>
                    Andrey
                    </div>
                <div className={s.dialog}>
                    Sveta
                    </div>
                <div className={s.dialog}>
                    Sasha
                    </div>
                <div className={s.dialog}>
                    Vladimir
                    </div>
            </div>

            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your doing</div>
                <div className={s.dialog}>Yo!</div>
            </div>
        </div>


    )
}

export default Dialogs;