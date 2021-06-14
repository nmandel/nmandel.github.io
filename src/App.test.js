import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test text', () => {
  render(<App />);
  const testText = screen.getByText(/test/i);
  expect(testText).toBeInTheDocument();
});
