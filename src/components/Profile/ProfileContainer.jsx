import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../redux/profileReducer';
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
      userId = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
      headers: {
        "API-KEY" : "107e3009-e5ca-4f45-88c2-81939c530753"
      }
    })
      .then(response => {
        this.props.setUserProfile(response.data);
      })

  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}


let WithUrlDataContainerConmponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerConmponent);



