import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axios";
import { products } from "../../type/type";
import { useParams } from "react-router-dom";
const fetchingProduct = createAsyncThunk( 'products/fetchingProduct',async (_,thunkAPI)=>{
 const {productId} = useParams()
    try {
        const res =await api.get<products[]>(`/products/${productId}` )
        return res.data
    } catch (error) {
    if(error instanceof Error){
            thunkAPI.rejectWithValue('FAILED')
        }else if(typeof error === 'string'){
            thunkAPI.rejectWithValue('fialed')
        }else{
            thunkAPI.rejectWithValue('error')
        }
    }
    //npx json-server db.json
})
export default fetchingProduct