var Nav = React.createClass({
  render: function () {
    return (
      <div className="dropdown navDrop">
        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button" id="dropdownMenu1">
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Logout</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    )
  }
})

module.exports = Nav;
