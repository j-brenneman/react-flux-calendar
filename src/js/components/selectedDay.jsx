var SelectedDay = React.createClass ({
  handleEventSubmit: function () {
    var form = document.getElementsByName('newEvent');
    this.props.addEvents({
      day: this.props.currentMonth.selectedDay, time: {start: form[1].value, end: form[2].value}, title: form[0].value, description: form[3].value
    });
    for (var i = 0; i < form.length; i++) {
      form[i].value = null;
    }
    form[form.length -1].value = 'Description';
  },
  handleToDoSubmit: function () {
    var form = document.getElementsByName('newToDo');
    this.props.addToDo({
      day: this.props.currentMonth.selectedDay, title: form[0].value, priority: form[1].value, description: form[2].value
    });
    console.log(form[0].value, form[1].value, form[2].value);
    form[0].value = null;
    form[1].value = 3;
    form[2].value = 'Description';
  },
  render: function () {
    return (
      <div className="animated zoomIn selectedDayContainer">
        {/* New Event */}
        <div className="categoryOne">
          <h4>Add Event</h4>
          <input type="text" placeholder="Title" name="newEvent"></input>
          <div className="time">
            <span className="fa fa-hourglass-start"> </span>
            <input type="time" placeholder="Start" name="newEvent"></input>
          </div>
          <div className="time">
            <span className="fa fa-hourglass-end"> </span>
            <input type="time" placeholder="End" name="newEvent"></input>
          </div>
          <textarea defaultValue="Description" name="newEvent"></textarea>
          <span className="btnSpan glyphicon glyphicon-plus-sign" onClick={this.handleEventSubmit}></span>
        </div>
        {/* New ToDo */}
        <div>
          <h4 className="toDoHeader">Add ToDo</h4>
          <input type="text" placeholder="Title" name="newToDo"></input>
          <div className="toDoPriority">
            <span className="prioritySpan">Priority</span>
            <input type="range" min="1" max="5" list="interest" defaultValue={3} name="newToDo"></input>
              <datalist id="interest">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </datalist>
          </div>
          <textarea defaultValue="Description" name="newToDo"></textarea>
          <span className="btnSpan glyphicon glyphicon-plus-sign" onClick={this.handleToDoSubmit}></span>
        </div>
      </div>
    )
  }
})

module.exports = SelectedDay
