//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    dataSource: [{
      "parentId": 140,
      "menuName": "系统信息",
      "index": 0,
      "path": "btllc://www.btjf.com/bank_credit/credit_index",
      "iconUrl": "http://192.168.100.83/PUBLIC/STAFF_APP_INDEX_ICON/home_credit_management.png",
      "alterNumberUrl": null,
      "status": 1,
      "type": 3,
      "title": "人行征信1",
      "titleIsShow": false,
      "key": "141",
      "subMenuList": [],
      "certificateLimit": false
    }, {
      "parentId": 140,
      "menuName": "修改密码",
      "index": 1,
      "path": "btllc://www.btjf.com/loanManage/index",
      "iconUrl": "http://192.168.100.83/PUBLIC/STAFF_APP_INDEX_ICON/home_consumer_order.png",
      "alterNumberUrl": null,
      "status": 1,
      "type": 3,
      "title": "消费贷管理",
      "titleIsShow": false,
      "key": "142",
      "subMenuList": [],
      "certificateLimit": false
    }, {
      "parentId": 140,
      "menuName": "退出登录",
      "index": 2,
      "path": "btllc://www.btjf.com/loanManager/fileMange/list",
      "iconUrl": null,
      "alterNumberUrl": null,
      "status": 1,
      "type": 2,
      "title": "归档管理",
      "titleIsShow": true,
      "key": "156",
      "subMenuList": [],
      "certificateLimit": false
    }],
  },
  //退出登录
  loginOut: function (e) {
    wx.removeStorageSync('token');
    wx.reLaunch({
      url: '/pages/login/index',
    })
  },
  clickMennu: function (e) {
    let key = e.currentTarget.dataset.type;
    if (key == 156) {
      var self = this;
      wx.showModal({
        cancelText: '取消',
        cancelColor: '#333333',
        content: '请确认是否退出登录?',
        confirmText: '确定退出',
        confirmColor: '#e83c36',
        success: function (res) {
          if (res.confirm) {
            self.loginOut();
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      wx.showToast({
        title: key,
      })
    }
  }
})
