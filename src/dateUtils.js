import moment from 'moment';
import { format } from 'date-fns';
/**
 * 
 * Adds a specified number of days to a given date.
 * @param {Date} date - The initial date.
 * @param {number} days - The number of days to add.
 * @returns {Date} The updated date.
 */
export function addDays(date, days) {
  return moment(date).add(days, 'days').toDate();
 }
 
 /**
  * Formats a given date according to a specified format string.
  * @param {Date} date - The date to format.
  * @param {string} formatStr - The format string.
  * @returns {string} The formatted date.
  */
 export function formatDate(date, formatStr) {
  return format(date, formatStr);
 }
 
 /**
  * Calculates the difference in days between two dates.
  * @param {Date} date1 - The first date.
  * @param {Date} date2 - The second date.
  * @returns {number} The difference in days.
  */
 export function diffInDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffTime = Math.abs(date2 - date1);
  return Math.round(diffTime / oneDay);
 }
 
 /**
  * Calculates the difference in years between two dates.
  * @param {Date} date1 - The first date.
  * @param {Date} date2 - The second date.
  * @returns {number} The difference in years.
  */
 export function diffInYears(date1, date2) {
  return date2.getFullYear() - date1.getFullYear();
 }
 
 /**
  * Returns the day of the week for a given date.
  * @param {Date} date - The date.
  * @returns {string} The day of the week.
  */
 export function getDayOfWeek(date) {
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  return days[date.getDay()];
 }
 
 /**
  * Returns the first day of the next month for a given date.
  * @param {Date} date - The date.
  * @returns {Date} The first day of the next month.
  */
 export function nextMonth(date) {
  let result = new Date(date);
  result.setMonth(date.getMonth() + 1);
  return result;
 }