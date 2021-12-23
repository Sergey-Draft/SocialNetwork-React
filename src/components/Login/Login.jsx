import React from 'react';
import { useContext } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import Modal from '../common/Modal/Modal';
import ContextLogin from '../context/context';
import { userLoginThunk } from '../redux/authReducer';
import { email, maxLength, minLength, required } from '../utils/validators/validators';
import s from './Login.module.css';



const maxPasswordLength = maxLength(15);
const minPasswordLength = minLength(6)


let LoginForm = (props) => {
    const { pristine, submitting, reset } = props;
    return (
        <>
        <h4>Use test account</h4>
            <p> email: draft_krot@yahoo.com </p>
            <p>password: RockyBoy2012 </p>
        
            <form onSubmit={props.handleSubmit} className={s.form} >
                {props.error && <div className={s.commonError}>
                    {props.error}
                </div>}

                <div className={s.formLogin} >
                    <div className={s.emailInput}>
                        <Field type='text' name='email' component={Input} /* className={s.emailInput} */ lable='Email' validate={[required, email]} />
                    </div>
                    <div className={s.passwordInput} >
                        <Field type='text' name='password' id='password' component={Input} /* className={s.passwordInput} */ lable={'password'} validate={[required, maxPasswordLength, minPasswordLength]} />
                    </div>
                    <div className={s.rememberMe}>
                        <Field component={Input} type='checkbox' name='rememberMe' id='rememberMe' /* className={s.input} */ lable='Remember Me' />
                        <label htmlFor='rememberMe' >Remember me</label>
                        <span className={s.check} ></span>
                    </div>
                    <div className={s.actionBtns}>
                        <button type="submit" className={s.submitBtn} disabled={submitting}>Submit</button>
                        <button type="button" className={s.clearBtn} disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                    </div>

                </div>

            </form>
        </>
    )
}

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    let { modalActive, setModalActive } = useContext(ContextLogin)

    const formDataSubmit = (formData) => {
        props.userLoginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth === true) {
        return <Redirect to={'/profile'} />
    }

    return (
        <>
            <div>You must Login first!</div>
            <button onClick={() => { setModalActive(true) }} >Login</button>

            <Modal active={modalActive} setActive={setModalActive}>
                <LoginReduxForm onSubmit={formDataSubmit} />
            </Modal>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { userLoginThunk })(Login);