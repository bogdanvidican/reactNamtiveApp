import { AsyncStorage, Alert } from 'react-native';

export const setUserTokenInStorage = async (json) => {
  await AsyncStorage.setItem('userToken', JSON.stringify(json));
}

export const getUserTokenFromStorage = async () => {
  const token = await AsyncStorage.getItem('userToken');
  if (!token) {
    return null;
  }
  return JSON.parse(token).token;
}

export const handleError = (operation, err) => {
  Alert.alert(
  `${operation} failed`,
  err.message,
  [
    {text: 'OK'},
  ],
  { cancelable: false }
)}

export const checkResponseForError = async (res) => {
  const message = JSON.parse(res._bodyText).message;
  if(!res.ok) { throw new Error(message); };
  return res.json();
}
