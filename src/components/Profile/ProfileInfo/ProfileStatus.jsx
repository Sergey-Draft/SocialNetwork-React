import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: this.props.status,
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
    this.props.updateStatus(this.state.status)
  }

  render() {
    const { status, editMode } = this.state;
    return (
      <>
        {!editMode &&
          <div>
            Status: <span onClick={this.editModeActive} >{this.state.status}</span>
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
