var Month = React.createClass({
  render: function () {
    var that = this;
    return (
      <div className="text-center row">
        <div className="calendarHeader">
          <button className="btn btn-primary" onClick={this.props.handleDisplayMonth}>Back</button>
          <div className="monthName">
            <h1>{this.props.currentMonth.name}</h1>
            <h4>{this.props.currentMonth.year}</h4>
          </div>
          <button className="btn btn-primary" onClick={this.props.handleDisplayMonth}>Forward</button>
        </div>
        <table className="monthGrid table-bordered">
          <thead>
            <tr>
              <th>Monday</th> <th>Tuesday</th> <th>Wednesday</th> <th>Thursday</th> <th>Friday</th> <th>Saturday</th> <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {this.props.currentMonth.monthMatrix.map(function(week) {
              return (
                <tr key={week}>
                  {week.map(function(day, i) {
                    return day == parseInt(that.props.selectedDay) ? <td className="selectedDay" key={i}><span>{day}</span></td> : <td key={i}><span>{day}</span></td>
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
