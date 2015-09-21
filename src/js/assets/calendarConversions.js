var monthConversion = {
  Jan : [1, 'January'],
  Feb : [2, 'February'],
  Mar : [3, 'March'],
  Apr : [4, 'April'],
  May : [5, 'March'],
  Jun : [6, 'June'],
  Jul : [7, 'July'],
  Aug : [8, 'August'],
  Sep : [9, 'September'],
  Oct : [10, 'October'],
  Nov : [11, 'November'],
  Dec : [12, 'December'],
  1 : 'Jan',
  2 : 'Feb',
  3 : 'Mar',
  4 : 'Apr',
  5 : 'May',
  6 : 'Jun',
  7 : 'Jul',
  8 : 'Aug',
  9 : 'Sep',
  10 : 'Oct',
  11 : 'Nov',
  12 : 'Dec'
}

var monthAnimation = function () {
  var mon = document.getElementsByClassName('monthGrid')[0].classList;
  mon.add('animated', 'zoomIn');
  setTimeout(function(){ mon.remove('animated', 'zoomIn') }, 1000);
}

module.exports = {
  monthConversion: monthConversion,
  monthAnimation: monthAnimation
}
