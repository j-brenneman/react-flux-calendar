var handlers = {
  dateToggle: function () {
    this.setState({
      dateToggle: this.state.dateToggle ? this.state.dateToggle = false : this.state.dateToggle = true
    })
  },
  eventsToggle: function () {
    this.setState({
      eventsToggle: this.state.eventsToggle ? this.state.eventsToggle = false : this.state.eventsToggle = true
    })
  },
  toDoToggle: function () {
    this.setState({
      toDoToggle: this.state.toDoToggle ? this.state.toDoToggle = false : this.state.toDoToggle = true
    })
  }
}

var toggleState = {
  dateToggle: true,
  eventsToggle: false,
  toDoToggle: false
}

module.exports = {
  handlers: handlers,
  toggleState: toggleState
}
