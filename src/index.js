const getUserInfo = require('./getUserInfo')
const getFriendList = require('./getFriendList')
const getFriendRequest = require('./getFriendRequest')
const getLatestFeed = require('./getLatestFeed')
const getLastActiveUser = require('./getLastActiveUser')
const postLikeStatus = require('./postLikeStatus')

module.exports = {
  getUserInfo,
  getFriendList,
  getFriendRequest,
  getLatestFeed,
  getLastActiveUser,
  postLikeStatus
}