// pages/tomato/tomato.js
Page({

  data: {
    defaultSecond: 1500,
    time: "",
    timer: null
  },

  
  onShow: function () {
    this.changeTime()
    this.timer = setInterval(()=>{
      this.data.defaultSecond = this.data.defaultSecond - 1
      this.changeTime()
    },1000)
  },

  changeTime(){
    let min = Math.floor(this.data.defaultSecond/60)
    let sec = Math.floor(this.data.defaultSecond%60)
    if(sec === 0){
      sec = "00"
    }
    if((sec+"").length === 1){
      sec = "0" + sec
    }
    if((min+"").length === 1){
      min = "0" + min
    }
    this.setData({ time: `${min}:${sec}`})
  }
})