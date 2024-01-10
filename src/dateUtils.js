import moment from 'moment';
import { format } from 'date-fns';

export function addDays(date, days) {
  return moment(date).add(days, 'days').toDate();
}

export function formatDate(date, formatStr) {
  return format(date, formatStr);
}

export function diffInDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffTime = Math.abs(date2 - date1);
  return Math.round(diffTime / oneDay);
}

export function diffInYears(date1, date2) {
  return date2.getFullYear() - date1.getFullYear();
}

export function getDayOfWeek(date) {
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  return days[date.getDay()];
}