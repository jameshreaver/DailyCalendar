import moment from 'moment';
import settings from '../settings';

// Today's date
function today() {
  return moment().format("ll");
}

// Return the start time
// in minutes 
function startOfDay() {
  return settings.MIN_TIME;
}

// Return the end time
// in minutes 
function endOfDay() {
  return settings.MAX_TIME;
}

// Ensure start time follows end time
// and both times are within working hours
function validate(event) {
  let start = withinHours(event.start);
  let end = withinHours(event.end);
  return { 
    start: start, 
    end: Math.max(start, end)
  };
}

// Return minutes within the 
// daily start and end times
function withinHours(mins) {
  mins = Math.min(mins, settings.MAX_TIME);
  return Math.max(mins, settings.MIN_TIME);
}

// Get the formatted hour 
// for minutes since start
function format(mins) {
  return moment()
    .startOf('d')
    .hour(settings.START_HOUR)
    .add(mins, 'm')
    .format('LT');
}

export default {
  validate,
  withinHours,
  startOfDay,
  endOfDay,
  format,
  today
};