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

  addReadingTimes() {
    this.updatePostData('reading');
  }

  //收藏
  collect() {
    return this.updatePostData('collect');
  }

  //点赞
  up() {
    var data = this.updatePostData('up');
    return data;
  }

  /*发表评论*/
  newComment(newComment) {
    this.updatePostData('comment', newComment);
  }

  updatePostData(category, newComment) {
    var itemData = this.getPostItemById(),
        postData = itemData.data,
        allPostData = this.getAllPostData();
    
    switch (category) {
      case 'collect':
        //处理收藏
        if (!postData.collectionStatus) {
          //如果当前状态是未收藏
          postData.collectionNum++;
          postData.collectionStatus = true;
        } else {
          // 如果当前状态是收藏
          postData.collectionNum--;
          postData.collectionStatus = false;
        }
        break;
      case 'up':
        if (!postData.upStatus) {
          postData.upNum++;
          postData.upStatus = true;
        } else {
          postData.upNum--;
          postData.upStatus = false;
        }
        break;
      case 'comment':
        postData.comments.push(newComment);
        postData.commentNum++;
        break;
      case 'reading':
        postData.readingNum++;
        break;
      default:
        break;
    }
    allPostData[itemData.index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
  }

  /*初始化缓存数据*/
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
  }

}

export { DBPost }
