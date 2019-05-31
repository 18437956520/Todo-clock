// pages/tomato/tomato.js
Page({

  timer: null,
  data: {
    defaultSecond: 15,
    time: "",
    timerStatus: "pause",
    confirmVisible: false,
    againButtonVisible: false
  },

  
  onShow: function () {
    this.startTimer()
  },

  startTimer(){
    this.setData({timerStatus: "start"})
    this.changeTime()
    this.timer = setInterval(() => {
      if(this.data.defaultSecond === 0){
        this.setData({againButtonVisible: true})
        return this.clearTimer()
      }
      this.data.defaultSecond = this.data.defaultSecond - 1
      this.changeTime()
    }, 1000)
  },

  clearTimer(){
    clearInterval(this.timer)
    this.timer = null
    this.setData({ timerStatus: "pause"})
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
  },
  confirmAbandon(event){
    let content = event.detail
  },
  showConfirm(){
    this.setData({confirmVisible: true})
  },
  hideConfirm(){
    this.setData({confirmVisible: false})
  }
})