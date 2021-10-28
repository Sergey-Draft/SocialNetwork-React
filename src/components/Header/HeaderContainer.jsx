import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../redux/authReducer';
import Header from './Header';
import s from './Header.module.css'

class HeaderContainer extends React.Component {
  constructor(props) {
    super()
  }


  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
      headers: {
        "API-KEY": "107e3009-e5ca-4f45-88c2-81939c530753"
      }
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);