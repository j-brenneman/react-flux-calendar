var Day = React.createClass({
  render: function () {
    return (
      <div className="monthDay">
        {
         this.props.currentMonth.items.events[parseInt(this.props.day)]
         ? this.props.currentMonth.items.events[parseInt(this.props.day)].map(function (evt, i) {
            return <p key={i}>{evt.title}</p>
           })
         : null
        }
      </div>
    )
  }
})

module.exports = Day;
