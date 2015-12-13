import React, { Component } from 'react';

import { Singletons } from './Singletons.jsx'
import WordBankDisplay from './WordBankDisplay.jsx';
import WordBankInput from './WordBankInput.jsx';

let wordStore = Singletons.get_instance('WordStore');
let wordActions = Singletons.get_instance('WordActions');

export default class WordBank extends Component{
  constructor(){
    super();
    this.state = {words: wordStore.getWords()};
    var self = this;

    wordStore.addListener( () =>{
      self.setState({words: wordStore.getWords()});
    });
  }

  addWord(word){
    wordActions.add_word(word);
  }

  deleteWord(id){
    wordActions.delete_word(id);
  }

  render(){
    return(
      <div>
        <WordBankDisplay words={this.state.words} remove={this.deleteWord}/>
        <WordBankInput submit={this.addWord}/>
      </div>
    );
  }
}

