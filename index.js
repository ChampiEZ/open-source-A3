import { addDays, formatDate } from './src/dateUtils.js';

const currentDate = new Date();
const futureDate = addDays(currentDate, 5);
console.log(formatDate(futureDate, 'dd.MM.yyyy'));


