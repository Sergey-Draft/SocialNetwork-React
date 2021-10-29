import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../redux/authReducer';
import Header from './Header';
import s from './Header.module.css';
import myPhoto from '../../img/user2.jpg'
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  constructor(props) {
    super()
  }


  componentDidMount() {

    usersAPI.authorization()
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })

/*     axios.put(`https://social-network.samuraijs.com/api/1.0/profile/photo`, {
      withCredentials: true,
      data: {
        large: myPhoto
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      }); */


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