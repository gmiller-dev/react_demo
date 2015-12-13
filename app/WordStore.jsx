import { Store } from 'flux/utils';

import { WordActionTypes } from './WordActions.jsx';

let word_count = 0;
let words = new Map();

['Walrus', 'Seal'].forEach((word)=>{
  words.set(word_count++,word);
});

let actionHandlers = {
  [WordActionTypes.CREATE]({word: word}){
    words.set(word_count++, word);
  },

  [WordActionTypes.DELETE]({word_id: id}){
    words.delete(id);
  }
};

export default class WordStore extends Store{

  __onDispatch( payload ){
    let actionHandler = actionHandlers[payload.actionType];

    if(actionHandler){
      actionHandler(payload);
      this.__emitChange();
    }
  }

  getWords(){
    return words;
  }
}
