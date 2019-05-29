// pages/home/home.js
Page({

  data: {
    lists:[
      {id: 1, text:"111111111111111111", finished: true},
      {id: 2, text:"222222222222222222", finished: true},
      {id: 3, text:"333333333333333333", finished: false},
      {id: 4, text:"444444444444444444", finished: false},
      {id: 5, text:"555555555555555555", finished: false}
    ]      
  },
  confirm(event){

  },
  concel(event){

  },
  showConfirm(){
    this.setData({visibleConfirm: true})
  }

})