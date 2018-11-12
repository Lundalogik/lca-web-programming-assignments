class CityTile {
    constructor(params) {
        this.cityForecast = params.cityForecast;
    }
}

const template = `
<li class="list-group-item">
    <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1" data-bind="text: cityForecast.name"></h4>
    </div>
    <ul class="list-unstyled">
        <!-- ko foreach: cityForecast.forecast -->
        <weather-item params="weatherData: $data"></weather-item>
        <!-- /ko -->
    </ul>
</li>
`;

export default { viewModel: CityTile, template };
