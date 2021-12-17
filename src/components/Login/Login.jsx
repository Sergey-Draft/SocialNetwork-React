import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Field, reduxForm } from 'redux-form';
import { userLoginThunk } from '../redux/authReducer';
import s from './Login.module.css';




let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form} >
            <div>
                <label htmlFor='email'> Email</label>
                <Field type='text' name='email' component='input' className={s.input} />
            </div>
            <div>
                <label htmlFor='password'> Password </label>
                <Field type='text' name='password' component='input' className={s.input} />
            </div>
            <div>
                <label htmlFor='rememberMe'> remember me</label>
                <Field component='input' type='checkbox' name='rememberMe' id='rememberMe' className={s.input} />
            </div>
            <div>
                <button>Login</button>
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