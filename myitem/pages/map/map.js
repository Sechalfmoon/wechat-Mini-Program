Page({
  data: {
    latitude: 30.653286,
    longitude: 104.054468,
    markers: [{
      id: 1,
      latitude: 30.653286,
      longitude: 104.054468,
      name: '武侯祠'
    }],
    covers: [{
      latitude:  30.653286,
      longitude: 104.054468,
      iconPath: '/image/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 30.653286,
        longitude: 104.054468,
      }, {
          latitude: 30.653286,
          longitude: 104.054468,
      }]
    })
  }
})
