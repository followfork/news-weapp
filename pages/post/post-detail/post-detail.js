import { DBPost } from '../../../db/DBPost.js';
var app = getApp();
console.log(app)

Page({
  data: {
    isPlayingMusic: false,
    post:[]
  },

  onLoad(options) {
    this.postId = options.id;
    this.dbPost = new DBPost(this.postId);
    this.postData = this.dbPost.getPostItemById().data;

    this.setData({
      post: this.postData
    })
    console.log(this.postData)
  }
})