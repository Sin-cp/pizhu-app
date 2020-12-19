// pages/homeWorkContent/homeWorkContent.js
var common = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showChange: false,
    showModal: false,
    showText: true,
    message: '',
    info:'',
    text:''
  },
  textarea: function (e) {
    this.setData({
      text:e.detail
    })
    console.log(e.detail)
  },
  sumbit: function () {
    var that = this
    var parameters = 'http://118.178.185.168:8080/commentsystem/comment/add';
    var data = {
      annotation: "string",
      articleId: "string",
      endIndex: "string",
      paragraph: "string",
      score: "string",
      startIndex: "string",
      stuId: "string",
      text: this.data.text
    };
    common.request(parameters, data,'POST', function(res) {
      console.log(res);
    })
    wx.showLoading({
      title: '添加成功',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)    
    this.setData({
      showModal: false,
    })
    //清空
    this.setData({
      message: ''
    })
  },
  modalOpen: function () {
    console.log('11')
    this.setData({
      showModal: true,
      showText: false,
      showChange: false
    })
  },
  closeBtn: function () {
    this.setData({
      showModal: false
    })
    this.setData({
      message: ''
    })
  },
  touchStartOnclick: function () {
    this.setData({
      showChange: true
    })
  },
  touchEndOnclick: function () {
    this.setData({
      showChange: false
    })
  },
  onClick: function (e) {
    var that = this;
    wx.setClipboardData({
      //准备复制的数据
      data: that.data.url,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var parameters = 'http://118.178.185.168:8080/commentsystem/article/getall';
    var data = {
    };
    common.request(parameters, data, 'GET', function (res) {
      var array = res.data.data.items
      console.log(array);
      wx.getStorage({
        key: 'index',
        success(index) {
          console.log('password', index.data)
          that.setData({
            info: array[index.data].filePath
          })
        }
      })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

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

  }
})