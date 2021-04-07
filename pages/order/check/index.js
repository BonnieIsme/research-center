// pages/order/check/index.js
const API = require('../../../utils/api')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTopHeight: app.globalData.pageTopHeight,
    pathToOrder:"/pages/order/index",
    pathToDetail:"/pages/order/details/index",
    flag:app.globalData.switchToTab,
    item:{},
    name:"",
    tel:"",
    note:"",
    quantity:1,
    total:0,
  },

  onLoad: function (options) {
    const element = JSON.parse(decodeURIComponent(options.element));
    this.setData({
      item:element,
      total:element.newPrice,
    })
  },

  // 到店支付按钮
  shopPay(){
    wx.showToast({
      title: '去店里~',
      icon:'success'
    })
  },

  changeQuantity(e){
    this.setData({
      quantity:e.detail.value,
      total:(e.detail.value * this.data.item.newPrice).toFixed(2)
    })
  },

  setName(e){
    this.setData({
      name:e.detail.value
    })
  },

  setTel(e){
    this.setData({
      tel:e.detail.value
    })
  },

  setNote(e){
    this.setData({
      note:e.detail.value
    })
  },

  // 提交预约
  async formSubmit(e){
    const formData = e.detail.value;
    let goodsId = parseInt(this.data.item.id);
    let goodsNumber = this.data.quantity;
    let message = formData.note;
    let name = formData.name;
    let tel = formData.tel;
    if((name!=="" && name !== null) && (tel !=="" && tel !== null)){
      let pattern = /^1\d{10}$/;
      if(pattern.test(tel)){
        let res = await  API.postCheckOrdered({
         "goodsId":goodsId,
         "name":name,
         "tel":tel
         });
         // 用户id与用户是否已预约过
         let clientId = parseInt(res.data.data.id);
         let ordered = res.data.data.ordered;
        console.log(ordered);
       if(ordered){
        wx.showToast({
        title: '你已经预约过了',
        icon:'success',
        duration:5000
      })
       }else{
      this.submitOrder(clientId,goodsId,goodsNumber,message);
         }
      }else{
       wx.showToast({
        title: '电话号码有误',
        icon:'error'
       })
        }
    }else{
      let msg = null;
        if(name == null || name == ""){
          msg = "姓名不能为空"
        }else{
          msg = "电话不能为空"
        }
        wx.showToast({
          title: msg,
          icon:'error'
        })
    }
  },

  // 提交预约
  submitOrder(clientId,goodsId,goodsNumber,message){
    API.postOrderForm({
      "clientId":clientId,
      "goodsId":goodsId,
      "goodsNumber":goodsNumber,
      "message":message
    }).then(res => {
      if(!res.data.success){
        wx.showToast({
          title: res.data.errMsg,
          icon:'error'
        })
      }
      wx.showToast({
        title: '已提交',
        icon:'success'
      })
      console.log('成功提交',res);
    }).catch(err => {
      console.log('提交失败',err);
    })
  }


})