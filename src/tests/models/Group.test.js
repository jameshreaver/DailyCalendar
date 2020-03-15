import Group from '../../models/Group';


test('start and end times are set correctly', () => {
  const group = new Group(40, 100);
  expect(group.start).toBe(40);
  expect(group.end).toBe(100);
});

test('new group is initially empty', () => {
  const group = new Group();
  expect(group.events).toHaveLength(0);
});

test('event to be added correctly', () => {
  const group = new Group();
  const event = {start: 40, end: 100};
  group.add(event);
  expect(group.events).toHaveLength(1);
});

test('start and end times are updated correctly', () => {
  const group = new Group(50, 60);
  const event = {start: 40, end: 100};
  group.add(event);
  expect(group.start).toBe(40);
  expect(group.end).toBe(100);
});

test('event overlaps with start time', () => {
  const group = new Group(50, 60);
  const event = {start: 40, end: 55};
  expect(group.overlaps(event)).toBe(true);
});

test('event overlaps with end time', () => {
  const group = new Group(50, 60);
  const event = {start: 55, end: 70};
  expect(group.overlaps(event)).toBe(true);
});

test('event overlaps with start and end time', () => {
  const group = new Group(50, 60);
  const event = {start: 51, end: 55};
  expect(group.overlaps(event)).toBe(true);
});

test('event does not overlap', () => {
  const group = new Group(50, 60);
  const event = {start: 40, end: 50};
  expect(group.overlaps(event)).toBe(false);
});
