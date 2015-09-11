var AppDispatcher = require('../Dispatcher.js');
var appConstants = require('../Constants.js');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var calendar = require('node-calendar');
var monthConversion = require('../assets/calendarConversions');

var CHANGE_EVENT = 'change';

var years = {};
var current = {};

function Month(date) {
  this.name = monthConversion[date[0]][1];
  this.monthKey = monthConversion[date[0]][0];
  this.year = parseInt(date[1]);
  this.monthMatrix = date;
  this.appts = {
    confirmed: [],
    undecided: []
  };
}

Month.prototype.newMonth = function () {
  this.monthMatrix = new calendar.Calendar(1).monthdayscalendar(this.monthMatrix[1], monthConversion[this.monthMatrix[0]][0]);
};

var newMonth = function (date) {
  current = new Month(date); 
  current.newMonth();
  years[current.year] ? years[current.year].push(current) : years[current.year] = [current];
}

var findMonth = function (direction) {
  if(direction)
    current.monthKey +1 < 13 ? newCurrent = [current.monthKey +1, current.year] : newCurrent = [1, current.year +1];
  else
    current.monthKey -1 > 0 ? newCurrent = [current.monthKey -1, current.year] : newCurrent = [12, current.year -1];
  if(years[newCurrent[1]]){
    var checker = years[newCurrent[1]].filter(function (mon) {
      if(mon.monthKey === newCurrent[0])
        return mon;
    })
    checker.length > 0 ? current = checker[0] : newMonth([monthConversion[newCurrent[0]], newCurrent[1]]);
  } else {
    newMonth([monthConversion[newCurrent[0]], newCurrent[1]]);
  }
}

var plannerStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function (cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getCurrentMonth: function () {
    console.log(years);
    return current;
  }
});

AppDispatcher.register(function (payload) {
  var action = payload.action;
  switch(action.actionType){
    case appConstants.NEW_MONTH:
      newMonth(action.data);
      plannerStore.emit(CHANGE_EVENT);
      break;
    case appConstants.FIND_MONTH:
      findMonth(action.data);
      plannerStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = plannerStore;
