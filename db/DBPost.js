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
      res = require('../data/data.js')
      this.initPostList(res)
    }
    return res
  }

}

export { DBPost }
