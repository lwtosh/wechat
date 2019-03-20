
// let timeId;
// let time1;
// let time2;
const app = getApp()
Page({
  data: {
    operateBtn: "开始",
    started:false,
    showView: false,
    flag: false,
    imgUrls: [
      '../../asset/iphone-4.jpg',
      '../../asset/ipoone1.png',
      '../../asset/iphone-3.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    num: 0,
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
  stop: function () {
    clearInterval(this._interval)
    this.setData({
      started: false, operateBtn: '再来一局'
    })
    this.selectComponent('#stopwatch').stop();
      if (this.data.text === 10) {
        this.setData({
         text: 10.001
        })
      } else {
        this.setData({ flag: true })
        console.log('失败')
      }
  },
  start: function () {
    this.setData({
      started: true,operateBtn: '暂停'
    })
    this.selectComponent('#stopwatch').start()
  },
    // if (!timeId) {
    //   this.setData({
    //     operateBtn: "停止"
    //   })
    //   time1 = new Date();
    //   timeId = setInterval(function() {
    //     this.setData({
    //       text: ((new Date() - time1) / 1000).toFixed(3)
    //     })
    //   }.bind(this), 1)
    // } else {
    //   clearInterval(timeId);
    //   timeId = null;
    //   this.setData({
    //     operateBtn: "再来一局"
    //   })
    //   console.log(this.data.e)
    //   if (this.data.text === 10) {
    //     this.setData({
    //      text: 10.001
    //     })
    //   } else {
    //     this.setData({ flag: true })
    //     console.log('失败')
    //   }
    
  onChangeShowState: function() {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  conceal: function() {
    this.setData({
      showView: false
    })
  },
  onChangeHideState:function(){
    this.setData({
      flag: true
    })
  },
  onLoad: function(options) {
    showView: (options.showView == "true" ? true : false);
  }
})