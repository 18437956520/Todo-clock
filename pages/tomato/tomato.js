// pages/tomato/tomato.js
Page({

  data: {
    time: 1500,
    xxx: ""
  },

  
  onShow: function () {
    this.changeTime()
  },

  changeTime(){
    let min = Math.floor(this.data.time/60)
    let sec = Math.floor(this.data.time%60)
    if(sec === 0){
      sec = "00"
    }
    if((sec+"").length === 1){
      sec = "0" + sec
    }
    if((min+"").length === 1){
      min = "0" + min
    }
    this.setData({ xxx: `${min}:${sec}`})
  }
})