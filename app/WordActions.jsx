export const WordActionTypes = {
  CREATE: "WORDCREATE",
  DELETE: "WORDDELTE"
}

export default class WordActions{
  constructor(dispatcher){
    this.dispatcher = dispatcher;
  }

  add_word(word){
    this.dispatcher.dispatch({
      actionType: WordActionTypes.CREATE,
      word: word
    });
  }

  delete_word(id){
    this.dispatcher.dispatch({
      actionType: WordActionTypes.DELETE,
      word_id: id
    });
  }
}
