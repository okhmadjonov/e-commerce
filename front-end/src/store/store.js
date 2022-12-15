import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "./productsSlice";
import { productsApi } from "./productsApi";
import cartReducer, { getTotals } from "./cartSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotals());
