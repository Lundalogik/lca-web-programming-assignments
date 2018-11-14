import ko from 'knockout';
import { WeatherApi } from '../../utilities/api';
import { toolbar } from '../../resources/texts';

class Toolbar {
    constructor(params) {
        this.title = toolbar.title;
        this.buttonText = toolbar.searchButtonText;
        this.city = ko.observable();
        this.country = ko.observable(toolbar.defaultCountry);
        this.api = new WeatherApi();

        this.searchResult = params.searchResult;
        this.searchError = params.searchError;
    }

    getForecast() {
        this.searchError('');
        this.api.getForecast(this.city(), this.country())
            .then(res =>{
                 this.searchResult(res.data);
            })
            .catch(err => {
                 this.searchError(err.response.data.message);
            });
    }
}

const template = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="navbar-brand" data-bind="text: title"></div>
<form data-bind="submit: getForecast" class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="City" aria-label="Search" data-bind="value: city, valueUpdate: 'afterkeydown'">
    <input class="form-control mr-sm-2" type="search" placeholder="Country" aria-label="Search" data-bind="value: country, valueUpdate: 'afterkeydown'">
    <button data-bind="text:buttonText" class="btn btn-outline-success my-2 my-sm-0" type="submit"></button>
</form>
</nav>`;

export default { viewModel: Toolbar, template };