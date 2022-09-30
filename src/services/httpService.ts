import axios, { AxiosResponse } from "axios";
import log from "./logService";

axios.interceptors.response.use(
  (resp: AxiosResponse) => resp,
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      //400 401 402 403 500
      log(error);
      alert(error);
    }

    return Promise.reject(error);
  }
);

const exportObject = {
  get: axios.get,
};

export default exportObject;
