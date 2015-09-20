var Month = React.createClass({
  render: function () {
    var that = this;
    return (
      <section>
        <div className="calendarHeader">
          <button className="btn btn-primary" onClick={this.props.handlers.displayMonth}>Back</button>
          <div className="monthName">
            <h1>{this.props.currentMonth.name}</h1>
            <h4>{this.props.currentMonth.year}</h4>
          </div>
          <button className="btn btn-primary" onClick={this.props.handlers.displayMonth}>Forward</button>
        </div>
        <table className="monthGrid table-bordered">
          <thead>
            <tr>
              <th>Sunday</th> <th>Monday</th> <th>Tuesday</th> <th>Wednesday</th> <th>Thursday</th> <th>Friday</th> <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {this.props.currentMonth.monthMatrix.map(function(week) {
              return (
                <tr key={week}>
                  {week.map(function(day, i) {
                    return day == parseInt(this.props.currentMonth.selectedDay)
                      ? <td className="selectedDay" key={i}>
                          {
                           this.props.currentMonth.items.events[parseInt(day)]
                           ? this.props.currentMonth.items.events[parseInt(day)].map(function (evt) {
                              return <ul>
                                <li>{evt.title}</li>
                                <li>{evt.time.start +" - "+ evt.time.end}</li>
                              </ul>
                             })
                           : null
                          }
                          <span>{day}</span>
                        </td>
                      : <td key={i} onClick={this.props.handlers.selectedDay}><span>{day}</span></td>
                  },this)}
                </tr>
              );
            },this)}
          </tbody>
        </table>
      </section>
    );
  }
})

module.exports = Month;
