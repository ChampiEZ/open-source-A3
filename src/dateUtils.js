import moment from 'moment';
import { format } from 'date-fns';

export function addDays(date, days) {
  return moment(date).add(days, 'days').toDate();
}

export function formatDate(date, formatStr) {
  return format(date, formatStr);
}