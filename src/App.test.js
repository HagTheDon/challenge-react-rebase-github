import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My really cool blog site logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/My really cool blog site/i);
  expect(linkElement).toBeInTheDocument();
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f5118e3... feat: add Auto Review article

test('renders Biology Today article', () => {
  render(<App />);
  const linkElement = screen.getByText(/Biology Today:/i);
<<<<<<< HEAD
  expect(linkElement).toBeInTheDocument();
});
=======
test('renders Auto Review Article', () => {
  render(<App />);
  const linkElement = screen.getByText(/Auto Review:/i);
  expect(linkElement).toBeInTheDocument();
});
>>>>>>> b7f6f32... feat: add Auto Review article
>>>>>>> f5118e3... feat: add Auto Review article
