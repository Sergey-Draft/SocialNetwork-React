import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, userAuthorizationThunk, userLogoutThunk } from '../redux/authReducer';
import Header from './Header';
import myPhoto from '../../img/user2.jpg'


class HeaderContainer extends React.Component {
  constructor(props) {
    super()
  }


  componentDidMount() {
    setTimeout(() => { this.props.userAuthorizationThunk()}, 2000)
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


export default connect(mapStateToProps, { setAuthUserData, userAuthorizationThunk, userLogoutThunk })(HeaderContainer);