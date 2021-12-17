import React from 'react';
import { Field, reduxForm } from 'redux-form';


let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <label htmlFor='login'> Login</label>
                <Field type='text' name='login' component='input' />
            </div>
            <div>
                <label htmlFor='password'> Password </label>
                <Field type='text' name='password' component='input' />
            </div>
            <div>
                <label htmlFor='rememberMe'> remember me</label>
                <Field component='input' type='checkbox' name='rememberMe' /> 
            </div>
            <div>
                <button>Login</button>
            </div>


        </form>
    )
}

let LoginReduxForm = reduxForm ({form:'login'})(LoginForm)

const Login = (props) => {
    const formDataSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <>
            <LoginReduxForm onSubmit={formDataSubmit} />
        </>
    )
}
export default Login;