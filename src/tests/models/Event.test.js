import Day from '../../models/Day';


test('start and end times are set correctly', () => {
  const event = {start: 40, end: 100};
  const day = new Day([event]);
  expect(day.start).toBe(40);
  expect(day.end).toBe(100);
});

test('overlapping events are added correctly', () => {
  const events = [
    {start: 40, end: 90},
    {start: 80, end: 100}
  ];
  const day = new Day(events);
  expect(day.groups).toHaveLength(1);
});

test('non-overlapping events are added correctly', () => {
  const events = [
    {start: 40, end: 80},
    {start: 80, end: 100}
  ];
  const day = new Day(events);
  expect(day.groups).toHaveLength(2);
});

test('events are sorted correctly', () => {
  const events = [
    {start: 80, end: 100},
    {start: 40, end: 80},
    {start: 30, end: 100}
  ];
  const day = new Day(events);
  expect(day.groups[0].events[0].start).toBe(30);
  expect(day.groups[0].events[2].start).toBe(80);
});

