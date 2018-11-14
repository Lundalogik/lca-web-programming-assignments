import axios from 'axios';

export class WeatherApi {
    constructor() {
        this.apiKey = '2cf7a36b35fd6760eba9268dde14e444';
        this.url = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${this.apiKey}`;
    }

    getForecast(city = '', country = '') {
        const query = `q=${city},${country}`;
        return axios.get(`${this.url}&${query}`);
    }
}
