import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calendar from '../../components/Calendar';


test('renders title', () => {
  const { getByText } = render(<Calendar />);
  const title = getByText(/Calendar/i);
  expect(title).toBeInTheDocument();
});

test('renders date of today', () => {
  const { getByText } = render(<Calendar />);
  let today = new RegExp(new Date().getDate());
  const date = getByText(today);
  expect(date).toBeInTheDocument();
});

test('renders day view', () => {
  const { container } = render(<Calendar />);
  let day = container.firstChild.lastChild;
  expect(day.className).toBe('day');
});