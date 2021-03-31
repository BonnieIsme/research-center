// app.js
App({
  onLaunch() {
  },
  globalData: {
    pageTopHeight: wx.getSystemInfoSync().statusBarHeight+7+30+5,
    orderToCheck:true , // 帮助页面跳转判断，为true，则是从预约Tab页到结账页,
  },
})
