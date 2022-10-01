import axios, { AxiosError, AxiosResponse } from "axios";
import log from "./logService";

axios.interceptors.response.use(
  (resp: AxiosResponse) => resp,
  (error: AxiosError) => {
    alertErrorMessage(error);
  }
);

const alertErrorMessage = (error: AxiosError) => {
  let errorMessage = "";

  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    errorMessage = "An unexpected error occurred.";

    log(error);
    alert(errorMessage);
    return Promise.reject(error);
  }

  switch (error.response?.status) {
    case 400:
      errorMessage = "The server cannot or will not process the request.";
      break;

    case 401:
      errorMessage =
        "The client must authenticate itself to get the requested response.";
      break;

    case 402:
      errorMessage = "Need Payment.";
      break;

    case 403:
      errorMessage = "The client does not have access rights to the content.";
      break;

    case 404:
      errorMessage = "The server can not find the requested resource.";
      break;

    case 500:
      errorMessage =
        "The server has encountered a situation it does not know how to handle.";
      break;

    default:
      errorMessage = "Process error.";
  }

  log(error);
  alert(errorMessage);
  return Promise.reject(error);
};

const exportObject = {
  get: axios.get,
};

export default exportObject;
