var Day = React.createClass({
  render: function () {
    return (
      <div className="monthDay">
        {
         this.props.currentMonth.items.events[parseInt(this.props.day)]
         ? this.props.currentMonth.items.events[parseInt(this.props.day)].map(function (evt, i) {
            return <p className="calendarEvent" key={i}>{evt.title}</p>
           })
         : null
        }
        {
         this.props.currentMonth.items.todos[parseInt(this.props.day)]
         ? this.props.currentMonth.items.todos[parseInt(this.props.day)].map(function (toDo, i) {
            return <p className={toDo.completed ? "calendarToDoC" : "calendarToDoNC"} key={i}>{toDo.title}</p> 
           })
         : null
        }
      </div>
    )
  }
})

module.exports = Day;
