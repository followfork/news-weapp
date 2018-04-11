import { DBPost } from '../../db/DBPost.js'

Page({
  data: {
    postList: []
  },

  onLoad() {
    var dbPost = new DBPost()

    this.setData({
      postList: dbPost.getAllPostData()
    });
    console.log(this.data.postList)
  },
  
  // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
  onSwiperTap(event) {
    console.log(event)
    var postId = event.target.dataset.postId;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  },

  onTapToDetail(event) {
    console.log(event)
    var postId = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  }

})