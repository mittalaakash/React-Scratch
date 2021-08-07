import React, { Component } from 'react';

class RefsDemo extends Component {
  inputRef = React.createRef();
  cbRef = null;
  setCbRef = element => {
    this.cbRef = element;
  };
  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();
    // this.cbRef.focus();
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.setCbRef} />
        <button onClick={this.clickHandler}>CLick</button>
      </div>
    );
  }
}

export default RefsDemo;
