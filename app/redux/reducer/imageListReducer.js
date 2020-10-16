import {
    IMAGE_LIST_API_CALL_SUCCESS,
    IMAGE_LIST_LOADER,
  } from '../actions/types';
  
  const initialState = {
    imageListArray: [],
    loader: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case IMAGE_LIST_API_CALL_SUCCESS:
        return {
          ...state,
          imageListArray: [...state.imageListArray, ...action.payload.data],
        };
      case IMAGE_LIST_LOADER:
        return {
          ...state,
          loader: action.payload,
        };
      default:
        return state;
    }
  };