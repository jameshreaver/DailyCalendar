import time from '../../utils/time';
import settings from '../../settings';


test('today returns date of today', () => {
  const today = new Date().getDate();
  expect(time.today()).toContain(today);
});

test('format returns expected output', () => {
  expect(time.format(0)).toEqual("9:00 AM");
  expect(time.format(90)).toEqual("10:30 AM");
  expect(time.format(301)).toEqual("2:01 PM");
});

test('withinHours does not change valid time', () => {
  let valid = time.withinHours(40);
  expect(valid).toEqual(40);
});

test('withinHours ensures minimum time when invalid time', () => {
  let invalid = time.withinHours(-12);
  expect(invalid).toEqual(settings.MIN_TIME);
});

test('withinHours ensures maximum time when invalid time', () => {
  let invalid = time.withinHours(10000);
  expect(invalid).toEqual(settings.MAX_TIME);
});

test('validate prevents end time before start time', () => {
  let event = {start: 100, end: 40};
  event = time.validate(event);
  expect(event.start).toBeLessThanOrEqual(event.end);
});

test('validate checks within hours and start < end', () => {
  let event = {start: -100, end: 40};
  event = time.validate(event);
  expect(event.start).toEqual(settings.MIN_TIME);
  expect(event.start).toBeLessThanOrEqual(event.end);
});
