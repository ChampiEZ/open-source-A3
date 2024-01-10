import moment from 'moment';

export function addDays(date, days) {
  return moment(date).add(days, 'days').toDate();
}


