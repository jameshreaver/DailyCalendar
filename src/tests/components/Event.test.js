import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Event from '../../components/Event';
import utils from '../../utils/utils';

test('Event contains start and end times', () => {
  const event = {start: 0, end: 90};
  const e = <Event event={event}/>
  const { getByText } = render(e);
  const startDate = getByText(/9:00 AM/i);
  const endDate = getByText(/10:30 AM/i);
  expect(startDate).toBeInTheDocument();
  expect(endDate).toBeInTheDocument();
});

test('Event has correct width', () => {
  const event = {start: 0, end: 90};
  const e = <Event event={event} width="50%"/>
  const { container } = render(e);
  expect(container.firstChild.style.width).toBe('50%');
});

test('Event has correct offset', () => {
  const event = {start: 0, end: 90};
  const e = <Event event={event} offset="20px"/>
  const { container } = render(e);
  expect(container.firstChild.style.marginTop).toBe('20px');
});

test('Event has correct height', () => {
  const event = {start: 0, end: 90};
  const e = <Event event={event}/>
  const { container } = render(e);
  const height = utils.height(event.end - event.start)
  expect(container.firstChild.style.height).toBe(height);
});



