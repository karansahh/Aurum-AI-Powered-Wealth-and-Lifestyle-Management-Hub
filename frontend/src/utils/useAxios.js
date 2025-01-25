<<<<<<< HEAD
=======
// import axios from "axios";
// import { jwtDecode } from 'jwt-decode';
// import dayjs from "dayjs";
// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";

// const baseURL = "http://127.0.0.1:8000/api";

// const useAxios = () => {
//   const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

//   const axiosInstance = axios.create({
//     baseURL,
//     headers: { Authorization: `Bearer ${authTokens?.access}` }
//   }).access;

//   axiosInstance.interceptors.request.use(async req => {
//     const user = jwtDecode(authTokens.access);  // Changed jwt_decode to jwtDecode
//     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

//     if (!isExpired) return req;

//     const response = await axios.post(`${baseURL}/token/refresh/`, {
//       refresh: authTokens.refresh
//     });
  
//     localStorage.setItem("authToken", JSON.stringify(response.data));
//     // localStorage.setItem("authToken", JSON.stringify(response.data));

//     setAuthTokens(response.data);
//     setUser(jwtDecode(response.data.access));  // Changed jwt_decode to jwtDecode

//     req.headers.Authorization = `Bearer ${response.data.access}`;
//     return req;
//   });

//   return axiosInstance;
// };

// export default useAxios;

>>>>>>> dc8dbc3b3ec5d40300f8da375ee8437dc70ceee1
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const baseURL = "http://127.0.0.1:8000/api";

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` }
  });

  axiosInstance.interceptors.request.use(async req => {
<<<<<<< HEAD
    const user = jwtDecode(authTokens.access);  
=======
    const user = jwtDecode(authTokens.access);  // Changed jwt_decode to jwtDecode
>>>>>>> dc8dbc3b3ec5d40300f8da375ee8437dc70ceee1
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.post(`${baseURL}/token/refresh/`, {
      refresh: authTokens.refresh
    });
  
    localStorage.setItem("authToken", JSON.stringify(response.data));

    setAuthTokens(response.data);
<<<<<<< HEAD
    setUser(jwtDecode(response.data.access));  
=======
    setUser(jwtDecode(response.data.access));  // Changed jwt_decode to jwtDecode
>>>>>>> dc8dbc3b3ec5d40300f8da375ee8437dc70ceee1

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;
