
import useDocumentTitle from "../components/useDocumentTitle"
import GfGWeatherApp from '../components/GfGWeatherApp';

const Weather = () =>{
    useDocumentTitle("Weather")
  return (
<div>
            <GfGWeatherApp />
        </div>

  );

}

export default Weather;