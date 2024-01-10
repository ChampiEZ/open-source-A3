import { addDays, formatDate, diffInDays, diffInYears, getDayOfWeek} from '../src/dateUtils';

test('addDays adds the given number of days to the date', () => {
    const date = new Date(2024, 9, 1); // October 1, 2024
    const result = addDays(date, 5);
    expect(result.getMonth()).toBe(9); // Still October
    expect(result.getDate()).toBe(6); // Now October 6
});

test('formatDate formats a date according to the given format string', () => {
  const date = new Date(2024, 9, 1); // October 1, 2024
  const result = formatDate(date, 'dd.MM.yyyy');
  expect(result).toBe('01.10.2024');
});

test('diffInDays calculates the difference between two dates in days', () => {
  const date1 = new Date(2024, 9, 1); // October 1, 2024
  const date2 = new Date(2024, 9, 6); // October 6, 2024
  const result = diffInDays(date1, date2);
  expect(result).toBe(5);
});

test('diffInYears calculates the difference in years between two dates', () => {
  const date1 = new Date(1990, 0, 1); // January 1, 1990
  const date2 = new Date(2024, 0, 1); // January 1, 2024
  const result = diffInYears(date1, date2);
  expect(result).toBe(34);
});

test('getDayOfWeek returns the day of the week for a given date', () => {
  const date = new Date(2024, 9, 1); // October 1, 2024 is a Sunday
  const result = getDayOfWeek(date);
  expect(result).toBe('Mardi');
});