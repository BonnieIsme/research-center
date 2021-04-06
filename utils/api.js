// const baseUrl = "http://192.168.2.211:8888"

const http = function(config = {}){
  wx.showLoading({
    title: '请求中',
    mask: true
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      // url: baseUrl +　config.url,
      url:"https://www.fastmock.site/mock/5855106367e56d270345fd48f06cf206/goods",
      data: config.data,
      header: config.header,
      method: config.header,
      timeout: 10000,
      complete: (res) => {
        wx.hideLoading();
        if(res.statusCode === 200){
          resolve(res)
        }else if(res.statusCode === 401){
          reject(res);
          console.log("Unauthorized");
        }else if(res.statusCode === 403){
          reject(res)
          console.log("Forbidden");
        }else if(res.statusCode === 404){
          reject(res)
          console.log("Not Found");
        }
      },
    })
  })
}

function getGoods(params){
  return http({
    url:`/goods?current=${params}`,
    data:null,
    method:'GET'
  })
}
export default {
  getGoods
}