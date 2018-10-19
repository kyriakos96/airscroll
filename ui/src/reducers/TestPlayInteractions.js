export default function(state = {}, action) {
    switch (action.type) {
        case "TEST_PLAY":
            // console.log(action);
            console.log(action.payload.data);
            return action.error
                ? { ...state, error: action.error, data: [] }
                : { ...state, error: action.error, data: action.payload.data };
        default:
            return state;
    }
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
}

function parseJSON(response) {
    return response.json();
}