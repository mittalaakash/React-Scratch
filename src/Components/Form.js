import React, { Component } from 'react';

class Form extends Component {
  state = {
    username: '',
    comments: '',
    topic: '',
  };
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = event => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='username'>
            Usermail
            <input
              type='text'
              value={this.state.username}
              id='username'
              onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value='react'>react</option>
            <option value='angular'>angular</option>
            <option value='vue'>vue</option>
          </select>
        </div>
        <input type='submit' />
      </form>
    );
  }
}

export default Form;
