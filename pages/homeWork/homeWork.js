// pages/homeWork/homeWork.js
var common = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageURL:'../../Images/selected/homeWork1.png',
    imageURL1:'../../Images/homeWork3.png',
    time: 30 * 60 * 60 * 1000,
    array:[]
  },
  itemOnclick:function(res){
    console.log('resresres', res.currentTarget.dataset.index)
    wx.setStorage({
      data: res.currentTarget.dataset.index,
      key: 'index',
    })
    wx.navigateTo({
      url: '/pages/homeWorkContent/homeWorkContent',
    })
  },
  finish:function(){
    wx.showToast({
      title: '作业已截止！',
      icon: 'none',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var parameters = 'http://118.178.185.168:8080/commentsystem/article/getall';
    var data = {
    };
    common.request(parameters, data,'GET', function(res) {
      console.log(res);
      that.setData({
        array:res.data.data.items
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
      title: "作业",
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