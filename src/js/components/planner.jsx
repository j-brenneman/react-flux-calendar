var now = require('../stores/plannerStore');
var Month = require('./month.jsx');
console.log(now());

var Planner = React.createClass({

  getInitialState: function () {
    return {currentMonth: now()};
  },

  handleClick: function () {
    this.setState(now());
  },

  render: function() {
    return (
      <Month currentMonth={this.state.currentMonth} />
    );
  }
});


React.render(<Planner />, document.getElementById('app'));
