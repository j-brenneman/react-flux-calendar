var serverCalls = {
  signUp: function (input) {
    // console.log(input);
    return $.post('/new_account', {input: JSON.stringify(input)})
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
