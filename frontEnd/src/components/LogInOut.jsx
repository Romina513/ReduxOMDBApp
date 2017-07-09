import React from 'react';

const form = require('./RegisterForm.ncss');


const LogInOut = React.createClass({
  post: function(e) {
    e.preventDefault();
    this.props.postLogIn({
      username: this.refs.username.value,
      password: this.refs.psw.value
    })
  },
  render() {
    return (
      <div className={form.log_in_out_container}>
        <form>
            <input type="text" placeholder="Enter Username" ref="username" required></input>
            <input type="password" placeholder="Enter Password" ref="psw" required></input>

            <div className={form.register_form_button}>
              <button type="submit" onClick={this.post}>Log In</button>
            </div>
        </form>
      </div>
    )
  }
});

export default LogInOut;
