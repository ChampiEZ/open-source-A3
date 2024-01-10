import { addDays, formatDate, diffInDays } from './src/dateUtils.js';

const currentDate = new Date();
const futureDate = addDays(currentDate, 5);
console.log(formatDate(futureDate, 'dd.MM.yyyy'));

const date1 = new Date(2024, 9, 1); // October 1, 2024
const date2 = new Date(2024, 9, 6); // October 6, 2024
const diff = diffInDays(date1, date2);
console.log(`Il y a ${diff} jours entre ces deux dates.`);


