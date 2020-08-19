const user_info = (id, access_token) => {
  return `https://graph.facebook.com/${id}/?access_token=${access_token}`
}

const friendlist = (access_token) => {
  return `https://graph.facebook.com/me/friends?access_token=${access_token}`
}

const friendrequests = (access_token) => {
  return `https://graph.facebook.com/me/friendrequests?limit=5000&access_token=${access_token}`
}

const latest_feed = (limit, access_token) => {
  return `https://graph.facebook.com/me/home?fields=id,from,type,message&limit=${limit}&access_token=${access_token}`
}

const last_active = (id, access_token) => {
  return `https://graph.facebook.com/${id}/feed?access_token=${access_token}&limit=1`
}

const post_like = (id, access_token) => {
  return `https://graph.facebook.com/v6.0/${id}/likes?method=POST&access_token=${access_token}`
}

module.exports = {
  user_info,
  friendlist,
  friendrequests,
  latest_feed,
  last_active,
  post_like
}