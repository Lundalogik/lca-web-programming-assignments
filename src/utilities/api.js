import axios from 'axios';

export class WeatherApi {
    constructor() {
        this.apiKey = 'YOUR API KEY';
        this.url = `http://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}`;
    }

    getForecast(city = '', country = '') {
        const query = `q=${city},${country}`;
        return axios.get(`${this.url}&${query}`);
    }
}
