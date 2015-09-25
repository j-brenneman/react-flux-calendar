var ToDo = React.createClass({
  getToDos: function () {
    var dayToDos = this.props.currentMonth.items.todos[this.props.currentMonth.selectedDay];
    return dayToDos || null;
  },
  render: function () {
    return (
      <div className="dayToDos animated zoomIn">
        { this.getToDos() != null
          ? this.getToDos().map(function (toDo, i) {
            return (
              <div className="dayToDoContainer" key={toDo.title + toDo.priority}>
                <span className="toDoMarker fa fa-thumb-tack"></span>
                <input type="text" placeholder="Title" name="newToDo" defaultValue={toDo.title}></input>
                <div className="toDoPriority">
                  <span className="prioritySpan">Priority</span>
                  <input type="range" min="1" max="5" list="interest" defaultValue={toDo.priority} name="newToDo"></input>
                    <datalist id="interest">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </datalist>
                </div>
                <textarea defaultValue="Description" name="newToDo" defaultValue={toDo.description}></textarea>
                <span className="deleteToDo glyphicon glyphicon-minus-sign" onClick={this.handleToDoSubmit}></span>
              </div>
            )
          }, this)
          :
          <p>No ToDo's Today</p>
        }
      </div>
    )
  }
})

module.exports = ToDo;
