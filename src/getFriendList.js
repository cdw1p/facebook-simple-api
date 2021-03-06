const fetch = require('node-fetch')
const { friendlist } = require('../utils/url')
require('colors')

const getFriendList = async (access_token) => {
  try {
    if (!access_token) {
      throw `Function required parameters ${'`access_token`'.red}.\nlet me correct, format parameter is : ${'getFriendList(access_token)'.yellow.bold}`
    } else {
      return fetch(`${friendlist(access_token)}`)
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          return Promise.resolve(result.error.message)
        } else {
          return Promise.resolve(result.data)
        }
      })
    }
  } catch(err) {
    return Promise.resolve(err)
  }
}

module.exports = getFriendList