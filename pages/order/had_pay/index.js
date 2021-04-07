// pages/order/had_pay/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTopHeight: app.globalData.pageTopHeight,
    list:[
      {
        image:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3101694723,748884042&fm=26&gp=0.jpg",
        title:"测试1",
        instroduction:"测试11",
        newPrice:22,
        oldPrice:11
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toDetails(e){
    const path = "/pages/order/had_pay/index"
    const element = JSON.stringify(e.currentTarget.dataset.element);
    wx.navigateTo({
      url: `/pages/order/details/index?element=${encodeURIComponent(element)}&path=${path}`,
    });
    app.globalData.switchToTab = false;
  },
})