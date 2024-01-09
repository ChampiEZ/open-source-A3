import DateUtils from '../src/dateUtils';

test('Add days to date', () => {
  const date = new Date(2022, 0, 1); 
  const result = DateUtils.addDays(date, 5);
  expect(result).toEqual(new Date(2022, 0, 6));
});

test('Compare dates', () => {
  const date1 = new Date(2022, 0, 1);
  const date2 = new Date(2022, 0, 5);
  const result = DateUtils.compareDates(date1, date2);
  expect(result).toBeLessThan(0);
});

