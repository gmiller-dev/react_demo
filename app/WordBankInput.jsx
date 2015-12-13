import React, { Component } from 'react';


export default class WordBankInput extends Component{
  constructor(){
    super();
    this.state = {word: ''};
  }

  handleWordChange(event){
    this.setState({word: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    let word = this.state.word.trim();
    if( word !== ''){
      this.props.submit(word);
    }
    this.setState({word: ''});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' value={this.state.word} onChange={this.handleWordChange.bind(this)}/>
        <input type='submit' />
      </form>
    );
  }
}
