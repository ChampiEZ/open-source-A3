/**
 * Import necessary functions from dateUtils.js and date-fns library
 */
import { addDays, formatDate, diffInDays, diffInYears, getDayOfWeek, nextMonth } from './src/dateUtils.js';
import { format } from 'date-fns';

/**
 * Get the current date
 */
const currentDate = new Date();

/**
 * Calculate a future date by adding 5 days to the current date
 */
const futureDate = addDays(currentDate, 5);
console.log(formatDate(futureDate, 'dd.MM.yyyy'));

/**
 * Define two specific dates
 */
const date1 = new Date(2024, 9, 1); // October 1, 2024
const date2 = new Date(2024, 9, 6); // October 6, 2024

/**
 * Calculate the difference in days between the two dates
 */
const diff = diffInDays(date1, date2);
console.log(`Il y a ${diff} jours entre ces deux dates.`);

/**
 * Define a birth date and calculate the age based on the current date
 */
const birthDate = new Date(1990, 0, 1); // January 1, 1990
const currentDate2 = new Date();
const age = diffInYears(birthDate, currentDate2);
console.log(`La personne a ${age} ans.`);

/**
 * Get the current day of the week
 */
const today = new Date();
const dayOfWeek = getDayOfWeek(today);
console.log(`Aujourd'hui, c'est ${dayOfWeek}.`);

/**
 * Calculate the first day of the next month
 */
const today2 = new Date();
const nextMonthDate = nextMonth(today2);
console.log(`Le premier jour du mois prochain est ${format(nextMonthDate, 'dd.MM.yyyy')}.`);