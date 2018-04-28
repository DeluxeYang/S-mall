Page({
  data: {
    current: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    goods_sorted_by_price: [],
    list_goods: [{
        "id": '0101001',
        "name": "Zespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
        "price": "60.0",
        "type": "3.3kg/箱",
        "pic_url": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
      }, {
        "id": '0101002',
        "name": "智利蓝莓2盒（约125g/盒）",
        "pic_url": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg",
        "price": "30.0",
        "type": "3.3kg/箱"
      }, {
        "id": '0101003',
        "name": "澳大利亚脐橙12个约160g/个(北京)",
        "price": "20.0",
        "type": "3.3kg/箱",
        "pic_url": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
      }]
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    //ajax请求数据
    // wx.request({
    //         url: 'http://www.htmlk.cn/json-test/lists.json',
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         success: function(res) {
    //            switch1(res.data);
    //            console.log(res.data);
    //            that.setData({
    //                listgoods:res.data
    //            });
    //         }
    //     })
    //对商品进行价格排序
    this.setData({
      goods_sorted_by_price: this.data.list_goods.sort(function (a, b) { return a["price"] - b["price"] })
    });
  },
  //详情页跳转
  lookdetail: function (e) {
    var lookid = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: "/pages/yiguo/detail/detail?id=" + lookid.id
    })
  },
  switchSlider: function (e) {
    this.setData({
      current: e.target.dataset.index
    })
  },
  changeSlider: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }

})