import fetch from 'cross-fetch';

export const REQUEST_DAY = 'REQUEST_DAY';
function requestDay() {
    return {
        type: REQUEST_DAY
    }
}

export const RECEIVE_DAY = 'RECEIVE_DAY';
function receiveDay(day, date) {
    return {
        type: RECEIVE_DAY,
        day,
        date
    }
}

export const SET_JURISDICTION = 'SET_JURISDICTION';
export function setJurisdiction(jurisdiction) {
    return {
        type: SET_JURISDICTION,
        jurisdiction
    }
}

export function fetchDay(date) {
    return (dispatch, getState) => {
        dispatch(requestDay())

        // Fetch the day data
        const state = getState()
        const url = `${state.base_url}/api/${state.jurisdiction}/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}/`
        const promise = fetch(url).then(response => response.json())

        promise.then(day => dispatch(receiveDay(day, date)))

        return promise
    }
}
