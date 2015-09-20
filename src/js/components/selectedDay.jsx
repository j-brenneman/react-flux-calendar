var SelectedDay = React.createClass ({
  handleSubmit: function () {
    var form = document.getElementsByName('newEvent');
    this.props.addEvents({
      day: this.props.currentMonth.selectedDay, time: {start: form[1].value, end: form[2].value}, title: form[0].value, description: form[3].value
    });
  },
  render: function () {
    return (
      <div className="animated zoomIn selectedDayHeader">
        <h4>Add Event</h4>
        <form>
          <input type="text" placeholder="Title" name="newEvent"></input>
          <input type="time" placeholder="Start" name="newEvent"></input>
          <input type="time" placeholder="End" name="newEvent"></input>
          <textarea defaultValue="Description" name="newEvent"></textarea>
          <span className="glyphicon glyphicon-plus-sign" onClick={this.handleSubmit}></span>
        </form>
      </div>
    )
  }

})

module.exports = SelectedDay
