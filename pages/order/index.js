// pages/order/order.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTopHeight: app.globalData.pageTopHeight,
    list:[
      {
        id:123,
        src:"https://dummyimage.com/400X300/2a7ce8/fff",
        title:"自我认知+学业规划",
        subtitile:"个性化指定孩子的学业规划建议",
        price:2980.00,
        oldPrice:2980.00
      },
      {
        id:123,
        src:"https://dummyimage.com/400X300/2a7ce8/fff",
        title:"自我认知+学业规划",
        subtitile:"个性化指定孩子的学业规划建议",
        price:2980.00,
        oldPrice:2980.00
      },
      {
        id:123,
        src:"https://dummyimage.com/400X300/2a7ce8/fff",
        title:"自我认知+学业规划",
        subtitile:"个性化指定孩子的学业规划建议",
        price:2980.00,
        oldPrice:2980.00
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  toDetails(){
    wx.navigateTo({
      url: '/pages/order/details/index',
    })
  },

  toCheck(){
    wx.navigateTo({
      url: '/pages/order/check/index',
    })
  }
})

