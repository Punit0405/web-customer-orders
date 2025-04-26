import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [] // Each item: { key, name, price, quantity }
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder(state, action) {
      state.items = action.payload;
    },
    clearOrder(state) {
      state.items = [];
    },
  },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
