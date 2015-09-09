var Month = React.createClass({
  render: function () {
    return (
      <div>
        <div className="calendarHeader">
          <button>Back</button>
          <h1 className="monthName">{this.props.currentMonth.name}</h1>
          <button>Forward</button>
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
                    return <td key={i}>{day}</td>;
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
