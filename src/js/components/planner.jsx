var Month = require('./month.jsx');
var plannerStore = require('../stores/plannerStore.js');
var plannerActions = require('../Action.js');

var Planner = React.createClass({

  getInitialState: function () {
    var now = new Date().toString().split(' ');
    plannerActions.newMonth([now[1], now[3], now[2]]);
    return {
      currentMonth: plannerStore.getCurrentMonth(),
    }
  },
  componentDidMount: function () {
    plannerStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    plannerStore.removeChangeListener(this._onChange);
  },
  handleDisplayMonth: function (e) {
    e.target.innerHTML == 'Forward' ? plannerActions.findMonth(true) : plannerActions.findMonth(false);
  },
  handleSelectedDay: function (e) {
    plannerActions.selectedDay(e.target.childNodes[0].innerHTML);
  },
  _onChange: function () {
    this.setState({
      currentMonth: plannerStore.getCurrentMonth()
    })
  },
  render: function() {
    return (
      <div className="container">
        <Month currentMonth={this.state.currentMonth} handleDisplayMonth={this.handleDisplayMonth} selectedDay={this.state.currentMonth.selectedDay} handleSelectedDay={this.handleSelectedDay} />
      </div>
    );
  }

});


React.render(<Planner />, document.getElementById('app'));
