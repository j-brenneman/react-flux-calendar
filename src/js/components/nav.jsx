var Nav = React.createClass({
  render: function () {
    return (
      <div className="dropdown navDrop">
        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button" id="dropdownMenu1">
          <span className="fa fa-navicon"></span>
        </button>
        <ul className="dropdown-menu">
          <li><a onClick={this.props.handlers}>Sign Up</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Logout</a></li>
          <li className="lastNavButton"><a href="#">Help</a></li>
        </ul>
      </div>
    )
  }
})

module.exports = Nav;
