// pages/order/order.js
const API = require('../../utils/api');
const app = getApp();
let hasReachBottom = false;
Page({
  data: {
    pageTopHeight: app.globalData.pageTopHeight,
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    // 清空缓存,初次加载
 
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 下拉刷新，清空缓存，加载第一次数据
   
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  // 到详情页
  toDetails(e){
    const element = JSON.stringify(e.currentTarget.dataset.element);
    wx.navigateTo({
      url: `/pages/order/details/index?element=${encodeURIComponent(element)}`,
    })
    app.globalData.switchToTab = true;
  },

  // 预约页到结账页，设置orderToCheck为true
  toCheck(e){
    const element = JSON.stringify(e.currentTarget.dataset.element);
    wx.navigateTo({
      url: `/pages/order/check/index?element=${encodeURIComponent(element)}`,
    })
    app.globalData.orderToCheck = true;
  },


  // 设置商品列表
  setGoods(index){
  const that = this;
  if(hasReachBottom){
    wx.showToast({
      title: '没有更多数据了',
      icon:'success'
    })
    return;
  }
  API.getGoods(index).then(res => {
    let array = res.data.data.records;
    array.forEach(item => {
      item.oldPrice = item.oldPrice.toFixed(2);
      item.newPrice = item.newPrice.toFixed(2);
    })
    that.setData({
      list:array
    })
  })
   
    
  }
})

