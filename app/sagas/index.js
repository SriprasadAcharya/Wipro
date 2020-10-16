/* eslint-disable import/named */
import {all} from 'redux-saga/effects';
import watchImageListApi from './imageListSaga';

export default function* rootSaga() {
  yield all([watchImageListApi()]);
}
