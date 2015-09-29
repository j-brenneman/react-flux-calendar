var Month = require('./month.jsx');
var SelectedDay = require('./selectedDay.jsx');
var TaskManager = require('./taskManager.jsx');
var plannerStore = require('../stores/plannerStore.js');
var plannerActions = require('../Action.js');
var monthAnimation = require('../assets/calendarConversions').monthAnimation;
var serverCalls = require('../assets/serverCalls');

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
  monthHandlers: {
    selectedDay:  function (day) {
      plannerActions.selectedDay(day);
    },
    displayMonth: function (e) {
      monthAnimation(e.target.innerHTML == 'Forward' ? true : false);
      e.target.innerHTML == 'Forward' ? plannerActions.findMonth(true) : plannerActions.findMonth(false);
    }
  },
  taskHandlers: {
    addEvents: function (e) {
      plannerActions.addEvents(e);
    },
    deleteEvents: function (e) {
      plannerActions.deleteEvents(e);
    },
    addToDo: function (e) {
      plannerActions.addToDo(e);
    },
    deleteToDo: function (e) {
      plannerActions.deleteToDo(e)
    },
    toDoStatus: function (e) {
      plannerActions.toDoStatus(e);
    }
  },
  _onChange: function () {
    this.setState({
      currentMonth: plannerStore.getCurrentMonth()
    })
  },
  render: function() {
    return (
      <div className="animated zoomIn container-fluid">
        <div className="row text-center">
          <div onClick={serverCalls.signUp}>Sign Up</div>
          <div className="col-md-8">
            <Month currentMonth={this.state.currentMonth} handlers={this.monthHandlers} />
          </div>
          <div className="col-md-4">
            <TaskManager currentMonth={this.state.currentMonth} handlers={this.taskHandlers} />
          </div>
        </div>
      </div>
    );
  }

});


React.render(<Planner />, document.getElementById('app'));
