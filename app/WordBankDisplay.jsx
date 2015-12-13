import React, { Component } from 'react';

class Item extends Component{
  handleClick(event){
    event.preventDefault();
    this.props.remove(this.props.id);
  }

  render(){
    return(
      <tr>
        <td>{this.props.children}</td>
        <td><input type='button' onClick={this.handleClick.bind(this)} value='delete'/></td>
      </tr>
    );
  }
}

export default class WordBankDisplay extends Component{
  render(){
    let formated_words = [];
    let { words, remove } = this.props;

    for( let [key, value] of words.entries()){
      formated_words.push(
        <Item id={key} key={key} remove={remove}>
          {value}
        </Item>
      );
    }

    return (
      <table>
        <thead>
          <tr>
            <th>WordBank</th>
          </tr>
        </thead>
        <tbody>
          {formated_words}
        </tbody>
      </table>
    );
  }
}
