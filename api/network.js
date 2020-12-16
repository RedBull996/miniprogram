// export const FetchMethod = {
//   get: 'get',
//   post: 'post'
// }

export default network = {
  fetch = (config) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'url',
        method:config.method,
        data:config.params,
        header: {
          'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
          'AccessToken': wx.getStorageSync("AccessToken"),
        },
        complete: (response) => {
          if(response.statusCode == 200) {
            resolve(response.data);
          } else {
            wx.showToast({
              title: '登录异常,即将返回登录页面',
              duration:2000
            });
            reject();
          }
        },
      });
    })
  }
}
