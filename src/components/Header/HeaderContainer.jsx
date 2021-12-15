import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, userAuthorizationThunk } from '../redux/authReducer';
import Header from './Header';
import myPhoto from '../../img/user2.jpg'
import axios from 'axios';


class HeaderContainer extends React.Component {
  constructor(props) {
    super()
  }


  componentDidMount() {

    this.props.userAuthorizationThunk();
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


export default connect(mapStateToProps, { setAuthUserData, userAuthorizationThunk })(HeaderContainer);