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
      if(app.globalData.switchToTab === false){
        let detailsIndex = getCurrentPages().findIndex(item => item.route == "pages/order/details/index")
        app.globalData.switchToTab = true;
        wx.navigateBack({
          delta: detailsIndex,
        });
      }else{
        wx.switchTab({
        url: this.properties.url,
      })
      }
    }
  }
})