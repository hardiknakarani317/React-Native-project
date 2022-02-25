import {all} from 'redux-saga/effects';
import core from './core/saga';

export default function* rootSaga() {
  return yield all([core]);
}
