import {
    REQUEST_DAY,
    RECEIVE_DAY,
} from './actions'

const today = new Date();

const initialState = {
    isFetching: false,
    date: today,
    day: {
        titles: [],
        fast_level_desc: "",
        fast_exception: "",
        readings: []
    }
};

function orthocalApp(state=initialState, action) {
    switch (action.type) {
        case REQUEST_DAY:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_DAY:
            return {
                ...state,
                isFetching: false,
                day: action.day,
                date: action.date
            };
        default:
            return state;
    }
}

export default orthocalApp
