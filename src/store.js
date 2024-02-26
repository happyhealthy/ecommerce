import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./components/shoppingCart/shoppingCartSlice";
export default configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});
