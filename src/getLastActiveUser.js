const fetch = require('node-fetch')
const { last_active } = require('../utils/url')
require('colors')

const getLastActiveUser = async (id, access_token) => {
  try {
    if (!id) {
      throw `Function required parameters ${'`id`'.red}.\nlet me correct, format parameter is : ${'getLastActiveUser(id, access_token)'.yellow.bold}`
    } else if (!access_token) {
      throw `Function required parameters ${'`access_token`'.red}.\nlet me correct, format parameter is : ${'getLastActiveUser(id, access_token)'.yellow.bold}`
    } else {
      return fetch(`${last_active(id, access_token)}`)
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

module.exports = getLastActiveUser