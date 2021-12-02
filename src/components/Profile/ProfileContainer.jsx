import React from 'react';
import Profile from './Profile';
import { setUserProfile, userProfileThunk } from '../redux/profileReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router';




let mapStateToProps = (state) => {
  return {
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
  constructor(props) {
    super()
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 19960;
    }
    this.props.userProfileThunk(userId)
  } 

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}


let WithUrlDataContainerConmponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile, userProfileThunk })(WithUrlDataContainerConmponent);



