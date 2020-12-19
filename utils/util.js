var config = require("./config")

//rerquest封装，parameters为webservice方法名，data为post请求数据
function request(parameters = "", data, method ,success, header = {}) {
  wx.request({
    url: config.BaseURL + parameters,
    data: data ? data : {},
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: header ? header : "application/json", // 设置请求的 header
    success: function(res) {
      success(res);
    },
    
    complete: function() {
      // complete
    }
  })
}
function showBox(){
  wx.showLoading({
    title: '加载中...',
    mask:true
  })
}

module.exports = {
  request:request,
  showBox:showBox
}

