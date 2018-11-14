import ko from 'knockout';
import CityForecast from '../../models/city_forecast';

class App {
    constructor() {
        this.searchResult = ko.observable();
        this.searchError = ko.observable();
        this.cityForecasts = ko.observableArray();

        this.searchResult.subscribe(forecastItem =>
        {
            var forecastModel = new CityForecast(forecastItem);
            this.cityForecasts.unshift(forecastModel)
        });
    }
}

const template = `
<toolbar params="searchResult: searchResult, searchError: searchError"></toolbar>

<div class="container">
    <error-message params="error: searchError" />
    <city-list params="cityForecasts: cityForecasts" />
</div>
`;

export default { viewModel: App, template };