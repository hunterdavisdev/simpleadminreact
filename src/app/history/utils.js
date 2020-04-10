/* Time constants */
const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const YEAR = DAY * 365;

/**
 * @description Converts milliseconds to seconds
 * @param {Number} milliseconds
 */
const getSeconds = (milliseconds) => Math.round(milliseconds / 1000);

/**
 * @description Converts seconds to minutes
 * @param {Number} seconds
 */
const getMinutes = (seconds) => Math.round(seconds / 60);

/**
 * @description Converts minutes to hours
 * @param {Number} minutes
 */
const getHours = (minutes) => Math.round(minutes / 60 / 60);

/**
 * @description Converts hours to days
 * @param {Number} hours
 */
const getDays = (hours) => Math.round(hours / 24);

/**
 * @description Converts days to years
 * @param {Number} days
 */
const getYears = (days) => Math.round(days / 365);

/**
 * Helper function for determining wether the input falls within
 * a particular range or not. The inclusivity of the bottom end
 * of the range can be controlled via the bottomInclusive param
 * @param {Number} input
 * @param {Number} rangeStart
 * @param {Number} rangeFinish
 * @param {Boolean} bottomInclusive
 */
const inRange = (input, rangeStart, rangeFinish, bottomInclusive = false) =>
  bottomInclusive ? input >= rangeStart && input <= rangeFinish : input > rangeStart && input < rangeFinish;

/**
 * @description Returns a string representation of the amount
 * of time passed to be used in a presentational component.
 * @param {Number} elapsedTime
 */
const evalElapsedTimeDescription = (elapsedTime) => {
  const secondsElapsed = getSeconds(elapsedTime);
  if (secondsElapsed < MINUTE) return `${secondsElapsed} seconds ago`;
  else if (inRange(secondsElapsed, MINUTE, HOUR)) return `${getMinutes(secondsElapsed)} minutes ago`;
  else if (inRange(secondsElapsed, HOUR, DAY)) return `${getHours(secondsElapsed)} hours ago`;
  else if (inRange(secondsElapsed(DAY, YEAR))) return `${getDays(secondsElapsed)} days ago;`;
  else return `${getYears(secondsElapsed)} years ago;`;
};

export default evalElapsedTimeDescription;
