var Month = require('./month.jsx');
var plannerStore = require('../stores/plannerStore.js');
var plannerActions = require('../Action.js');

var Planner = React.createClass({

  getInitialState: function () {
    var now = new Date().toString().split(' ');
    plannerActions.newMonth([now[1], now[3]]);
    return {
      currentMonth: plannerStore.getCurrentMonth(),
      today: now[2]
    }
  },
  componentDidMount: function () {
    plannerStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    plannerStore.removeChangeListener(this._onChange);
  },
  handleDisplayMonth: function (e) {
    this.setState({today: null})
    e.target.innerHTML == 'Forward' ? plannerActions.findMonth(true) : plannerActions.findMonth(false)
  },
  _onChange: function () {
    this.setState({
      currentMonth: plannerStore.getCurrentMonth()
    })
  },
  render: function() {
    return (
      <Month currentMonth={this.state.currentMonth} handleDisplayMonth={this.handleDisplayMonth} today={this.state.today} />
    );
  }
});


React.render(<Planner />, document.getElementById('app'));
