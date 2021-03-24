// components/head/index.js
// 组件形式，js中使用Component
Component({
  data:{
    paddingTopNum: wx.getSystemInfoSync().statusBarHeight+7,
  },
  properties:{
    text:{
      type:String,
      value:""
    }
  }
})