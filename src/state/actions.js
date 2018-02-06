import axios from 'axios';

export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';

export const fetchItem = category => {
  return dispatch => {
    const number = Math.floor(Math.random() * 100);
    dispatch({ type: FETCH_ITEM });
    axios(`https://swapi.co/api/${category}/${number}`)
      .then(res => {
        dispatch({ type: FETCH_ITEM_SUCCESS, data: { ...res.data, category, number }});
      })
      .catch(err => {
        dispatch({ type: FETCH_ITEM_FAILURE, err });
      });
  };
};
