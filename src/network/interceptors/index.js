import { checkToken, getToken } from "utils/commonservices/localstorageservices"
import { logoutService } from "network/services/auth.service";

export const requestHandler = (request) => {
  if (checkToken) {
    const authToken = getToken();
    request.headers.Authorization = `Bearer ${authToken}`
  }
  console.log(request);
  return request
}

export const responseHandler = (response) => {
  console.log(response);
  return response;
}

export const errorHandler = (error) => {
  console.log(error);
  if (error.response.status === 404) {
    logoutService()
    return Promise.reject(error.response.data.errors)
  } else if (error.response.status === 500) {
    return Promise.reject(error.response.data.errors)
  }
  return Promise.reject(error.response.data.errors)
}