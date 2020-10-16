const createFailureResponse = error => ({
    type: 'FAILURE-RESPONSE',
    success: false,
    reason: error,
});

const createFailureNotFoundResponse = () => ({
    type: 'FAILURE-NOTFOUND-RESPONSE',
    success: false,
    reason: 'Not found',
});

const createFailureBadAuthResponse = () => ({
    type: 'FAILURE-BADAUTH-RESPONSE',
    success: false,
    reason: 'Incorrect credentials'
});

const createFailureNotAuthorizedResponse = () => ({
    type: 'FAILURE-NOTAUTHORIZED-RESPONSE',
    success: false,
});

const createSuccessResponse = () => ({
    type: 'SUCCESS-RESPONSE',
    success: true,
});

const createSuccessDataResponse = data => ({
    type: 'SUCCESS-DATA-RESPONSE',
    success: true,
    data
});

module.exports = {
    createFailureResponse,
    createFailureNotFoundResponse,
    createFailureBadAuthResponse,
    createFailureNotAuthorizedResponse,

    createSuccessResponse,
    createSuccessDataResponse
};