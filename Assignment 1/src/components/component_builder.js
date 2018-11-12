import app from './app';
import Toolbar from './toolbar';
import WeatherItem from './weather_item';
import CityTile from './city_tile';
import CityList from './city_list';
import ErrorMessage from './error_message';
import ko from 'knockout';

class ComponentBuilder {

    build() {
        ko.components.register('app', 
            { 
                viewModel: app.viewModel, 
                template: app.template 
            }
        );

        ko.components.register('toolbar',
            {
                viewModel: Toolbar.viewModel,
                template: Toolbar.template
            }
        );

        ko.components.register('weather-item',
            {
                viewModel: WeatherItem.viewModel,
                template: WeatherItem.template
            }
        );

        ko.components.register('city-tile',
            {
                viewModel: CityTile.viewModel,
                template: CityTile.template
            }
        );

        ko.components.register('city-list',
            {
                viewModel: CityList.viewModel,
                template: CityList.template
            }
        );

        ko.components.register('error-message',
            {
                viewModel: ErrorMessage.viewModel,
                template: ErrorMessage.template
            }
        );
    }
}
 
export default ComponentBuilder;