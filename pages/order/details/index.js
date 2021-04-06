// pages/order/details/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageTopHeight: app.globalData.pageTopHeight,
    pageIndex:1,
    item:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let element = JSON.parse(decodeURIComponent(options.element));
    this.setData({
      item:element
    })
  },

  toCheck(){
    const element = JSON.stringify(this.data.item);
    wx.navigateTo({
      url: `/pages/order/check/index?element=${encodeURIComponent(element)}`,
    });
    app.globalData.orderToCheck = false;
  },
})