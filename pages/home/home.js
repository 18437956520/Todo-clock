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