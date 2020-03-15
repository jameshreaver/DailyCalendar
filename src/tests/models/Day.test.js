import Event from '../../models/Event';


test('event start time is set correctly', () => {
  const data = {start: 40, end: 100};
  const event = new Event(data)
  expect(event.start).toBe(40);
});

test('event end time is set correctly', () => {
  const data = {start: 40, end: 100};
  const event = new Event(data)
  expect(event.end).toBe(100);
});
