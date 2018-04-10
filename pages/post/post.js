import { DBPost } from '../../db/DBPost.js'

Page({
  data: {
   postList:[]
  },

  onLoad() {
    var dbPost = new DBPost();
    this.setData({
      postList: dbPost.getAllPostData()
    });
    console.log(this.data.postList)
  },

  onSwiperTap(event) {

  },

  onTapToDetail(event) {
    
  }

})