import React from 'react';
import Profile from './Profile';
import { getuserProfileThunk, getUserStatusThunk, updateUserStatusThunk } from '../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';




let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
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
    this.props.getuserProfileThunk(userId);
    this.props.getUserStatusThunk(userId);
  } 

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatusThunk} />
  }
}


let WithUrlDataContainerConmponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getuserProfileThunk, getUserStatusThunk, updateUserStatusThunk })(WithUrlDataContainerConmponent);



