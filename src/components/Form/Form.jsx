import React from 'react';
import Tooltip from '../common/Tooltip';

class Form extends React.Component {
  constructor(props) {
    super()
    
    this.state = {
      inputText: '',
      textArea: '',
      select: '',
      show: {
        first: '',
        second: '',
        position: ''

      }
    }
  }

  hadleInputChange = (e) => {
    this.setState({inputText: e.target.value })
  } 

  hadleTextAreaChange = (e) => {
    this.setState({textArea: e.target.value})
  } 

  hadleSelectChange = (e) => {
    this.setState({select: e.target.value})
  } 

  handleShow = (e) => {
    e.preventDefault();
    const {inputText, textArea, select } = this.state
    this.setState({
      inputText: '',
      textArea: '',
      show: {
        first: inputText,
        second: textArea,
        position: select
      }
     })
  }



  render() {
    const {inputText, textArea, select, show } = this.state;
    const {first, second, position } = show;
    return (
      <>
      <h3>После того, как вы развернёте свою социальную сеть на хостинге (github pages, heroku и т.д.), вам нужно предоставить логин и пароль для работодателя, чтобы тот смог потестить вашу социальную сеть. Ни в коем случае не <Tooltip text = 'Hello!!'> МЕНЯ </Tooltip>  курсор оставляйте свои личные логин и пароль. Укажите, например, на странице Login вашей соц. сети данные тестового аккаунта: </h3>
        <form>
          <label> Name :
            <input type='text' onChange={this.hadleInputChange} value={inputText}></input>
          </label><br/>

          <label htmlFor='text' >Text:</label>
          <textarea id='text' onChange={this.hadleTextAreaChange} value={textArea} /><br/>

          <select value={select} onChange={this.hadleSelectChange} >
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            </select><br/>

          <button onClick={this.handleShow} >Show</button>
        </form>
        <h2>{first}</h2><br/>
        <h2>{second}</h2><br/>
        <h2>{position}</h2>
      </>
    )
  }


}

export default Form;