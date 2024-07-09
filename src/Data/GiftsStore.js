import React from 'react';
import { makeObservable, observable, computed, action } from 'mobx'
class GiftStore {
  Gifts = []
  temp = []
  IsDate = false;
  IsOpinion = false;
  IsView = false;
  constructor() {
    makeObservable(this, {
      Gifts: observable,
      IsDate: observable,
      IsOpinion: observable,
      IsView: observable,
      GiftsList: computed,
      setGifts: action,
      AddGift: action,
      UpdateGift: action,
      sortByOpinion: action,
      sortByDate: action,
      sortByDefualt: action,
      saveTemp: action
    });
  }
  get GiftsList() {
    return this.Gifts;
  }
  setGifts = (Gifts) => {
    this.Gifts = Gifts;
  }
  AddGift = (gift) => {
    this.Gifts.push(gift);
    this.temp.push(gift)
  }
  UpdateGift = (id, newVal) => {
    let i = this.Gifts.findIndex(g => g.giftId == id)
    //this.Gifts[i].numberOfViews = newVal.numberOfViews;
    this.Gifts[i]={...newVal}
  }
  updateOpinion = (id, op) => {
    let i = this.Gifts.findIndex(g => g.giftId == id)
    this.Gifts[i].opinionsList.push(op);
  }
  sortByOpinion = () => {
    this.IsOpinion = true
    const arr = [...this.Gifts]

    this.setGifts(arr.sort((a, b) =>
      (a.opinionsList.filter(o => o.positiveOpinion)).length - (b.opinionsList.filter(o => o.positiveOpinion)).length
    ).reverse())
  }
  sortByView = () => {
    this.IsView = true
    const arr = [...this.Gifts]

    this.setGifts(arr.sort((a, b) => a.numberOfViews - b.numberOfViews).reverse()
    )
  }
  sortByDate = () => {
    this.IsDate = true
    const arr = [...this.Gifts]
    this.setGifts(arr.sort((a, b) => new Date(a.dateOfEntry) - new Date(b.dateOfEntry)
    ))
  }
  sortByDefualt = () => {
    const arr = [...this.Gifts]
    this.setGifts(arr.sort((a, b) => a.giftId - b.giftId))
  }
  saveTemp = (t) => {
    this.temp = [...this.Gifts]
    this.Gifts = [...t]
  }
  delete=(id)=>{
    this.Gifts=this.Gifts.filter(g=>g.giftId!=id)
    this.temp=this.temp.filter(g=>g.giftId!=id)

  }
}

export default new GiftStore();