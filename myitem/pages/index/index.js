
var app = getApp();

var config = {
  data: {
    disable: false,
    gameList: ['2048'],
    imgUrls: [
      
'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=711643832,795786241&fm=27&gp=0.jpg',      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=634489083,3186631899&fm=27&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=882740234,2705555027&fm=27&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3775441107,2093786974&fm=27&gp=0.jpg'

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 2000,
    contentItems: ['', '', ''],
    contentItems1: ['', '']
  },

  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {
    // 页面渲染完毕
  },
  onShow: function () {
    // 页面展示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  navigateTo: function () {
   wx.navigateTo({
     url: '../2048/2048',
   })
  },
  mapTo: function(){
    wx.navigateTo({
      url: '../map/map',
    })
  },
  erTo: function(){
    wx.navigateTo({
      url: '../er/er',
    })
  }
};

/*config.data.gameList.forEach(function (v) {
  config['start' + v] = function () {

    config.data.disable = true;

    // 这里需要注意每个游戏文件夹名称需和js名称保持一致
    wx.navigateTo({
      url: '../2048/2048'
    })
  }
});*/



Page(config);
