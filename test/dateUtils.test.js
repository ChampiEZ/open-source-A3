import { addDays } from '../src/dateUtils';

test('addDays adds the given number of days to the date', () => {
    const date = new Date(2024, 9, 1); // October 1, 2024
    const result = addDays(date, 5);
    expect(result.getMonth()).toBe(9); // Still October
    expect(result.getDate()).toBe(6); // Now October 6
});
