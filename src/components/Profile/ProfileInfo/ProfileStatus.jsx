import React from 'react';


class ProfileStatus extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: this.props.status,
      editMode: false
    }
  }
  
  handleInput = (e) => {
    this.setState({ status: e.currentTarget.value })
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


  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    const { status, editMode } = this.state;
    return (
      <>
        {!editMode &&
          <div>
           Status: < span onDoubleClick={this.editModeActive} >{status}</span>
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
