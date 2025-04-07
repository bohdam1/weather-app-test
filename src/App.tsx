import { useState } from 'react';
import { Container, TextInput, Button, Stack, Text } from '@mantine/core';
import { useWeather } from './hooks/useWeather';
import { WeatherCard } from './components/WeatherCard/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const { weather, error, fetchWeather } = useWeather();

  const handleSubmit = () => {
    if (city.trim()) fetchWeather(city);
  };

  return (
    <Container size="xs" py="xl">
      <Stack gap="md">
        <TextInput
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <Button onClick={handleSubmit}>Get Weather</Button>
        {error && <Text color="red">{error}</Text>}
        {weather && <WeatherCard data={weather} />}
      </Stack>
    </Container>
  );
}

export default App;
