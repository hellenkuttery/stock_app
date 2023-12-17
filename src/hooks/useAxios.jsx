import { useSelector } from 'react-redux';
import axios from 'axios';


const useAxios = () => {
  const {token}=useSelector(state=>state.auth)
  const axiosWithToken = axios.create({
    baseURL: "http://20004.fullstack.clarusway.com",
    headers: {Authorization: `Token ${token}`}
  });
  const axiosWithPublic= axios.create({
    baseURL: "http://20004.fullstack.clarusway.com",
  });



return {axiosWithPublic,axiosWithToken}

}

export default useAxios