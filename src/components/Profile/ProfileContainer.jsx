import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../redux/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';




let mapStateToProps = (state) => {
    return{
      profile: state.profilePage.profile
    }
}

/* let mapDispatchToProps = (dispatch) => {
  return{
    setUsersProfile: (profile) => {
      dispatch(setUserProfile(profile))
    }
  }
} */


class ProfileContainer extends React.Component {
  constructor(props){
    super()
  }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })

  }

  render(){
    return <Profile {...this.props} profile = {this.props.profile} />
  }
}




export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);



