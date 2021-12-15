import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'Write your status here...',
      editMode: false
    }
  }

  handleInput = (e) => {
    this.setState({ status: e.target.value })
  }

  editModeActive = () => {
    this.setState({
      editMode: true
    })
  }

  editModeDeactive = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    const { status, editMode } = this.state;
    return (
      <>
        {!editMode &&
          <div>
            <span onClick={this.editModeActive} >{status}</span>
          </div>
        }
        {editMode &&
          <div>
            <input autoFocus onBlur={this.editModeDeactive} value={status} onChange={this.handleInput} />
          </div>
        }

      </>
    )

  }



}





export default ProfileStatus;
