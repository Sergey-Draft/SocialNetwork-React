import React from "react";
import style from './FormsControls.module.css';
import 'font-awesome/css/font-awesome.min.css';


const FormsControl = ({input, meta, lable, ...props}) => {
    console.log(meta)
    return (
        <>
            <div>
                {React.createElement(props.element,{
                    ...input,
                    ...props,
                    placeholder:lable
                } )}
            </div>
            <div className={style.errorContainer}>
            {meta.touched && meta.error ? <div><span className={style.error} >{meta.error}</span></div> : undefined }
            </div>
            
            
        </>

    )
}

export const Textarea = (props) => <FormsControl element="textarea" {...props}/>
export const Input = (props) => <FormsControl element = "input" {...props} />