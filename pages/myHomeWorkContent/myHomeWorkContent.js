// pages/myHomeWorkContent/myHomeWorkContent.js
var common = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'',
    title:''
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
          console.log('index.data',index.data)
          var parameters1 = 'http://118.178.185.168:8080/commentsystem/comment/get/{id}';
          var data1 = {
            id:index.data
          }
          common.request(parameters1, data1, 'GET', function (res) {
            console.log('+99959595',res)
          })
          console.log('password', index.data)
          that.setData({
            text: array[index.data].filePath,
            title:array[index.data].title
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
  onShow: function () {
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
  },

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