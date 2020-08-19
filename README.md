# Facebook Simple API
Wrapped from Facebook's Graph API

![Example](../master/screenshoot/Capture.PNG?raw=true "Example")

## Install

```bash
> npm install facebook-simple-api
```

## Example

```js
// Import method
const {
  getUserInfo,
  getFriendList,
  getFriendRequest,
  getLatestFeed,
  getLastActiveUser,
  postLikeStatus
} = require('facebook-simple-api')

// Initializing a variable
const ACCESS_TOKEN = 'EAAAAZAw4FxQIBAPXXX'
const ID_USER = '4'
const ID_STATUS = '100000502834385_3933036873389702'
const LIMIT_FETCH = '5'

// Method
```

- Get User Information
```js
getUserInfo(ID_USER, ACCESS_TOKEN)
.then(response => {
  console.log(response)
})
```

- Get User Friend List
```js
getFriendList(ACCESS_TOKEN)
.then(response => {
  console.log(response)
})
```

- Get All Friend Request
```js
getFriendRequest(ACCESS_TOKEN)
.then(response => {
  console.log(response)
})
```

- Get Your Latest Feed
```js
getLatestFeed(LIMIT_FETCH, ACCESS_TOKEN)
.then(response => {
  console.log(response)
})
```

- Get Last Activity User
```js
getLastActiveUser(ID_USER, ACCESS_TOKEN)
.then(response => {
  console.log(response)
})
```

- Like Status
```js
postLikeStatus(ID_STATUS, ACCESS_TOKEN)
.then(response => {
  console.log(response)
})
```