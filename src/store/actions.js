import * as types from './types';
import axios from 'axios';
import { getRandomItems } from '../helpers';

const fetchCreaturesSuccess = (payload) => ({
  type: types.FETCH_CREATURES,
  payload,
});

export const fetchCreatures = (url) => async (dispatch) => {
  let creatures = [];

  try {
    creatures = await axios
      .get(url)
      .then((el) => el.data)
      .then((data) => getRandomItems(data, 12));
  } catch (error) {
    throw new Error(error);
  }

  return dispatch(fetchCreaturesSuccess(creatures));
};

export const showOptions = (payload) => ({
  type: types.SHOW_OPTIONS,
  payload,
});

export const selectOption = (payload) => ({
  type: types.SELECT_OPTION,
  payload,
});
