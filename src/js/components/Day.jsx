var Day = React.createClass({
  render: function () {
    return (
      <div>
        {
         this.props.currentMonth.items.events[parseInt(this.props.day)]
         ? this.props.currentMonth.items.events[parseInt(this.props.day)].map(function (evt) {
            return <p>{evt.title}</p>
           })
         : null
        }
      </div>
    )
  }
})

module.exports = Day;
