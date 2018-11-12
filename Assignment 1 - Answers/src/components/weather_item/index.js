class WeatherItem {
    constructor(params) {
        this.icon = params.weatherData.icon;
        this.title = params.weatherData.title;
        this.description = params.weatherData.description;
    }
}
 
const template = `
<li class="media">
    <img class="mr-3" data-bind="attr: {'src': icon}">
    <div class="media-body">
        <h5 class="mt-0 mb-1" data-bind="text: title"></h5>
        <p data-bind="text: description"></p>
    </div>
</li>
`;

export default { viewModel: WeatherItem, template: template };