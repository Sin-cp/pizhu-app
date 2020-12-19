// pages/index/me/me.js
const app = getApp()

Page({
  data: {
    user: {},
  },
  onShow: function (options) {
    wx.setNavigationBarTitle({
      title: "我的",
    })
    console.log()
    var that = this;
    wx.request({
      url: app.globalData.root + "wx/" + app.globalData.openid + ".do",
      method: 'GET',
      header: {
        'Content-type': 'application/json'
      },
      success: function (res) {
        that.setData({ user: res.data });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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