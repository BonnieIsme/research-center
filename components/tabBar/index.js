// components/bottomBar/index.js
Component({
  data:{
    color:"#C2C0C0",
    selectedColor:"F4393B",
    select:0,
    list:[
      {
        tag:"index",
        text:"首页",
        path:"pages/index/index",
      },
      {
        tag:"order",
        text:"预约",
        path:"pages/order/index"
      }
    ]
  },

 methods:{
  switchTab(e){
    const data = e.currentTarget.dataset;
    const url = data.path;
    wx.switchTab({
      url: url
    })
    this.setData({
      select:data.index
    })
    
  }
 }
})