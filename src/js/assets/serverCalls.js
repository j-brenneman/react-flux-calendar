var serverCalls = {
  signUp: function () {
    $.post('/new_account', {username: 'Jake', password: 'hello123', passwordCheck: 'hello123', calendar: {}}).then(function (data) {
      console.log('client', data.user);
    })
  },
  login: function (input) {
    $.post('/login').then(function (data) {

    })
  },
  logout: function (input) {
    $.post('/logout').then(function (data) {

    })
  }
}

module.exports = serverCalls;
