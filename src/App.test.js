import { render, screen } from '@testing-library/react';
import App from './App';

// basic rendering smoke test for the new portfolio page
test('renders portfolio heading and project cards', () => {
  render(<App />);
  const heading = screen.getByText(/my portfolio/i);
  expect(heading).toBeInTheDocument();

  // sample data includes "Sample Project One"
  const project = screen.getByText(/sample project one/i);
  expect(project).toBeInTheDocument();
});
