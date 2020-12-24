//index.js

//获取应用实例
const app = getApp()

Page({
  data: {
    dataSource: [{
      "parentId": 35,
      "menuName": "直客业务",
      "index": 13,
      "path": null,
      "iconUrl": null,
      "alterNumberUrl": null,
      "status": 1,
      "type": 3,
      "title": "直客业务",
      "titleIsShow": true,
      "key": "140",
      "subMenuList": [{
        "parentId": 140,
        "menuName": "人行征信",
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
        "menuName": "分期管理",
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
        "menuName": "归档管理",
        "index": 2,
        "path": "/pages/orders/delete/index",
        "iconUrl": null,
        "alterNumberUrl": null,
        "status": 1,
        "type": 2,
        "title": "归档管理",
        "titleIsShow": true,
        "key": "156",
        "subMenuList": [],
        "certificateLimit": false
      }, {
        "parentId": 140,
        "menuName": "订单管理",
        "index": 3,
        "path": "btllc://www.btjf.com/zyorders/index",
        "iconUrl": null,
        "alterNumberUrl": null,
        "status": 1,
        "type": 2,
        "title": null,
        "titleIsShow": true,
        "key": "155",
        "subMenuList": [],
        "certificateLimit": false
      }, {
        "parentId": 140,
        "menuName": "ceshi ",
        "index": 3,
        "path": "btllc://www.btjf.com/zyorders/index",
        "iconUrl": null,
        "alterNumberUrl": null,
        "status": 1,
        "type": 2,
        "title": null,
        "titleIsShow": true,
        "key": "155",
        "subMenuList": [],
        "certificateLimit": false
      }],
      "certificateLimit": false
    }, {
      "parentId": 35,
      "menuName": "经销商业务",
      "index": 14,
      "path": null,
      "iconUrl": null,
      "alterNumberUrl": null,
      "status": 1,
      "type": 3,
      "title": "经销商业务",
      "titleIsShow": true,
      "key": "152",
      "subMenuList": [{
        "parentId": 152,
        "menuName": "线索管理",
        "index": 0,
        "path": "btllc://www.btjf.com/dealer-business/cluesManage/list",
        "iconUrl": null,
        "alterNumberUrl": null,
        "status": 1,
        "type": 2,
        "title": "线索管理",
        "titleIsShow": true,
        "key": "153",
        "subMenuList": [],
        "certificateLimit": false
      }, {
        "parentId": 152,
        "menuName": "订单管理",
        "index": 1,
        "path": "/pages/orders/index",
        "iconUrl": null,
        "alterNumberUrl": null,
        "status": 1,
        "type": 2,
        "title": "订单管理",
        "titleIsShow": true,
        "key": "154",
        "subMenuList": [],
        "certificateLimit": false
      }],
      "certificateLimit": false
    }],
  },
  clickMennu: function (e) {
    console.log(e)
    wx.navigateTo({
      url: e.currentTarget.dataset.item.path,
    })
  }
})
