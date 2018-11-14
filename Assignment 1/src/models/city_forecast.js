import moment from 'moment';
import WeatherData from './weather_data';

export default class CityForecast {
    constructor(data) {
        // Construct a CityForecast object to hold information about the city and a five day forecast
        this.cityid = data.city.id;
        this.cityname = data.city.name;
        this.country = data.city.country;

        this.forecast = (data.list
            .filter((forecastitem,index) => index % 8 === 0) //only take every 8 forecastitem in the list
            .map(forecastitem => new WeatherData(forecastitem))
        );

        // Example with bodies for the functions
        // this.forecast = (data.list
        //     .filter((forecastitem,index) =>
        //     {
        //         return index % 8 === 0
        //     }) //only take every 8 forecastitem in the list
        //     .map(forecastitem =>
        //     {
        //         return new WeatherData(forecastitem)
        //     })
        // );


    }
}
