var calendar = require('node-calendar');
var monthConversion = require('../assets/calendarConversions');

var years = {};
var current = {};

function Month(date) {
  this.name = monthConversion[date[1]][1];
  this.monthKey = monthConversion[date[1]][0];
  this.year = parseInt(date[3]);
  this.monthMatrix = date;
  this.appts = {
    confirmed: [],
    undecided: []
  };
}

Month.prototype.newMonth = function () {
  this.monthMatrix = new calendar.Calendar(1).monthdayscalendar(this.monthMatrix[3], monthConversion[this.monthMatrix[1]][0]);
};

var newDisplayMonth = function (date) {
  current = new Month(date); //new Date().toString().split(' ')
  current.newMonth();
  years[current.year] ? years[current.year].push(current) : years[current.year] = [current];
  return current;
}

var findMonth = function () {
  current.monthKey +1 < 13 ? newCurrent = [current.monthKey +1, current.year] : newCurrent = [1, current.year +1];
  if(years[newCurrent[1]]){
    return years[newCurrent[1]].filter(function (mon) {
      if(mon.monthKey == newCurrent[0])
        return current = mon;
    })
  }
}

newDisplayMonth();
findMonth();

module.exports = newDisplayMonth;
