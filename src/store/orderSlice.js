import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // The canonical product schema: { key, name, price, quantity }
  current_order: [], // The current order being edited or created
  last_order: [
    { key: 1, name: 'Apple', price: 30, quantity: 2, category: 'fruits' },
    { key: 4, name: 'Carrot', price: 15, quantity: 1, category: 'vegetables' },
    { key: 6, name: 'Milk', price: 40, quantity: 3, category: 'dairy' },
  ],    // The most recently confirmed order (static demo)
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setCurrentOrder(state, action) {
      state.current_order = action.payload; // array of product objects
    },
    clearCurrentOrder(state) {
      state.current_order = [];
    },
    setLastOrder(state, action) {
      state.last_order = action.payload; // array of product objects
    },
    clearLastOrder(state) {
      state.last_order = [];
    },
  },
});

export const {
  setCurrentOrder,
  clearCurrentOrder,
  setLastOrder,
  clearLastOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
