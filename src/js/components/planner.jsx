var now = require('../stores/plannerStore');
console.log(now);

var Planner = React.createClass({

  getInitialState: function () {
    return {currentMonth: now};
  },

  render: function() {
    return (
      <table>
        <thead></thead>
        <tbody>
          {this.state.currentMonth.map(function(week) {
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
    );
  }
});


React.render(<Planner />, document.getElementById('app'));
