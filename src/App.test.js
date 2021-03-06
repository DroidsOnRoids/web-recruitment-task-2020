import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders correctly', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Available books/i);
  expect(linkElement).toBeInTheDocument();
});
