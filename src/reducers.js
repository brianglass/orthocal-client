import dateFormat from 'dateformat'

import {base_url} from './env'
import {
    REQUEST_DAY,
    RECEIVE_DAY,
    SET_JURISDICTION
} from './actions'

const today = new Date();

export const initialState = {
    isFetching: false,
    date: today.toDateString(),
    jurisdiction: "oca",
		base_url: base_url,
    day: {
        titles: [],
        feasts: [],
        fast_level: 0,
        fast_level_desc: "",
        fast_exception_desc: "",
        readings: []
    }
};

export default function orthocalApp(state=initialState, action) {
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
                date: action.date.toDateString()
            };
        case SET_JURISDICTION:
            return {
                ...state,
                jurisdiction: action.jurisdiction
            };
        default:
            return state;
    }
}
