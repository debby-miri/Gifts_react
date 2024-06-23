import {makeObservable,observable,computed,action} from 'mobx'
class GenderEventsCategoryStore{
    gender = [];
    events=[];
    category=[];
    constructor () {
        makeObservable(this, {

          Gender: computed,
          Events: computed,
          Category: computed,
          setGender:action,
          setEvents:action,
          setCategory:action,

        });
      }
    get Gender() {
        return this.gender;
    }
    get Events() {
        return this.events;
    }get Category() {
        return this.category;
    }
    setGender=(o)=> {
        this.gender = o;
    }
    setEvents=(o)=> {
        this.events = o;
    }  
    setCategory=(o)=> {
        this.category = o;
    }
}
export default new GenderEventsCategoryStore();