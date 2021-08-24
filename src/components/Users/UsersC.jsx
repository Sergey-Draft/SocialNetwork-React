import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import { render } from '@testing-library/react';


class Users extends React.Component {
  constructor(props) {
    super();

  }

  getUsers = () => {
      axios.get('https://randomuser.me/api/')
      .then(response => {
        this.props.setUsers(response.data.results);
      } )
      axios.get('https://randomuser.me/api/')
      .then(response => {
        this.props.setUsers(response.data.results);
      } )
  }

  componentDidMount(){
    if(this.props.users.length === 0)
    axios.get('https://randomuser.me/api/')
    .then(response => {
      this.props.setUsers(response.data.results);
    } )
  }

render() {
  return (
    <div>
    <button onClick={this.getUsers}>Show Users</button>
    <div className={s.users}>
      
      {this.props.users.map(u => {
    return (
      <div className={s.item} key={u.id}>
        <div className={s.img}></div>

        <div className={s.info}>
          <img src=/* {u.avatar} */ {u.picture.large}alt='avatar' className={s.avatar} />
          {u.followed
            ? <span className={s.btn} onClick={() => { this.props.toggleFollow(u.id) }}>Follow</span>
            : <span className={s.btn} onClick={() => { this.props.toggleFollow(u.id) }}>UnFollow</span>}

          <p className={s.fullName}>{/* {u.fullName} */}{u.name.title} {u.name.first}</p>
          <p className={s.userStatus}>{/* {u.status} */}</p>
          <p className={s.userLocation}>{u.location.city}</p>

        </div>

      </div>
    )
  })}


    </div>
    </div>
    
  )
}

}

export default Users;
