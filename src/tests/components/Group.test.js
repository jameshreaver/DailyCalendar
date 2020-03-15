import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GroupView from '../../components/Group';
import Group from '../../models/Group';
import utils from '../../utils/utils';

let group = {};

beforeEach(() => {
  group = new Group();
  group.add({start: 0, end: 90});
  group.add({start: 30, end: 120});
});

test('group renders all events', () => {
  const e = <GroupView group={group}/>
  const { container } = render(e);
  let children = container.firstChild.children;
  expect(children).toHaveLength(2);
});

test('group has correct offset', () => {
  let offset = 10;
  const e = <GroupView group={group} offset={offset}/>
  const { container } = render(e);
  let elem = container.firstChild;
  let padding = utils.height(offset);
  expect(elem.style.paddingTop).toBe(padding);
});

test('events have correct offset', () => {
  const e = <GroupView group={group}/>
  const { container } = render(e);
  let events = container.firstChild.children;
  expect(events[0].style.marginTop).toBe("0px");
  expect(events[1].style.marginTop).toBe("60px");
});

test('events have correct width', () => {
  const e = <GroupView group={group}/>
  const { container } = render(e);
  let events = container.firstChild.children;
  expect(events[0].style.width).toBe("50%");
});



