var serverCalls = {
  signUp: function () {
    $.post('/new_account').then(function (data) {
      console.log(data.good);
    })
  },
  login: function (input) {
    $.post('/login').then(function (data) {

    })
  },
  logout: function (input) {
    $.post('/login').then(function (data) {

    })
  }
}

module.exports = serverCalls;
