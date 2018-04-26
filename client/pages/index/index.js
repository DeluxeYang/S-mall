//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'Deluxe',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    new_goods: [
      "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg",
      "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg",
    ],
    promotional_goods: [
      "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg",
      "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
      "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg",
    ],
    swiper_list: [
      "http://img09.yiguoimg.com/e/ad/2016/160825/585749448986042649_800x400.jpg",
      "http://img11.yiguoimg.com/e/ad/2016/160927/585749449690947899_800x400.jpg",
      "http://img14.yiguoimg.com/e/ad/2016/160923/585749449636290871_800x400.jpg",
      "http://img13.yiguoimg.com/e/ad/2016/160914/585749449480315182_800x400.jpg",
      "http://img14.yiguoimg.com/e/ad/2016/161010/585749449889390922_800x400.jpg",
    ]
  },
  
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
})

