var SelectedDay = require('./selectedDay.jsx');
var Events = require('./events.jsx');
var ToDo = require('./toDo.jsx');
var taskHelpers = require('../assets/taskHelpers.js');

var TaskManager = React.createClass({

  getInitialState: function () {
    return taskHelpers.toggleState
  },
  toggleHandlers: taskHelpers.handlers,

  render: function () {
    return (
      <section className="taskManager">
        <h1 className="taskHeader">Task Manager</h1>
        <div className="taskContainer">
          <div className="taskSection">
            <div onClick={this.toggleHandlers.dateToggle.bind(this)}>
              <span className={"taskIcon glyphicon glyphicon-triangle-" + (this.state.dateToggle ? "bottom" : "right")}></span>
              <h3>{this.props.currentMonth.name +" "+ this.props.currentMonth.selectedDay +", "+ this.props.currentMonth.year}</h3>
            </div>
            {this.state.dateToggle ? <SelectedDay currentMonth={this.props.currentMonth} addEvents={this.props.handlers.addEvents} addToDo={this.props.handlers.addToDo} /> : null}
          </div>
          <div className="taskSection">
            <div onClick={this.toggleHandlers.eventsToggle.bind(this)}>
              <span className={"taskIcon glyphicon glyphicon-triangle-" + (this.state.eventsToggle ? "bottom" : "right")}></span>
              <h3>Events</h3>
            </div>
            {this.state.eventsToggle ? <Events currentMonth={this.props.currentMonth} deleteEvents={this.props.handlers.deleteEvents} /> : null}
          </div>
          <div className="taskSection">
            <div onClick={this.toggleHandlers.toDoToggle.bind(this)}>
              <span className={"taskIcon glyphicon glyphicon-triangle-" + (this.state.toDoToggle ? "bottom" : "right")}></span>
              <h3>ToDo's</h3>
            </div>
            {this.state.toDoToggle ? <ToDo currentMonth={this.props.currentMonth} toDoStatus={this.props.handlers.toDoStatus} deleteToDo={this.props.handlers.deleteToDo} /> : null}
          </div>
        </div>
      </section>
    )
  }
})

module.exports = TaskManager;
