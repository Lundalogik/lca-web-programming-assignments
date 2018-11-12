import moment from 'moment';

export default class WeatherData {
    constructor(data) {
        this.dt = data.dt;
        this.dt_change = data.dt;
        this.title = moment(data.dt_txt).calendar(null, {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            sameElse: 'dddd'
        });
        this.time = moment(data.dt_txt).format('HH:mm');
        this.temperature = Math.floor(data.main.temp - 273.14);
        this.pressure = data.main.pressure;
        this.humidity = data.main.humidity;
        this.main = data.weather[0].main;
        this.icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        this.description = `${this.main}. ${this.temperature} degrees at ${this.time}`;
    }
}