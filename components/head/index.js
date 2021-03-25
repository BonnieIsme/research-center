// components/head/index.js
// 组件形式，js中使用Component
const app = getApp();
Component({
  data:{
    paddingTopNum: wx.getSystemInfoSync().statusBarHeight + 7,
  },
  properties:{
    text:{
      type:String,
      value:""
    },
    showLeft:{
      type:Boolean,
      value:false
    },
    url:{
      type:String,
      value:""
    }
  },
  methods:{
    turnTo(){
      console.log(this.properties.url);
      console.log(app.globalData.orderToCheck);
      if(this.properties.url === "/pages/order/details/index"){
        wx.navigateTo({
          url: this.properties.url,
        })
      }else{
        if(this.properties.url === "/pages/order/index"){
          app.globalData.orderToCheck = false;
        }
        wx.switchTab({
          url: this.properties.url,
        })
      }
    }
  }
})