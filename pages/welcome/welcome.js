// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  onTapJump(event){
    wx.switchTab({
      url: '../post/post',
      success(){
        console.log('success')
      }
    })
  }

})