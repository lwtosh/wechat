// pages/demo/demo01.js
// var wxTimer = require('../../utils/tw.js')
// var app = getApp();
let timeId;
let time1;
let time2;

Page({
  data: {
    e: '0.000',
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
    circular: true,
    num:0,
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
    if (!timeId){
      this.setData({
        operateBtn: "停止"
      })
      time1 = new Date();
      timeId = setInterval(function () {
        this.setData({
          e: ((new Date() - time1) / 1000).toFixed(3)
        })
      }.bind(this), 1)
    }else{
      clearInterval(timeId);
      timeId = null;
      this.setData({
        operateBtn: "再来一局"
      })
      console.log(this.data.e)
      if(this.data.e===10){
        this.setData({
          e: 10.001
        })
      }else{
        console.log('失败')
      }
    }
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