import AppDispatcher from './AppDispatcher.jsx';
import WordStore from './WordStore.jsx';
import WordActions from './WordActions.jsx';



class SingletonContainer{
  constructor(){
    this.singletons = new Map();

    let self = this;
    this.singleton_generators = {
      WordStore(){
        return new WordStore(self.get_instance('AppDispatcher'));
      },
      AppDispatcher(){
        return new AppDispatcher();
      },
      WordActions(){
        return new WordActions(self.get_instance('AppDispatcher'));
      }
    }
  }

  get_instance(singleton){
    // If there is no matching singleton instance
    // Try to create one
    if(!this.singletons.has(singleton)){
      var generator = this.singleton_generators[singleton];
      if(generator){
        this.singletons.set(singleton,generator());
      }
    }
    // Return the matching singleton instance
    return this.singletons.get(singleton);
  }
}


export const Singletons = new SingletonContainer();
