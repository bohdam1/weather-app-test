import { Card, Text, Image } from '@mantine/core';
import { WeatherData } from '../../types';

type Props = {
  data: WeatherData;
};

export const WeatherCard = ({ data }: Props) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder>
   <Text fw={700} size="xl">{data.city}</Text>
   <Image
  src={data.icon}
  alt={data.description}
  width={50}       
  height={50}     
  style={{ objectFit: 'contain', width: '50px', height: 'auto' }} 
/>

    <Text size="lg">{data.temperature}°C</Text>
    <Text color="dimmed">{data.description}</Text>
    <Text size="xs">Updated at: {data.updatedAt}</Text>
  </Card>
);
