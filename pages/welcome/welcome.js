// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  onTapJump(event){
    wx.navigateTo({
      url: '../posts/posts',
      success(){
        console.log('success')
      }
    })
  }

})