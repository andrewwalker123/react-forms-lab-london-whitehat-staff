import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  onChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  onSubmitHandler = (event) => {
    event.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
    return this.props.onSubmit(this.state)
    } else {
      return
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} type="text" onChange={this.onChangeHandler}/>
          </label>
        </div>

        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} type="password" onChange={this.onChangeHandler}/>
          </label>
        </div>

        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
