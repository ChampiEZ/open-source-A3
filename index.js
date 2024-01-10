import { addDays } from './src/dateUtils.js';

const date = new Date();
const newDate = addDays(date, 5);
console.log(newDate);
