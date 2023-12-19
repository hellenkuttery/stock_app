import { useDispatch, useSelector } from 'react-redux';
import { fetchStart, getSuccess, fetchFail } from '../features/stockSlice';
import axios from 'axios';
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from './useAxios';

    const useStockCall = () => {
        const dispatch = useDispatch();
        const { token } = useSelector(state => state.auth);
        const BASE_URL = process.env.REACT_APP_BASE_URL;
        const {axiosWithToken}=useAxios()

        // const getFirms = async () => {
        //     dispatch(fetchStart()); // 'dispatch' doğru şekilde kullanılmış
        
        //     try {
        //       const { data } = await axios(`${BASE_URL}stock/firms/`, {
        //         headers: {
        //           Authorization: `Token ${token}`, // 'Token' yerine `${token}` kullanılmalı
        //         },
        //       });
        
        //       console.log(data);
        //       dispatch(getSuccess({ data, url: 'firms' })); // 'dispatch' kullanımı düzeltilmiş
        
        //     } catch (error) {
        //       dispatch(fetchFail());
        //     }
        //   };
        
        // const getBrands = async () => {
        //     dispatch(fetchStart()); // 'dispatch' doğru şekilde kullanılmış
        
        //     try {
        //       const { data } = await axios(`${BASE_URL}stock/brands/`, {
        //         headers: {
        //           Authorization: `Token ${token}`, // 'Token' yerine `${token}` kullanılmalı
        //         },
        //       });
        
        //       console.log(data);
        //       dispatch(getSuccess({ data, url: 'brands' })); // 'dispatch' kullanımı düzeltilmiş
        
        //     } catch (error) {
        //       dispatch(fetchFail());
        //     }
        //   };

          // getStockData olarak tek bir fonksiyon yazıyoruz ki bu şekilde her ortandam sadece veri endpoint göndererek işlem
          const getStockData= async (url) => {
            dispatch(fetchStart()); // 'dispatch' doğru şekilde kullanılmış
        
            try {
              // const { data } = await axios(`${BASE_URL}/stock/${url}/`, {
              //   headers: {
              //     Authorization: `Token ${token}`, // 'Token' yerine `${token}` kullanılmalı
              //   },
              // });
              // Yukarıdaki yerine useAxiosWithToken ile yapabiliyoruz
              const {data}=await axiosWithToken(`stock/${url}`)
              
              dispatch(getSuccess({ data, url })); // 'dispatch' kullanımı düzeltilmiş
        
            } catch (error) {
              dispatch(fetchFail());
            }
          };
          const deleteStockData= async (url,id) => {
            dispatch(fetchStart()); // 'dispatch' doğru şekilde kullanılmış
        
            try { 
              // delete işlemi olduğu için getSuccesdeki gibi bir response dönmeyecek
          // await axios.delete(`${BASE_URL}/stock/${url}/${id}`, {
          //       headers: {
          //         Authorization: `Token ${token}`, // 'Token' yerine `${token}` kullanılmalı
          //       },
          //     });
              
              // data yok payload yok o nedenle dispatcch yayınlamamamız gerekmiyor
              // Sadece bilgiyi güncelleme yapmak gerekiyor

              await axiosWithToken.delete(`${url}/${id}`)
              getStockData(url)
              console.log("deleted")
              toastSuccessNotify("Bilgi silindi")
            } catch (error) {
              dispatch(fetchFail());
            }
          };

          const postStockData = async (url, info) => {
            dispatch(fetchStart());
            try {
              await axiosWithToken.post(`${url}/`, info);
        
              getStockData(url);
              toastSuccessNotify(`${url} successfuly created!`);
            } catch (error) {
              dispatch(fetchFail());
              console.log(error)
              toastErrorNotify(error.response.data.message);
            }
          };
        
          const putStockData = async (url, info) => {
            dispatch(fetchStart());
            try {
              await axiosWithToken.put(`${url}/${info.id}/`, info);
        
              getStockData(url);
              toastSuccessNotify(`${url} successfuly updated!`);
            } catch (error) {
              dispatch(fetchFail());
              toastErrorNotify(error.response.data.message);
            }
          };


      
        return { getStockData,deleteStockData,postStockData,putStockData};
      };
  


export default useStockCall