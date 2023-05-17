import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    deliveries : [],
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    STORE_DELIVERY:(state, action)=>{
        console.log(action.payload)
        state.deliveries = action.payload.deliveries
    }
  }
});


export const {STORE_DELIVERY} = deliverySlice.actions
export const selectDelivery = (state) => state.delivery.deliveries
export default deliverySlice.reducer