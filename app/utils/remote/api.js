/* eslint-disable func-names */
/* eslint-disable no-undef */
import axios from 'axios';
import { Types } from './request';

// const instance = axios.create({ baseURL: '' });

export default callAPI = async request => {

  axios.get('https://picsum.photos/list')
  .then(function (response) {
    console.log(response);
    return response
  })
  .catch(function (error) {
    console.log(error);
  });


  // console.log("callAPI", callAPI)
  // // instance.defaults.timeout = 2000;
  // instance.defaults.headers.post['Content-Type'] = 'application/json';
  // instance.defaults.headers.get['Content-Type'] = 'application/json';
  // let axiosRequest;
  // const { type, url } = request;

  // if (type === Types.GET) {
  //   axiosRequest = instance.get(url);
  // }

  // return axiosRequest
  //   .then(response => console.log("response", response), ({ response }))
  //   .catch(function(error) {
  //     if (error.response) {
  //       console.log(TAG, `status: ${error.response.status}`);
  //     } 
  //   });
};