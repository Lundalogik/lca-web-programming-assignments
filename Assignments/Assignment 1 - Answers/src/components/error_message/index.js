import { errors } from '../../resources/texts';
class ErrorMessage {
    constructor(params) {
        this.error = params.error;
        this.errorTitle = errors.title;
        this.errorHelp = errors.errorHelp;
    }
}

const template = `
<div data-bind="if:error()">
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <h4 data-bind="text:errorTitle"></h4>
        <span data-bind="text:error"></span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div data-bind="text:errorHelp"></div>
    </div>
</div>
`;







export default { viewModel: ErrorMessage, template };
