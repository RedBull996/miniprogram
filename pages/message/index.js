// pages/message/index.js
Page({
  data: {
    datasource: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    index:0
  },
  clickTab: function (e) {
    wx.getSystemInfo({
      success: (result) => {
        console.log(result)
      },
    })
    let index = e.currentTarget.dataset.index;
    if(index == 0){
      this.setData({
        index:0,
        toView:'item0'
      })
    } else {
      this.setData({
        index:1,
        toView:'item1'
      })
    }
  },
})