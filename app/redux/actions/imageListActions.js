import {
    IMAGE_LIST_API_CALL,
    IMAGE_LIST_API_CALL_SUCCESS,
    IMAGE_LIST_LOADER,
  } from './types';
  
  export const imageListApi = (data) => {
    console.log("imageListApi")
    return {
      type: IMAGE_LIST_API_CALL,
      payload: data,
    };
  };
  
  export const imageListApiSuccessAction = imageListData => {
    return {
      type: IMAGE_LIST_API_CALL_SUCCESS,
      payload: imageListData,
    };
  };
  
  export const loaderForImageList = loader => {
    return {
      type: IMAGE_LIST_LOADER,
      payload: loader,
    };
  };