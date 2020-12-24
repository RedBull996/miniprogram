Page({
  data: {
    greetings: '下午好,\n欢迎使用小艾帮分期',
    disabled: true
  },
  handleLogin: function (e) {
    wx.setStorageSync('token', '123213')
    wx.showLoading({
      title: '登录中...',
    });
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {
          wx.reLaunch({
            url: '/pages/index/index',
          })
        },
      })
    }, 1000);
  },
  bindUserNameInput: function (e) {
    var value = e.detail.value;
    this.setData({
      userName: value,
      disabled: !(this.data.pwd && this.data.pwd.length > 0 && value && value.length > 0)
    });
  },
  bindPwdInput: function (e) {
    var value = e.detail.value;
    this.setData({
      pwd: value,
      disabled: !(this.data.userName && this.data.userName.length > 0 && value && value.length > 0)
    });
  },

})