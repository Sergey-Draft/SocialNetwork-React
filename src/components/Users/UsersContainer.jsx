import React from 'react';
import { connect } from 'react-redux';
import { setcurrentPageAC, setIsFetchingAC, setUsersAC, toggleFollowAC } from '../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios'
import Preloader from '../common/Preloader';




class UsersContainer extends React.Component {
  constructor(props) {
    super();

  }
  
  componentDidMount() {
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items);
      })
  }



  render() {
    return <>
    {this.props.isFetching ? <Preloader/>  : null }
      <Users users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        toggleFollow={this.props.toggleFollow}
        onPageChanged={this.onPageChanged}
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
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
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


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

