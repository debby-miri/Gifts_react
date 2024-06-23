import React from 'react';
import { makeObservable, observable, computed, action } from 'mobx'
class GiftStore {
  Gifts = [


    // {

    //   GiftId: 1,
    //   name: "ring",
    //   description: "Beautiful rings in a variety of colors, shades and prices",
    //   numberOfViews: 5,
    //   startingAge: 3,
    //   endingAge: 120,
    //   estimatedPrice: 100,
    //   gender: true,
    //   link: "https://www.magnolia.co.il/rings.html",
    //   dateOfEntry: 42,
    //   imageUrl: "https://www.magnolia.co.il/media/catalog/product/cache/44d02d61baca01f9fd9848fad9f9e470/r/3/r31500g-1.webp",
    //   events: 1,
    //   categry: 6,
    //   opinionsList: [{
    //     PositiveOpinion: true,
    //     description: "nice"
    //   },
    //   {
    //     PositiveOpinion: false,
    //     description: "not a good idea "
    //   },
    //   {
    //     PositiveOpinion: true,
    //     description: "very fun to get it"
    //   }
    //   ],
    //   UserId: 1,
    // }, {

    //   GiftId: 2,
    //   name: "doll",
    //   description: "Beautiful doll in a variety of colors, shades and prices",
    //   nmberOfViews: 5,
    //   startingAge: 2,
    //   endingAge: 7,
    //   estimatedPrice: 50,
    //   gender: true,
    //   link: "https://www.picjew.com/Thumbnail/10122009050807mmpxgh55sepfpu55lpe3j055.jpg",
    //   dateOfEntry: Date.now(),
    //   imageUrl: "https://www.picjew.com/Thumbnail/10122009050807mmpxgh55sepfpu55lpe3j055.jpg",
    //   events: 1,
    //   categry: 6,
    //   opinionsList: [],
    //   UserId: 1,
    // }, {

    //   GiftId: 3,
    //   name: "bag",
    //   description: "Beautiful bags in a variety of colors, shades and prices",
    //   numberOfViews: 5,
    //   startingAge: 15,
    //   endingAge: 40,
    //   estimatedPrice: 250,
    //   gender: true,
    //   link: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuQ5Q2rnJDcKUYuet7eCwTpgqZCLJCxWJ-h8--jo1ZWQ8Oz0DOZj5J1bw178IykskZosBX4V4M35IhoA97bkzDfCPEg168_E_FQbxZ9Z5xZXDhw1pS-0j1YYfhoHSMPkZGTxjc3Knx5w&usqp=CAc",
    //   dateOfEntry: Date.now(),
    //   imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuQ5Q2rnJDcKUYuet7eCwTpgqZCLJCxWJ-h8--jo1ZWQ8Oz0DOZj5J1bw178IykskZosBX4V4M35IhoA97bkzDfCPEg168_E_FQbxZ9Z5xZXDhw1pS-0j1YYfhoHSMPkZGTxjc3Knx5w&usqp=CAc",
    //   events: 1,
    //   categry: 6,
    //   opinionsList: [],
    //   UserId: 1,
    // }, {

    //   GiftId: 4,
    //   name: "rug",
    //   description: "Beautiful rugs in a variety of colors, shades and prices",
    //   numberOfViews: 5,
    //   startingAge: 3,
    //   endingAge: 120,
    //   estimatedPrice: 100,
    //   gender: true,
    //   link: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSuwlmoxVBoP73GGUNpKuGbmLaC88tUqansD3FEwBEW7qsDH2ytne-1jyuP53b5EGelGz9BjqPPy88zR1MPtg&s=19",
    //   dateOfEntry: Date.now(),
    //   imageUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSuwlmoxVBoP73GGUNpKuGbmLaC88tUqansD3FEwBEW7qsDH2ytne-1jyuP53b5EGelGz9BjqPPy88zR1MPtg&s=19",
    //   events: 1,
    //   categry: 6,
    //   opinionsList: [],
    //   userId: 1,
    // }


  ]
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
      sortByDefualt: action
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
  }
  UpdateGift = (id, newVal) => {
    let i = this.Gifts.findIndex(g => g.giftId == id)
    this.Gifts[i].numberOfViews = newVal.numberOfViews;
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

    this.setGifts(arr.sort((a, b) => a.numberOfViews - b.numberOfViews
    )
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
}

export default new GiftStore();