import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { userLoginThunk } from '../redux/authReducer';
import { email, maxLength, minLength, required } from '../utils/validators/validators';
import s from './Login.module.css';



const maxPasswordLength = maxLength(15);
const minPasswordLength = minLength(6)


let LoginForm = (props) => {
    const {pristine, submitting, reset} = props;
    return (
        <form onSubmit={props.handleSubmit} className={s.form} >
            {props.error && <div className={s.commonError}>
                {props.error}
            </div>}
            <div>
                {/* <label htmlFor='email'> Email</label> */}
                <Field type='text' name='email' component={Input} className={s.input} lable='Email' validate={[required, email]} />
            </div>
            <div>
                {/* {<label htmlFor='password'> Password </label>} */}
                <Field type='text' name='password' id='password' component={Input} className={s.input} lable={'password'}  validate={[required, maxPasswordLength, minPasswordLength ]} />
            </div>
            <div>
                {/* <label htmlFor='rememberMe'> remember me</label> */}
                <Field component={Input} type='checkbox' name='rememberMe' id='rememberMe' className={s.input} lable='Remember Me' />
            </div>
            <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>


        </form>
    )
}

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    
    const formDataSubmit = (formData) => {
        props.userLoginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth === true) {
       return <Redirect to={'/profile'} />
    }

    return (
        <>
            <LoginReduxForm onSubmit={formDataSubmit} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { userLoginThunk })(Login);