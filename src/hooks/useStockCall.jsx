import { useDispatch, useSelector } from 'react-redux';
import { fetchStart, getSuccess, fetchFail } from '../features/stockSlice';
import axios from 'axios';
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

    const useStockCall = () => {
        const dispatch = useDispatch();
        const { token } = useSelector(state => state.auth);
        const BASE_URL = process.env.REACT_APP_BASE_URL;

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
              const { data } = await axios(`${BASE_URL}/stock/${url}/`, {
                headers: {
                  Authorization: `Token ${token}`, // 'Token' yerine `${token}` kullanılmalı
                },
              });
        
              dispatch(getSuccess({ data, url })); // 'dispatch' kullanımı düzeltilmiş
        
            } catch (error) {
              dispatch(fetchFail());
            }
          };
          const deleteStockData= async (url,id) => {
            dispatch(fetchStart()); // 'dispatch' doğru şekilde kullanılmış
        
            try { 
              // delete işlemi olduğu için getSuccesdeki gibi bir response dönmeyecek
          await axios(`${BASE_URL}/stock/${url}/${id}`, {
                headers: {
                  Authorization: `Token ${token}`, // 'Token' yerine `${token}` kullanılmalı
                },
              });
        
              // data yok payload yok o nedenle dispatcch yayınlamamamız gerekmiyor
              // Sadece bilgiyi güncelleme yapmak gerekiyor
              getStockData(url)
              console.log("deleted")
              toastSuccessNotify("Bilgi silindi")
            } catch (error) {
              dispatch(fetchFail());
            }
          };
      
        return { getStockData,deleteStockData};
      };
  


export default useStockCall