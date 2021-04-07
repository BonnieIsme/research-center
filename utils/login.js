const API = require('../utils/api')

// 判断有没有这个用户，没有就去授权登录
function login(){
  let _this = this;
  // 登录过后，用户信息会缓存
  let user = wx.getStorageInfoSync('user');
  if(!user){
    _this.toAuthorize();
  }
}

// 去登录页登录
function goProfile(){
  wx.switchTab({
    url: '/pages/profile/index',
  })
}

// 看是否授权
function toAuthorize(){
  let _this = this;
  wx.getSetting({
    withSubscriptions: true,
    success:res =>{
      if(!res.authSetting['scope.userInfo']){
        _this.goProfile();
      }else{
        _this.toLogin();
      }
    }
  })
}

// 执行登录并获取token
function toLogin(){
  wx.login({
    timeout: 4000,
    success:async res => {
      if(res.code){
        let res = await API.getToken({code:res.code});
        console.log(res); // 此处应返回token
        wx.setStorage({
          data: res.token,
          key: 'token',
        })
      }
    }
  })
}
  module.exports = {
    
  }