// pages/order/check/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTopHeight: app.globalData.pageTopHeight,
    pathToOrder:"/pages/order/index",
    pathToDetail:"/pages/order/details/index",
    flag:app.globalData.orderToCheck,
    item:{
      id:123,
      src:"https://dummyimage.com/100X60/2a7ce8/fff",
      title:"自我认知+学业规划",
      subtitile:"个性化指定孩子的学业规划建议",
      price:2980.00,
      oldPrice:2980.00,
      quantity:1,
      total:2980
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(`check${this.data.flag}`);
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

  // 到店支付按钮
  shopPay(){
    console.log("走！去店里支付~");
  }
})