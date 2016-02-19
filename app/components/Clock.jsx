import React from 'react';
import AnalogDisplay from './AnalogDisplay.jsx';
import DigitalDisplay from './DigitalDisplay.jsx';
import Button from './Button.jsx';

const TYPES={
  ANALOG: 'analog',
  DIGITAL: 'digital'
};

function getDisplay(displayType, time){
  switch(displayType){
    case TYPES.ANALOG:
      return <AnalogDisplay time={time} width={300} height={300}/>;
    case TYPES.DIGITAL:
      return <DigitalDisplay time={time}/>;
  }
}

let Clock = React.createClass({
  getInitialState(){
    return { time: new Date() , type: TYPES.DIGITAL};
  },

  componentDidMount(){
    let self = this;
    let newState = Object.assign({}, this.state, { interval: setInterval( ()=> {
      self.setState(Object.assign({}, self.state, { time: new Date() }));
    }, 1000)});

    this.setState(newState);
  },

  setAnalog(){
        this.setState(Object.assign({}, this.state, {type: TYPES.ANALOG}));
  },

  setDigital(){
        this.setState(Object.assign({}, this.state, {type: TYPES.DIGITAL}));
  },

  render(){
    let self = this;
    return (
      <div>
        {getDisplay(this.state.type ,this.state.time)}
        <br/>
        <Button onClick={ this.setDigital} value='Digital' />
        <Button onClick={ this.setAnalog} value='Analog' />
      </div>
    );
  }
});

export default Clock;
