import React from 'react';

let Button = React.createClass({
  render(){
    return (
      <input type='button' onClick={this.props.onClick} value={this.props.value}/>
    );
  }
});

export default Button;
