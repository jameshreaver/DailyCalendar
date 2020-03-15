import settings from '../settings';


// Return the percentage width for
// a given number of columns
function width(cols) {
  let percentage = cols ? 100/cols : 100;
  return percentage + "%";
}

// Return the vertical height attribute
// for a calendar duration in minutes
function height(minutes) {
  return settings.PX_PER_MINUTE * minutes + 'px';
}

// Return the vertical height attribute
// for bottom padding of the calendar
function padding(end) {
  return settings.PX_PER_MINUTE * (settings.MAX_TIME - end) + 'px';
}

// Return the top padding for the event
// description adjusted for short event
function top(minutes) {
  let px = settings.PX_PER_MINUTE;
  if (minutes <= 12)
    return minutes * px / 20 +'px';
  if (minutes < 60/px) {
    return minutes * px / 5 + 'px';
  }
  return 10 * px +'px';
}

export default {
  width,
  height,
  padding,
  top
};