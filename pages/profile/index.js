// pages/profile/index.js
const API_LOGIN = require('../../utils/login')
const app = getApp()
Page({
  data: {
    pageTopHeight: app.globalData.pageTopHeight,
    hasUserInfo:false, // 当前是否有用户信息
    // userInfo:app.globalData.userInfo
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 授权
  getUserInfo(){
    wx.getUserProfile({
      desc:'获取用户信息',
      success:(res)=>{
        // console.log(res);
        wx.setStorage({
          data: res.userInfo,
          key: 'userInfo',
        })
        this.setData({
          hasUserInfo:true
        })
      }
    })
  },

  // 点击去已支付订单页面
  toPaid(){
    app.globalData.orderToCheck = true;
    wx.navigateTo({
      url: '/pages/order/had_pay/index',
    })
  },

  // 点击去未支付订单页面
  toPrepaid(){
    app.globalData.orderToCheck = true;
    wx.navigateTo({
      url: '/pages/order/no_pay/index',
    })
  }

})