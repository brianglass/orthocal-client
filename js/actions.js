import fetch from 'cross-fetch'

const base = "https://orthocal.info";

export const REQUEST_DAY = 'REQUEST_DAY'
function requestDay() {
    return {
        type: REQUEST_DAY
    }
}

export const RECEIVE_DAY = 'RECEIVE_DAY'
function receiveDay(day, date) {
    return {
        type: RECEIVE_DAY,
        day: day,
        date
    }
}

export function fetchDay(date) {
    return dispatch => {
        dispatch(requestDay())
        const url = `${base}/api/oca/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}/`;
        return fetch(url)
            .then(response => response.json())
            .then(day => dispatch(receiveDay(day, date)))
    }
}
