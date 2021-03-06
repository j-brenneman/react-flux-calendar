var AppDispatcher = require('../Dispatcher.js');
var appConstants = require('../Constants.js');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var calendar = require('node-calendar');
var assets = require('../assets/calendarConversions');

var CHANGE_EVENT = 'change';

var years = {};
var current = {};
var user = {};

function Month(date) {
  this.name = assets.monthConversion[date[0]][1];
  this.monthKey = assets.monthConversion[date[0]][0];
  this.year = parseInt(date[1]);
  this.monthMatrix = date;
  this.selectedDay = date[2] || 1;
  this.items = {
    events: {},
    todos: {}
  };
}

Month.prototype.newMonth = function () {
  this.monthMatrix = new calendar.Calendar(calendar.SUNDAY).monthdayscalendar(this.monthMatrix[1], assets.monthConversion[this.monthMatrix[0]][0]);
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
    checker.length > 0 ? current = checker[0] : newMonth([assets.monthConversion[newCurrent[0]], newCurrent[1]]);
  } else {
    newMonth([assets.monthConversion[newCurrent[0]], newCurrent[1]]);
  }
}

var selectedDay = function (dayNum) {
  current.selectedDay = dayNum;
}

var addEvents = function (evt) {
  current.items.events[evt.day] ? current.items.events[evt.day].push(evt) : current.items.events[evt.day] = [evt];
  current.items.events[evt.day].sort(assets.sortedEvents);
}

var deleteEvents = function (day, evtIndex) {
  current.items.events[day].splice(evtIndex, 1);
}

var addToDo = function (toDo) {
  current.items.todos[toDo.day] ? current.items.todos[toDo.day].push(toDo) : current.items.todos[toDo.day] = [toDo];
}

var deleteToDo = function (toDo, index) {
  current.items.todos[toDo.day].splice(index, 1);
}

var toDoStatus = function (toDo) {
  current.items.todos[toDo.day][toDo.index].completed ? current.items.todos[toDo.day][toDo.index].completed = false : current.items.todos[toDo.day][toDo.index].completed = true;
}

var setUser = function (input) {
  user = input.user;
}


var plannerStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function (cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getCurrentMonth: function () {
    console.log(years, current);
    return current;
  },
  getCurrentUser: function () {
    return user;
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
    case appConstants.SELECTED_DAY:
      selectedDay(action.data);
      plannerStore.emit(CHANGE_EVENT);
      break;
    case appConstants.ADD_EVENTS:
      addEvents(action.data);
      plannerStore.emit(CHANGE_EVENT);
      break;
    case appConstants.DELETE_EVENTS:
      deleteEvents(action.data.day, action.data.evtIndex);
      plannerStore.emit(CHANGE_EVENT);
      break;
    case appConstants.ADD_TODO:
      addToDo(action.data);
      plannerStore.emit(CHANGE_EVENT);
      break;
    case appConstants.TODO_STATUS:
      toDoStatus(action.data);
      plannerStore.emit(CHANGE_EVENT);
      break;
    case appConstants.DELETE_TODO:
      deleteToDo(action.data.toDo, action.data.index);
      plannerStore.emit(CHANGE_EVENT);
      break;
    case appConstants.SET_USER:
      setUser(action.data);
      plannerStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = plannerStore;
