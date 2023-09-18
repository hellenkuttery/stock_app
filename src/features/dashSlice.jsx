import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
message:[],
}
const getMessage=createAsyncThunk(
  "getMessageFunc",  //action type name
  async()=>{
    // https://10007.fullstack.clarusway.com/swagger/
    
  }
)

const dashSlice = createSlice({
  name: second,
  initialState,
  reducers: {}
});

export const {} = dashSlice.actions

export default dashSlice.reducer