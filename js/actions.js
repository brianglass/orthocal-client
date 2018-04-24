import fetch from 'cross-fetch'

const base = "https://orthocal.info";

export const REQUEST_DAY = 'REQUEST_DAY'
function requestDay() {
  return {
    type: REQUEST_DAY
  }
}

export const RECEIVE_DAY = 'RECEIVE_DAY'
function receiveDay(day) {
  return {
    type: RECEIVE_DAY,
    day: day
  }
}

export function fetchDay() {
  return dispatch => {
    dispatch(requestDay())
    return fetch(`${base}/api/oca/`)
      .then(response => response.json())
      .then(json => dispatch(receiveDay(json)))
  }
}
