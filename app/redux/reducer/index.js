import {combineReducers} from 'redux';
import ImageListReducer from './imageListReducer';

export default combineReducers({
  imageListReducer: ImageListReducer,
});
