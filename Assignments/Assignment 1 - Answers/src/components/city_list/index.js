class CityList {
    constructor(params){
        this.cityForecasts = params.cityForecasts;
    }
}

const template = `
    <ul data-bind="foreach:cityForecasts" class="list-unstyled">
        <city-tile params="cityForecast: $data"></city-tile>
    </ul>
`;

export default { viewModel: CityList, template };
