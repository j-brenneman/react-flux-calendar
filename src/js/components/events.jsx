var Events = React.createClass({
  getEvents: function () {
    var dayEvents = this.props.currentMonth.items.events[this.props.currentMonth.selectedDay];
    return dayEvents || null;
  },
  render: function () {
    return (
      <div className="dayEvents animated zoomIn">
        { this.getEvents() != null
          ? this.getEvents().map(function (day, i) {
            return (
              <div className="dayEventContainer" key={day.time.start + day.title}>
                <form>
                  <span className="eventMarker fa fa-calendar-check-o"></span>
                  <input type="text" placeholder="Title" name="title" defaultValue={day.title}></input>
                  <input type="time" placeholder="Start" name="start" defaultValue={day.time.start}></input>
                  <input type="time" placeholder="End" name="end" defaultValue={day.time.end}></input>
                  <textarea defaultValue="Description" name="description" defaultValue={day.description}></textarea>
                  <span className="deleteEvent glyphicon glyphicon-minus-sign" onClick={this.props.deleteEvents.bind(this, {day: day.day, evtIndex: i})}></span>
                </form>
              </div>
            )
          }, this)
          :
          <p>No Events Today</p>
        }
      </div>
    )
  }
})

module.exports = Events;
