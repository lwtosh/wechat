// pages/demo/demo01.js
// var wxTimer = require('../../utils/tw.js')
// var app = getApp();
Page({
  data: {
    f: 0,
    e: 0,
    d: 0,
    c: 0,
    b: 0,
    operateBtn: "开始",
    imgUrls: [
      '../../asset/iphone-4.jpg',
      '../../asset/ipoone1.png',
      '../../asset/iphone-3.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  Btn: function() {
    this.setData({
      operateBtn: "暂停"
    })
    var totalSecond = 1505540080 - Date.parse(new Date()) / 1000;
   console.log(totalSecond)

  },
  onLoad: function(options) {

  },
  onReady: function() {

  },

  onShow: function() {

  },

  onHide: function() {

  },

  onUnload: function() {

  },

  onPullDownRefresh: function() {

  },

  onReachBottom: function() {

  },

  onShareAppMessage: function() {

  }
})