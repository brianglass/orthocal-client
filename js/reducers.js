import {
  REQUEST_DAY,
  RECEIVE_DAY,
} from './actions'

const initialState = {
  isFetching: false,
  day: {
    titles: [],
    fast_level_desc: ""
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
        day: action.day
      };
    default:
      return state;
  }
}

export default orthocalApp
