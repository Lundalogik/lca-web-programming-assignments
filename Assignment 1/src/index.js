import ko from 'knockout';
import ComponentBuilder from './components/component_builder';


$(document).ready(() => {
    const componentBuilder = new ComponentBuilder();
    componentBuilder.build();

    ko.applyBindings();
});
