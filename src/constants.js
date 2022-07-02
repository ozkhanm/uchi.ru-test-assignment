const DAYS_IN_WEEK = 7;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTES = 60;
const MSECONDS_IN_SECOND = 1000;
const SECONDS_IN_HOUR = HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTES;
const MSECONDS_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTES * MSECONDS_IN_SECOND;
const MSECONDS_IN_WEEK = DAYS_IN_WEEK * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTES * MSECONDS_IN_SECOND;
const TIME_ZONES = 24;
const DAYS_OF_WEEK_SHORTNAMES = {
  "1": "M",
  "2": "T",
  "3": "W",
  "4": "T",
  "5": "F",
  "6": "S",
  "7": "S"
};
const MONTHS = {
  "0": "January",
  "1": "February",
  "2": "March",
  "3": "April",
  "4": "May",
  "5": "June",
  "6": "Jule",
  "7": "August",
  "8": "September",
  "9": "October",
  "10": "November",
  "11": "December"
};

export {
    DAYS_IN_WEEK,
    HOURS_IN_DAY,
    MINUTES_IN_HOUR,
    SECONDS_IN_MINUTES,
    SECONDS_IN_HOUR,
    MSECONDS_IN_SECOND,
    MSECONDS_IN_DAY,
    MSECONDS_IN_WEEK,
    TIME_ZONES,
    DAYS_OF_WEEK_SHORTNAMES,
    MONTHS
};