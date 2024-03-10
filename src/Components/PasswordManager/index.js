import {Component} from 'react'
import {v4 as uuidv4} from 'react'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordCount: 0,
    searchPassword: '',
    showPassword: true,
    websiteInput : '',
    usernameInput : '',
    passwordInput : '',
    addPasswordList : [],
  }
  onClickAddButton = () => {
    this.setState(prevState => ({passwordCount: prevState.passwordCount + 1}))
  }
  onChangeInput = (event, inputName) => {
    this.setState({[inputName] : event.target.value})

  } 
  handleAddPassword = () => {
    const { websiteInput, usernameInput, passwordInput, addPasswordsList } = this.state;
    const newPasswordEntry = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    };
    this.setState(prevState => ({
      addPasswordsList: [...prevState.addPasswordsList, newPasswordEntry],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }));
  }

  render() {
    const {passwordCount} = this.state
    const {searchPassword} = this.state
    const {showPassword} = this.state
    const { websiteInput, usernameInput, passwordInput, addPasswordsList } = this.state;


    return (
      <div className='bg-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
          alt='app logo'
        />
        <div className='password-container'>
          <h1 className='main-heading'>Add New Password</h1>
          <img
            src='https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
            alt='password manager'
          />
          <form>
            <img
              src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
              alt='website'
            />
            <input type='text' placeholder='Enter Website' />
            <img
              src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
              alt='username'
            />
            <input type='text' placeholder='Enter Username' />
            <img
              src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'
              alt='password'
            />
            <input type='password' placeholder='Enter Password' />
            <button
              type='submit'
              className='button'
              onClick={this.onClickAddButton}
            >
              Add
            </button>
          </form>
        </div>
        <div className='container'>
          <h1 className='main-heading'>Your Passwords</h1>
          <p>{passwordCount}</p>
          <img
            src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
            alt='search'
          />
          <input type='search' placeholder='Search' />
        </div>
        <div>
          <input type='checkbox' />
          <label>Show Passwords</label>
          <img
            src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
            alt='no passwords'
          />
          <p className='para'>No passwords</p>
        </div>
      </div>
    )
  }
}
export default PasswordManager
