// pages/order/details/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageTopHeight: app.globalData.pageTopHeight,
    item:{
      id:123,
      src:"https://dummyimage.com/400X300/2a7ce8/fff",
      title:"自我认知+学业规划",
      subtitile:"个性化指定孩子的学业规划建议",
      price:2980.00,
      oldPrice:2980.00,
      description:"根据了解孩子个性化特质,给出优势学习通道、优势学科、高考选科建议、大学理想专业的具体建议，制定符合孩子人格特质、核心能力、优势潜能、兴趣爱好的学业规划建议。"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toCheck(){
    wx.navigateTo({
      url: '/pages/order/check/index',
    });
    app.globalData.orderToCheck = false;
  }
})