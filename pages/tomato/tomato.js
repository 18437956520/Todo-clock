// pages/tomato/tomato.js
Page({

  timer: null,
  data: {
    defaultSecond: 1500,
    time: "",
    timerStatus: "pause",
    confirmVisible: false,
    againButtonVisible: false,
    finishConfirmVisible: false
  },

  




  onShow: function () {
    this.startTimer()
  },


  startTimer(){
    this.setData({timerStatus: "start"})
    this.changeTime()
    this.timer = setInterval(() => {
      this.data.defaultSecond = this.data.defaultSecond - 1
      this.changeTime()
      if(this.data.defaultSecond === 0){
        this.setData({againButtonVisible: true})
        this.setData({finishConfirmVisible: true})
        return this.clearTimer()
      }      
    }, 1000)
  },

  againTimer(){
    this.data.defaultSecond = 1500
    this.setData({ againButtonVisible: false })
    this.startTimer()
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
    wx.navigateBack({
      to: -1
    })
  },
  confirmFinish(event){
    let content = event.detail
  },
  confirmCancel(){
    this.setData({ finishConfirmVisible: false})
  },
  showConfirm(){
    this.setData({confirmVisible: true})
    this.clearTimer()
  },
  hideConfirm(){
    this.setData({confirmVisible: false})
    this.startTimer()
  }
})