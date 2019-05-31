// pages/home/home.js
Page({

  data: {
    lists:[
  
    ]      
  },
  confirm(event){

  },
  confirmCreate(event){
    let content = event.detail
    if(content){
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false }]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({lists: this.data.lists})
      this.hideConfirm()
    }
    
  },
  destroyTodo(event){
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({lists:this.data.lists})
  },
  hideConfirm(){
    this.setData({visibleConfirm: false})
  },
  showConfirm(){
    this.setData({visibleConfirm: true})
  }

})