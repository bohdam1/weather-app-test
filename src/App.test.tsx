import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('показує помилку при некоректному місті', async () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/enter city/i), {
    target: { value: 'notarealcity' },
  });
  fireEvent.click(screen.getByText(/get weather/i));

  expect(await screen.findByText(/city not found/i)).toBeInTheDocument();
});
