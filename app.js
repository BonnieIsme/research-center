// app.js
App({
  onLaunch() {
   
  },
  globalData: {
    pageTopHeight: wx.getSystemInfoSync().statusBarHeight+7+30+5,
    orderToCheck:true , // 帮助页面跳转判断，为true，则是从预约Tab页到结账页,
  },
  // 封装request请求
  request(method,url,data={},params={},header={}){
    return new Promise((resolve,reject) => {
      wx.request({
        url: url,
        data: data,
        dataType: dataType,
        enableCache: true,
        enableHttp2: true,
        enableQuic: true,
        header: header,
        method: method,
        responseType: responseType,
        timeout: 5000,
        success: (res) => {
          // 请求成功
          if(res.statusCode === 200){
            resolve(res);
          }
          // 请求成功无响应体
          else if(res.statusCode === 204){
            resolve(res)
          }
          else{
            reject(res)
          }
        },
        fail: (err) => {
          reject(res)
        },
        complete: (res) => {},
      })
    })
  }
})
