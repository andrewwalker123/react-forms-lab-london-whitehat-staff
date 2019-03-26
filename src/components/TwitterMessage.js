import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
  onChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  calculateRemainingChars = () => this.props.maxChars - this.state.message.length
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name='message' value={this.state.message} onChange={this.onChangeHandler}/>
        <p>{this.calculateRemainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
