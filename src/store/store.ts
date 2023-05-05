import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./products/products.api";
import { basketReducer } from "./basket/cart.slice";

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer, basket: basketReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
