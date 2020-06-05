import React, { Component } from 'react';
import login from './user.png';
import lock from './lock.jpg'
import register from './add-user.png';
import mail from './mail.jpg';

import ReactDOM from 'react-dom';
import './App.scss';

class App extends Component {
  state = {
    modal: false,
    login: true,
    register: false
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || domNode === event.target) {
      this.setState({ modal: false });
    }
  }
  toggleModal = () => {
    this.setState({ modal: !this.state.modal })
  }
  toggleLogin = () => {
    this.setState({ login: true, register: false })
  }
  toggleRegister = () => {
    this.setState({ login: false, register: true })
  }
  closeModal = () => {
    this.setState({ modal: false })
  }
  render() {
    return (
      <div className="App">
        <div className="launch-modal" onClick={this.toggleModal}>
          Launch Modal Login Register
      </div>
        {this.state.modal && <div className="modal">
          <div className="top-buttons">
            <div className="top-button" onClick={this.toggleLogin} style={{ backgroundColor: this.state.login ? 'rgb(0, 93, 155)' : '' }}>
              <img src={login} style={{ height: '20px', marginRight: '10px' }} />
              Login
            </div>
            <div className="top-button" onClick={this.toggleRegister} style={{ backgroundColor: this.state.register ? 'rgb(0, 93, 155)' : '' }}>
              <img src={register} style={{ height: '20px', marginRight: '10px' }} />
              Register
            </div>
          </div>
          {this.state.login ? <div className="login-body">
            <div className="text-box">
              <img src={mail} alt="Not Found" />
              <input type="text" className="input-box" placeholder="Your password" />
            </div>
            <div className="text-box">
              <img src={lock} alt="Not Found" />
              <input type="text" className="input-box" placeholder="Your email" />

            </div>
            <div className="btn">Login</div>
          </div> : <div className="register-body">
            </div>}
          <hr style={{ borderTop: '1px solid grey', margin: '0px', width: '100%' }}></hr>

          <div className="footer">
            <div className="footer-body">
              <div className="text-part">
                <span>Not a member?<span style={{ color: 'rgb(0,182,233)' }}> Sign Up</span></span>
                <span>Forgot <span style={{ color: 'rgb(0,182,233)' }}>Password?</span></span>
              </div>
              <div className="btn" style={{ outline: '5px solid rgb(0,182,233)', backgroundColor: 'white', color: 'rgb(0,182,233)' }} onClick={this.closeModal}>Close</div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

export default App;
