import { createSlice } from "@reduxjs/toolkit";

// {
//   id: 1,
//   name: "iPhone",
//   price: 1000,
//   quantity: 1,
// }

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //check if item already exists
      let targetId = action.payload.id;
      let shoppingCartId = state.items.map((item) => item.id);

      if (shoppingCartId.includes(targetId)) {
        //increment quantity
        state.items = state.items.map((item) => {
          if (item.id === targetId) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        //add new item
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      let targetId = action.payload.id;
      let targetItem = state.items.find((item) => item.id === targetId);

      if (targetItem.quantity > 1) {
        state.items = state.items.map((item) => {
          if (item.id === targetId) {
            item.quantity -= 1;
          }
        });
      } else {
        state.items = state.items.filter((item) => item.id !== targetId);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
