import fetch from 'cross-fetch';
import {store} from './index';

const base = "https://orthocal.info";

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
    return dispatch => {
        dispatch(requestDay())

        const jurisdiction = store.getState().jurisdiction;
        const url = `${base}/api/${jurisdiction}/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}/`;

        return fetch(url)
            .then(response => response.json())
            .then(day => dispatch(receiveDay(day, date)))
    }
}
