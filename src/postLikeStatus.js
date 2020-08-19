const fetch = require('node-fetch')
const { post_like } = require('../utils/url')

const postLikeStatus = async (id, access_token) => {
  try {
    if (!id) {
      throw `Function required parameters ${'`id`'.red}.\nlet me correct, format parameter is : ${'postLikeStatus(id, access_token)'.yellow.bold}`
    } else if (!access_token) {
      throw `Function required parameters ${'`access_token`'.red}.\nlet me correct, format parameter is : ${'postLikeStatus(id, access_token)'.yellow.bold}`
    } else {
      return fetch(`${post_like(id, access_token)}`)
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          return Promise.resolve(result.error.message)
        } else {
          return Promise.resolve(result.success)
        }
      })
    }
  } catch(err) {
    return Promise.resolve(err)
  }
}

module.exports = postLikeStatus