import { render, screen } from '@testing-library/react';
import { WeatherCard } from '../WeatherCard'; 
import '@testing-library/jest-dom';
import { MantineProvider } from '@mantine/core';


describe('WeatherCard', () => {
  const mockData = {
    city: "Kyiv", 
    icon: 'https://example.com/icon.png',
    temperature: 25,
    description: 'Clear sky',
    updatedAt: '2025-04-07T12:00:00Z',
  };

  it('повинно відображатися правильно та мати правильні стилі', () => {
    render(
      <MantineProvider >
        <WeatherCard data={mockData} />
      </MantineProvider>
    );

    // Перевірка наявності тексту в компоненті
    expect(screen.getByText('Clear sky')).toBeInTheDocument();
    expect(screen.getByText('25°C')).toBeInTheDocument();
    expect(screen.getByText('Updated at: 2025-04-07T12:00:00Z')).toBeInTheDocument();

   
    const image = screen.getByAltText('Clear sky');
    expect(image).toBeInTheDocument();

   
    expect(image).toHaveAttribute('src', 'https://example.com/icon.png');

   
    expect(image).toHaveStyle('width: 50px');
    
  });
});
