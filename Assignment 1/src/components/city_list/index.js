class CityList {
    constructor(params){
        this.cityForecasts = params.cityForecasts;
    }
}

const template = `
    <ul class="list-group">
        <!-- ko foreach: cityForecasts -->
        <city-tile params="cityForecast: $data"></city-tile>
        <!-- /ko -->
    </ul>
`;

export default { viewModel: CityList, template };
