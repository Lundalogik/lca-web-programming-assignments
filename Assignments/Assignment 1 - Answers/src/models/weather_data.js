import moment from 'moment';

export default class WeatherData {
    constructor(data) {
        this.icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        this.weather = data.weather[0].main;
        this.dateText = moment(data.dt_txt).calendar(null, {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            sameElse: 'dddd'
        });
        this.time = moment(data.dt_txt).format('HH:mm');
        this.temperature = data.main.temp;
    }
}