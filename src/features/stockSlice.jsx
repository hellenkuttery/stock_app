import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {

    loading: false,
    error: false,
    sales:[],
    purchases:[],
    brands:[],
    firms:[],
    categories:[]
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    }
    ,
    // firmsSuccess:(state,{payload})=>{
    //     state.loading=false;
    //     state.firms=payload
    // },
    // brandsSuccess:(state,{payload})=>{
    //     state.loading=false;
    //     state.brands=payload
    // }, 
    // brandsSuccess:(state,{payload})=>{
    //     state.loading=false;
    //     state.brands=payload
    // }, 
    // payload gelsiğiyerde iismler olduğu içinbu şekilde tek tek yapmak yerine payload içinde gönderirsek olacaktır.
    // Bu şekilde daha moduler ve temiz bir kod olmuş olacak
    getSuccess:(state,{payload:{data,url}})=>{
        state.loading=false;
        state[url]=data
    },
    fetchFail: state=> {
      state.loading = false;
      state.error = true;
    }
},
});

export const {
  fetchStart,
  getSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;




