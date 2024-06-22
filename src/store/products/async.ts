import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axios";
import { products } from "../../type/type";

const fetchingProducts = createAsyncThunk( 'products/fetchingProducts',async (_,thunkAPI)=>{

    try {
        const res =await api.get<products[]>('/products')
        return res.data
        
    } catch (error) {
    if(error instanceof Error){
            thunkAPI.rejectWithValue('FAILED')
        }else if(typeof error === 'string'){
            thunkAPI.rejectWithValue('FAILED')
        }else{
            thunkAPI.rejectWithValue('error')
        }
    }
    //npx json-server db.json
})
export default fetchingProducts