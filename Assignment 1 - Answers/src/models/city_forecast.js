import moment from 'moment';
import WeatherData from './weather_data';

export default class CityForecast {
    constructor(data) {
        this.id = data.city.id;
        this.name = `${data.city.name}, ${data.city.country}`;
        this.forecast = data.list.filter((item, index) => index % 8 === 0).map(item => {
            return new WeatherData(item);
        });
    }
}
