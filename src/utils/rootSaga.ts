import { fork, SimpleEffect } from 'redux-saga/effects';
import { postSagas } from '../redux/saga';

export function* rootSaga(): IterableIterator<SimpleEffect<'FORK'>> {
  yield fork(postSagas);
}
