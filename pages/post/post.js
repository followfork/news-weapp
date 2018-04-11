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
  },

  onSwiperTap(event) {

  },

  onTapToDetail(event) {
    console.log(event)
  }

})