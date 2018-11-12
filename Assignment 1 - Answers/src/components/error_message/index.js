import { errors } from '../../resources/texts';
class ErrorMessage {
    constructor(params) {
        this.error = params.error;
    }
}

const template = `
<!-- ko if: error -->
<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <h4 class="alert-heading">${errors.title}</h4>
    <p data-bind="text: error"></p>
    <hr>
    <p class="mb-0">${errors.errorHelp}</p>
</div>
<!-- /ko -->`;

export default { viewModel: ErrorMessage, template };
