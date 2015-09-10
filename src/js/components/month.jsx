var Month = React.createClass({
  render: function () {
    var that = this;
    return (
      <div>
        <div className="calendarHeader">
          <button onClick={this.props.handleDisplayMonth}>Back</button>
          <h1 className="monthName">{this.props.currentMonth.name}</h1>
          <span>{this.props.currentMonth.year}</span>
          <button onClick={this.props.handleDisplayMonth}>Forward</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>
            </tr>
          </thead>
          <tbody className="days">
            {this.props.currentMonth.monthMatrix.map(function(week) {
              return (
                <tr key={week}>
                  {week.map(function(day, i) {
                    return day == parseInt(that.props.today) ? <td className="today" key={i}>{day}</td> : <td key={i}>{day}</td>
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
})

module.exports = Month;
