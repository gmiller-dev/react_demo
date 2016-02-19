import React from 'react';
let DigitalDisplay = React.createClass({
  render(){
    let {time} = this.props;
    return (
      <div >
        <h1>
          { ` ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} `}
        </h1>
      </div>
    );
  }
});

export default DigitalDisplay;
