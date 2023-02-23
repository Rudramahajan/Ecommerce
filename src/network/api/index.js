import axios from "axios";
import { requestHandler,responseHandler,errorHandler} from "network/interceptors";
import { BASE_URL } from "utils/constants";



const axiosInstance = axios.create({
  baseURL : BASE_URL
})

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
)

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
)

export default axiosInstance;