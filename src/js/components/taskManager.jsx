var SelectedDay = require('./selectedDay.jsx')

var TaskManager = React.createClass({

  getInitialState: function () {
    return {
      dateToggle: true,
      eventsToggle: false,
      toDoToggle: false
    }
  },
  handlers: {
    dateToggle: function () {
      this.setState({
        dateToggle: this.state.dateToggle ? this.state.dateToggle = false : this.state.dateToggle = true
      })
    },
    eventsToggle: function (e) {

    },
    toDoToggle: function (e) {

    }
  },
  render: function () {
    return (
      <section>
        <h1 className="taskHeader">Task Manager</h1>
        <div className="taskContainer">
          <div className="taskSection">
            <div onClick={this.handlers.dateToggle.bind(this)}>
              <span className={"glyphicon glyphicon-triangle-" + (this.state.dateToggle ? "bottom" : "right")}></span>
              <h3>{this.props.currentMonth.name +" "+ this.props.currentMonth.selectedDay +", "+ this.props.currentMonth.year}</h3>
            </div>
            {this.state.dateToggle ? <SelectedDay /> : null}
          </div>
          <div className="taskSection">
            <span className="glyphicon glyphicon-triangle-right"></span>
            <h3>Events</h3>
          </div>
          <div className="taskSection">
            <span className="glyphicon glyphicon-triangle-right"></span>
            <h3>ToDo's</h3>
          </div>
        </div>
      </section>
    )
  }
})

module.exports = TaskManager;
