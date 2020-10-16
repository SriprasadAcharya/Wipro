/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { put, takeLatest, call } from 'redux-saga/effects';
import { IMAGE_LIST_API_CALL } from '../redux/actions/types';
import {
  imageListApiSuccessAction,
  loaderForImageList,
} from '../redux/actions';
import callAPI from '../utils/remote/api';
import { Request, Types } from '../utils/remote/request';

class ImageListApiRequest extends Request {}

function* imageList(props) {
  console.log("UI")
  try {
    yield put(loaderForImageList(true));
    const imageListRequest = this.getImagelistRequest();
    console.log("imageListRequest", imageListRequest)
    const { response } = yield call(callAPI, imageListRequest);
    console.warn("response", response)
    const responseData = response.data;
    yield put(imageListApiSuccessAction(responseData));
    yield put(loaderForImageList(false));
  } catch (error) {
    yield put(loaderForImageList(false));
  }
}
// eslint-disable-next-line no-undef
getImagelistRequest = () => {
  console.log("getImagelistRequest")
  const imagelistRequest = new ImageListApiRequest();
  imagelistRequest.url = `photos/list`;
  imagelistRequest.type = Types.GET;
  console.log("imageListRequest", imagelistRequest)
  return imagelistRequest;
};

export default function* watchImageListApi() {
  yield takeLatest(IMAGE_LIST_API_CALL, imageList);
}