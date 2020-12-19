// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageURL1: '../../Images/yiTian.jpg',
    imageURL2: '../../Images/xiaoZhao.jpg',
    imageURL3: '../../Images/luRen.jpg',
    showModal: false,
    message: '',
    preson:'选择留言对象',
    show: false,
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  },
  onChange(event) {
    const { picker, value, index } = event.detail;
    this.setData({
      preson:value
    })
  },
  confirm: function (res) {
    console.log(res)
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  entity: function () {
    this.setData({
      show: true
    })
  },
  write: function () {
    this.setData({
      showModal: true
    })
  },
  closeBtn: function () {
    this.setData({
      showModal: false
    })
    this.setData({
      message: ''
    })
  }, sumbit: function () {
    this.setData({
      showModal: false
    })
    this.setData({
      message: ''
    })
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: "留言",
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