import { createSlice } from "@reduxjs/toolkit"
import { products } from "../../type/type"
import fetchingProducts from "./async"
type  initialstate = {
    data:products[],
    error:string | undefined,
    status:'idle' | 'loading' | 'loaded' | 'failed'
}
const initialState:initialstate = {
    data:[],
    error:undefined,
    status:'idle'
}
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchingProducts.pending,(state)=>{
            state.status = 'loading'
        })
        builder.addCase(fetchingProducts.fulfilled,(state,action)=>{
            state.status = 'loaded'
            if(action.payload){
                state.data = action.payload
            }
            
        })
        builder.addCase(fetchingProducts.rejected,(state,action)=>{
            state.status = 'failed'
            state.error  = action.error.message
            
        })
    },
})
export default productSlice.reducer