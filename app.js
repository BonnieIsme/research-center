// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    pageTopHeight: wx.getSystemInfoSync().statusBarHeight+7+30+5,
    orderToCheck:true , // 帮助页面跳转判断，为true，则是从预约Tab页到结账页,
  }
})
