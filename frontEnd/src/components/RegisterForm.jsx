import React from 'react';

const form = require('./RegisterForm.ncss');


const RegisterForm = React.createClass({
  post: function(e) {
    e.preventDefault();
    this.props.postRegistration({
      username: this.refs.username.value,
      password: this.refs.psw.value
    })
  },
  render() {
    return (
      <div className={form.register_form_outter_container}>
        <h2>Register for an Account</h2>
        <p>With an account you can have a MovieDB profile and contribute to MobieDB by rating your favorites</p>
        <form>
          <div className={form.register_form_inner_container}>
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" ref="username" required></input>

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" ref="psw" required></input>

            <div className={form.register_form_button}>
              <button type="submit" onClick={this.post}>Create Account</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
});

export default RegisterForm;
