import ENDPOINTS from '../constants/endpoints';
import { checkResponseForError, setUserTokenInStorage, getUserTokenFromStorage, handleError } from './utils';

export const signInUser = (credentials, callback) => {
  fetch(
    ENDPOINTS.SIGN_IN,
    { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),
    },
  )
  .then((res) => checkResponseForError(res))
  .then((json) => {
    setUserTokenInStorage(json);
    if (typeof callback === 'function') {
      callback();
    }
  })
  .catch(err => handleError('Login', err))
}

export const signUpUser = (credentials, callback) => {
  fetch(
    ENDPOINTS.CREATE,
    { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),
    }
  ) 
  .then((res) => checkResponseForError(res))
  .then((json) => {
    setUserTokenInStorage(json);
    if (typeof callback === 'function') {
      callback();
    }
  })
  .catch(err => handleError('Sign up', err))
}

export const getGames = async () => {
  const token = await getUserTokenFromStorage();
  return fetch(
    ENDPOINTS.GAME,
    { 
      method: 'GET',
      headers: {
        'x-access-token': token,
      },
    }
  )
  .then(async (res) => { return checkResponseForError(res);})
  .catch(err => handleError('Fetch Games', err))
}

export const addGame = async (game, callback) => {
  const token = await getUserTokenFromStorage();
  fetch(
    ENDPOINTS.GAME,
    { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify(game),
    }
  )
  .then(async (res) => checkResponseForError(res))
  .then(() => {
    if (typeof callback === 'function') {
      callback();
    }
  })
  .catch(err => handleError('Save Game', err))
}
