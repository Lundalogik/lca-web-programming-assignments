class CityTile {
    constructor(params) {
        this.cityForecast = params.cityForecast;
    }
}

const template = `
<li class="mt-sm-3">
    <div class="card">
        <h5 class="card-header" data-bind="text:cityForecast.cityname + ', ' + cityForecast.country" ></h5>
        <ul class="list-group" data-bind="foreach: cityForecast.forecast">
            <weather-item params="weatherData: $data"></weather-item>
        </ul>
    </div>
</li>
`;

export default { viewModel: CityTile, template };
