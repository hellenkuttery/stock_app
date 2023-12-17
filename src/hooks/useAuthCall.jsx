import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess,registerSuccess,logoutSuccess} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);

  const register = async userInfo => {
    const BASE_URL = "https://20004.fullstack.clarusway.com/account/";
    // // https://10004.fullstack.clarusway.com/documents/swagger/
    // Django ile olanda
    // https://20004.fullstack.clarusway.com/account/register/
    // http://20004.fullstack.clarusway.com/account/auth/login/

    dispatch(fetchStart());
    // navigate("/stock");

    try {
      const { data } = await axios.post(`${BASE_URL}register/`,userInfo);
      console.log(data);
      dispatch(registerSuccess(data));
      navigate("stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const login = async (userInfo) => {
    const BASE_URL = "https://20004.fullstack.clarusway.com/account/";
    // https://10004.fullstack.clarusway.com/documents/swagger/
    // Django ile olanda
    // https://20004.fullstack.clarusway.com/account/register/
    // http://20004.fullstack.clarusway.com/account/auth/login/

    dispatch(fetchStart());
    // navigate("/stock");

    try {
      const { data } = await axios.post(
        `${BASE_URL}auth/login/`,
        userInfo
      );
      console.log(data);
      dispatch(loginSuccess(data));
      navigate("stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  
  const logout = async () => {
    const BASE_URL = process.env.REA
    dispatch(fetchStart());
    try {
      // let headers = {
      //   Authorization: `Token ${token}`,
      // };
      await axios.post(`${BASE_URL}account/auth/logout/`, null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });// post isteği atılırken axios ikinci parametreyi body olarak kabul eder. O nedenle eğer body bilgisi yoksa ikinci parametreye null veya boş obje tanımlanabilir. 3.parametre de headers verileri gönderilir.
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
    }
  };


  return { login,register,logout};
};

export default useAuthCall;
