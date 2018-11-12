import axios from 'axios';

export class WeatherApi {
    constructor() {
        this.apiKey = 'a46d2e1466ef7785a8c42afe66323886';
        this.url = `http://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}`;
    }

    getForecast(city = '', country = '') {
        const query = `q=${city},${country}`;
        return axios.get(`${this.url}&${query}`);
    }
}
