import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, toggleFollow, toggleFollowingProgress, getUsersThunkCreator, toggleFollowThunk, toggleUnfollowThunk } from '../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader';




class UsersContainer extends React.Component {
  constructor(props) {
    super();

  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
/*     this.props.setIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items);
      }) */
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize)
/*     this.props.setIsFetching(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items);
      }) */
  }



  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        toggleFollow={this.props.toggleFollow}
        onPageChanged={this.onPageChanged}
        followingInProgress = {this.props.followingInProgress}
        toggleUnfollowThunk = {this.props.toggleUnfollowThunk}
        toggleFollowThunk = {this.props.toggleFollowThunk}
        isAuth = {this.props.isAuth}
      />
    </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
  }
}

/* let mapDispatchToProps = (dispatch) => {
  return {

    toggleFollow: (userId) => {
      dispatch(toggleFollowAC(userId))
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },

    setCurrentPage: (currentPage) => {
      dispatch(setcurrentPageAC(currentPage))
    },

    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching))
    }

  }
}
 */

export default connect(mapStateToProps, 
  { toggleFollow, /* setUsers, */ setCurrentPage,
     /* setIsFetching, */ toggleFollowingProgress,
      getUsers: (currentPage, pageSize) => getUsersThunkCreator(currentPage, pageSize), toggleFollowThunk, toggleUnfollowThunk  /* thunk! */ })(UsersContainer)

