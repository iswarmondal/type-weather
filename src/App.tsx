import {useEffect, useState} from 'react';
import AppBody from './components/AppBody';

function App() {
  const [weatherData,setWeatherData] = useState([]);

  const getWeatherData = async () => {
    const data = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=caae850b1c5faddca3f8aba5cb81c2ea");

    const weather = await data.json();

    setWeatherData(weather.list[0].main.temp);
  }

  useEffect(() => {
    getWeatherData()
  }, [])
  return (
    <div>
      <AppBody temp={weatherData} weather={"clear"}  />
    </div>
  );
}

export default App;
