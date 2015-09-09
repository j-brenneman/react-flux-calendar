var calendar = require('node-calendar');
var monthConversion = require('../assets/calendarConversions');

var years = {2015: [new Month(["Wed", "Oct", "10", "2015", "16:09:22", "GMT-0600", "(MDT)"])]};
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

var newDisplayMonth = function () {
  current = new Month(new Date().toString().split(' '));
  current.newMonth();
  years[current.year] ? years[current.year].push(current) : years[current.year] = [current];
  return current;
}

var findMonth = function () {
  current.monthKey +1 < 13 ? newCurrent = [current.monthKey +1, current.year] : newCurrent = [1, current.year +1];
  if(years[newCurrent[1]]){
    return years[newCurrent[1]].filter(function (mon) {
      console.log(mon.monthKey, newCurrent[0]);
      if(mon.monthKey == newCurrent[0]){
        console.log(mon);
        return mon;
      }
    })
  } 
}

newDisplayMonth();

module.exports = findMonth;
