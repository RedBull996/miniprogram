//index.js

//获取应用实例
const app = getApp()

Page({
  startX: 0,
  //开始坐标
  startY: 0,
  data: {
    list: [{
      "applyID": 6017747,
      "FSelCreditID": 1765245,
      "FXSelCreditID": 8524108,
      "FTemApplyID": null,
      "FPersonName": "鲍克腾",
      "FPersonPhone": "18019551890",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 10
    }, {
      "applyID": 6017747,
      "FSelCreditID": 1765120,
      "FXSelCreditID": 8524108,
      "FTemApplyID": null,
      "FPersonName": "鲍克腾",
      "FPersonPhone": "18858336665",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 20
    }, {
      "applyID": 6017747,
      "FSelCreditID": 1765120,
      "FXSelCreditID": 8524108,
      "FTemApplyID": null,
      "FPersonName": "鲍克腾",
      "FPersonPhone": "18019551899",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 30
    }, {
      "applyID": 6017747,
      "FSelCreditID": 1765120,
      "FXSelCreditID": 8524108,
      "FTemApplyID": null,
      "FPersonName": "鲍克腾",
      "FPersonPhone": "18019551897",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 40
    }, {
      "applyID": 6017747,
      "FSelCreditID": 1765120,
      "FXSelCreditID": 8524108,
      "FTemApplyID": null,
      "FPersonName": "鲍克腾",
      "FPersonPhone": "18019551896",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 50
    }, {
      "applyID": 6017747,
      "FSelCreditID": 1765120,
      "FXSelCreditID": 8524108,
      "FTemApplyID": null,
      "FPersonName": "鲍克腾",
      "FPersonPhone": "18019551895",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 60
    }, {
      "applyID": 6017747,
      "FSelCreditID": 1765120,
      "FXSelCreditID": 8524108,
      "FTemApplyID": null,
      "FPersonName": "鲍克腾",
      "FPersonPhone": "18019551894",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 70
    }, {
      "applyID": 6017747,
      "FSelCreditID": 1765120,
      "FXSelCreditID": 8524108,
      "FTemApplyID": null,
      "FPersonName": "鲍克腾",
      "FPersonPhone": "18019551890",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 80
    }, {
      "applyID": 6017747,
      "FSelCreditID": 1765120,
      "FXSelCreditID": 8524108,
      "FTemApplyID": null,
      "FPersonName": "鲍克腾",
      "FPersonPhone": "18019551883",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 90
    }, {
      "applyID": 6017762,
      "FSelCreditID": 1765101,
      "FXSelCreditID": 8524176,
      "FTemApplyID": null,
      "FPersonName": "甘秋霞",
      "FPersonPhone": "18858336675",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行阿里斯顿金佛i瓦房",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 40
    }, {
      "applyID": 6017762,
      "FSelCreditID": 1765101,
      "FXSelCreditID": 8524176,
      "FTemApplyID": null,
      "FPersonName": "甘秋霞",
      "FPersonPhone": "18858336615",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行阿里斯顿金佛i瓦房",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 40
    }, {
      "applyID": 6017762,
      "FSelCreditID": 1765101,
      "FXSelCreditID": 8524176,
      "FTemApplyID": null,
      "FPersonName": "甘秋霞",
      "FPersonPhone": "18858336605",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行阿里斯顿金佛i瓦房",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 40
    }, {
      "applyID": 6017762,
      "FSelCreditID": 1765101,
      "FXSelCreditID": 8524176,
      "FTemApplyID": null,
      "FPersonName": "甘秋霞",
      "FPersonPhone": "17858336665",
      "MortgageTypeName": "信用类",
      "FDealerName": "宾阳风行阿里斯顿金佛i瓦房",
      "FEmpName": "汪南业务员",
      "FCarTypeName": "新车",
      "FState": 40
    }],
  },
  requstList: function (isLoadMore = false) {
    if (isLoadMore) {
      wx.showToast({
        title: '上拉加载更多',
      });
    } else {
      wx.showToast({
        title: '下拉刷新',
      });
    }
  },
  onReachBottom: function () {
    this.requstList(true);
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    this.requstList();
    setTimeout(() => {
      wx.hideNavigationBarLoading({
        success: (res) => {
          wx.stopPullDownRefresh({
            success: (res) => { },
          })
        },
      })
    }, 1000);
  },
  clickMennu: function (e) {
    console.log('tap父视图')
  },
  call: function (e) {
    try {
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.phone,
      })
    } catch (error) {

    }
  },
  touchE: function (e) {
    // console.log(e);
    var that = this
    if (e.changedTouches.length == 1) {
      //手指移动结束后触摸点位置的X坐标
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = that.data.startX - endX;
      var delBtnWidth = that.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "rpx" : "left:0rpx";

      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = that.data.list;
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      that.setData({
        list: list
      });
    }
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.list.forEach(function (v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    });
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      list: this.data.list
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      //当前索引
      startX = that.data.startX,
      //开始X坐标
      startY = that.data.startY,
      //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,
      //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,
      //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      },
        {
          X: touchMoveX,
          Y: touchMoveY
        });
    that.data.list.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      list: that.data.list
    })
  },
  /**
* 计算滑动角度
* @param {Object} start 起点坐标
* @param {Object} end 终点坐标
*/
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  deleteOrder: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(e)
    wx.showModal({
      cancelColor: '#333333',
      cancelText: '取消',
      confirmColor: '#e83c36',
      confirmText: '确定',
      content: `确认删除订单?`,
      showCancel: true,
      success: (result) => {
        wx.showToast({
          title: '删除成功',
          duration: 1000,
          icon: 'success',
          mask: true,
          success: (res) => {
            this.data.list.splice(index,1)
            this.setData({
              list: this.data.list
            });
          },
          fail: (res) => { },
          complete: (res) => {

          },
        })
      },
      fail: (res) => { },
      complete: (res) => { },
    })
  },
})
