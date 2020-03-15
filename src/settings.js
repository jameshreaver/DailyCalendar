
// Start hour of the day
const START_HOUR = 9 // 9am

// End hour of the day
const END_HOUR = 18  // 6pm

// Start time in minutes
const MIN_TIME = 0

// End time in minutes
const MAX_TIME = 60 * (END_HOUR - START_HOUR)

// Vertical height in pixel
// for each minute
const PX_PER_MINUTE = 2


export default {
  PX_PER_MINUTE,
  START_HOUR,
  END_HOUR,
  MIN_TIME,
  MAX_TIME
}