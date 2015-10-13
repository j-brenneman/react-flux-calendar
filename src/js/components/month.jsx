var Day = require('./Day.jsx');

var Month = React.createClass({
  render: function () {
    var that = this;
    return (
      <section>
        <div className="calendarHeader">
          {this.props.user ? <h4 className="userName">{this.props.user.username}</h4> : null}
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
                          <div className="scroll">
                            <b><p>{day}</p></b>
                            <Day day={day} currentMonth={this.props.currentMonth} />
                          </div>
                        </td>
                      : <td onClick={this.props.handlers.selectedDay.bind(this, day)} key={i}>
                          <div className="scroll">
                            <b><p>{day}</p></b>
                            <Day day={day} currentMonth={this.props.currentMonth} />
                          </div>
                        </td>
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
