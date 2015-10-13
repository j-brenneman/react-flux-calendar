var SignUp = React.createClass({

  handleSignUpSubmit: function () {
    var form = document.getElementsByName('signUp');
    var calendar = _.omit(this.props.currentMonth, 'newMonth');
    this.props.submitSignUp({username: form[0].value, password: form[1].value, passwordCheck: form[2].value, calendar: calendar});
    for (var i = 0; i < form.length; i++) {
      form[i].value = null;
    }
  },
  render: function () {
    return (
      <div>
        <div className="accountOverlay"></div>
        <div className="signUp">
          {this.props.errors ? this.props.errors.map(function (error) {
            return <p>{error}</p>
          }) : null}
          <h2>Sign Up</h2>
          <h4 onClick={this.props.close}>X</h4>
          <input type="text" name="signUp" placeholder="Username"></input>
          <input type="password" name="signUp" placeholder="Password"></input>
          <input type="password" name="signUp" placeholder="Re-Enter Password"></input>
          <button className="btn btn-success" onClick={this.handleSignUpSubmit}>Sign Up</button>
        </div>
      </div>
    )
  }

})

module.exports = SignUp;
