import {all, call, takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {coreActions} from '../actionTypes';

export async function fetchUsersData() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return {response};
  } catch (error) {
    return error;
  }
}

export function* fetchUsers() {
  try {
    const {response} = yield call(fetchUsersData);
    yield put({type: coreActions.FETCHED_USERS, data: response.data ?? []});
  } catch (error) {
    console.log('error', error);
  }
}
export default all([takeEvery(coreActions.FETCH_USERS, fetchUsers)]);
