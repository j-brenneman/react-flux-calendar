var Planner = require('./planner.jsx');

var App = React.createClass({

  getInitialState: function () {
    return {
      signUpToggle: false
    }
  },
  accountHandlers: {
    signUpPop: function () {
      console.log(this);
      this.setState({
        signUpToggle: this.state.signUpToggle ? this.state.signUpToggle = false : this.state.signUpToggle = true
      })
    }
  },
  render: function () {
    return (
      <div className={this.state.signUpToggle ? "accountOverlay" : null}>
        {this.state.signUpToggle ? <SignUp /> : null}
        <Planner accountHandlers={this.accountHandlers} />
      </div>
    )
  }

})


React.render(<App/>, document.getElementById('app'));
