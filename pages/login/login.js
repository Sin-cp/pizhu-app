
var commen = require('../../utils/util')

// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    checked: false,
    remember: ''
  },
  getUsername: function (e) {
    console.log(e)
    this.setData({
      username: e.detail
    })
    console.log(this.data.username)
  },
  getPassword: function (e) {
    console.log(e)
    this.setData({
      password: e.detail
    })
    console.log(this.data.password)
  },
  onChange(event) {
    var that = this;
    console.log(event.detail)
    console.log(that.data.username)
    console.log(that.data.password)
    if (event.detail) {
      that.setData({
        remember: true
      })
    } else {
      that.setData({
        remember: true
      })
    }
    this.setData({
      checked: event.detail,
    });
  },
  loginBtn: function () {
    var that = this
    // var parameters = '/Roles/GetAreasByRoleId';
    // var data = {
    //   roleids: roleids,
    //   projectid: proid,
    //   userid: uId
    // };
    // common.request(parameters, data,'GET', function(res) {

    // })
    if (that.data.checked) {
      wx.setStorage({
        data: that.data.username,
        key: 'username',
      })
      wx.setStorage({
        data: that.data.password,
        key: 'password',
      })
    } else {
      wx.setStorage({
        data: '',
        key: 'username',
      })
      wx.setStorage({
        data: '',
        key: 'password',
      })
    }
    wx.switchTab({
      url: '/pages/homeWork/homeWork',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(that.data.remember)
    wx.getStorage({
      key: 'username',
      success(username) {
        console.log('username', username.data)
        that.setData({
          username: username.data
        })
      }
    })
    wx.getStorage({
      key: 'password',
      success(password) {
        console.log('password', password.data)
        that.setData({
          password: password.data
        })
      }
    })
    wx.setNavigationBarTitle({
      title: "用户登录",
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