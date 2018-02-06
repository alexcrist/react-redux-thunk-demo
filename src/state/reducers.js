import {
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE
} from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ITEM:
      return { ...state, fetching: true };

    case FETCH_ITEM_SUCCESS:
      return { data: action.data, err: null, fetching: false };

    case FETCH_ITEM_FAILURE:
      return { data: null, err: action.err, fetching: false };

    default:
      return state;
  }
};

