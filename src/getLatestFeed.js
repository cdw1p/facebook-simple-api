const fetch = require('node-fetch')
const { latest_feed } = require('../utils/url')

const getLatestFeed = async (limit, access_token) => {
  try {
    if (!limit) {
      throw `Function required parameters ${'`limit`'.red}.\nlet me correct, format parameter is : ${'getLatestFeed(id, access_token)'.yellow.bold}`
    } else if (!access_token) {
      throw `Function required parameters ${'`access_token`'.red}.\nlet me correct, format parameter is : ${'getLatestFeed(id, access_token)'.yellow.bold}`
    } else {
      return fetch(`${latest_feed(limit, access_token)}`)
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

module.exports = getLatestFeed