var calendar = require('node-calendar');
var monthConversion = require('../assets/monthToNum');
var date = new Date().toString().split(' ');
var monthMatrix = new calendar.Calendar(1).monthdayscalendar(date[3], monthConversion[date[1]][0]);


module.exports = monthMatrix;
