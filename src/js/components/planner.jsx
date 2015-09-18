var Month = require('./month.jsx');
var TaskManager = require('./taskManager.jsx');
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
  handlers: {
    selectedDay:  function (e) {
      plannerActions.selectedDay(e.target.childNodes[0].innerHTML);
    },
    displayMonth: function (e) {
      e.target.innerHTML == 'Forward' ? plannerActions.findMonth(true) : plannerActions.findMonth(false);
    }
  },
  _onChange: function () {
    this.setState({
      currentMonth: plannerStore.getCurrentMonth()
    })
  },
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-8">
            <Month currentMonth={this.state.currentMonth} handlers={this.handlers} />
          </div>
          <div className="col-md-4">
            <TaskManager currentMonth={this.state.currentMonth} />
          </div>
        </div>
      </div>
    );
  }

});


React.render(<Planner />, document.getElementById('app'));
