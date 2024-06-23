import React from 'react';
import {makeObservable,observable,computed,action} from 'mobx'
class UserStore{
    user = {
        userId: 1,
        firstName: "nnnnnnnn",
        lastName: "string",
        phon: "string",
        mail: "string",
        status: 0,
        dateOfStatusChange: "0001-01-01T00:00:00",
        password: "string",
        giftsList: []
    }
    isLogin = false;
    constructor () {
        makeObservable(this, {
          user: observable,
          isLogin: observable,
          UserDetails: computed,
          setUser: action
        });
      }
    get UserDetails() {
        return this.user;
    }
    setUser=(user)=> {
        this.user = user;
    }
}
export default new UserStore();