var  util = require('../utils/util.js')

class DBPost {
  constructor(postId) {
    this.storageKeyName = 'postList'
    this.postId = postId
  }

  /*得到全部文章信息*/
  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName)
    if(!res) {
      res = require('../data/data.js').postList
      // this.initPostList(res)
    }
    return res
  }

  initPostList() {

  }

  getPostItemById(){
    var postsData = this.getAllPostData();
    var len = postsData.length;
    for (var i = 0; i < len; i++) {
      if (postsData[i].postId == this.postId) {
        return {
          index: i,
          data: postsData[i]
        }
      }
    }
  }

}

export { DBPost }
