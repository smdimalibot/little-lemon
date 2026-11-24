import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Little Lemon header', () => {
  render(<Header />);
  const logoElement = screen.getByText(/Little Lemon Logo/ii);
  expect(logoElement).toBeInTheDocument();
});
