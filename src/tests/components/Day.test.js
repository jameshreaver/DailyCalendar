import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Day from '../../components/Day';
import utils from '../../utils/utils';

const events = [
  {start: 0, end: 90},
  {start: 30, end: 120},
  {start: 140, end: 240}
];

test('day renders all groups', () => {
  const e = <Day events={events}/>
  const { container } = render(e);
  let children = container.firstChild.children;
  expect(children).toHaveLength(2);
});

test('day has correct padding bottom', () => {
  let offset = 10;
  const e = <Day events={events}/>
  const { container } = render(e);
  let elem = container.firstChild;
  let padding = utils.padding(240);
  expect(elem.style.paddingBottom).toBe(padding);
});

test('groups have correct offsets', () => {
  const e = <Day events={events}/>
  const { container } = render(e);
  let groups = container.firstChild.children;
  expect(groups[0].style.paddingTop).toBe("0px");
  expect(groups[1].style.paddingTop).toBe("40px");
});


