class WeatherItem {
    constructor(params) {
        this.weatherData = params.weatherData;
    }
}

const template = `
<li class="list-group-item">
<div class="media">
    <img data-bind="attr:{'src':weatherData.icon}" class="mr-3" alt="Generic placeholder image">
    <div class="media-body">
        <h5 data-bind="text:weatherData.dateText + ' at ' + weatherData.time" class="mt-0"></h5>
        <span data-bind="text:weatherData.weather" />
        <span data-bind="text:'-'" />
        <span data-bind="text:weatherData.temperature + ' degrees'" />
    </div>
</div>
</li>
`;

export default { viewModel: WeatherItem, template: template };