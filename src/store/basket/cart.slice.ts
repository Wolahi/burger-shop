import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BasketCart } from "../products/products.types";

const initialState: BasketCart[] = [];
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, actions: PayloadAction<BasketCart>) => {
      if (state.some((p) => p.id === actions.payload.id)) {
        state.map((p) => {
          if (p.id === actions.payload.id) p.count = p.count + 1;
        });
      } else {
        state.push(actions.payload);
      }
    },
    removeItem: (state, actions: PayloadAction<BasketCart>) => {
      let ok: boolean = true;
      state.map((p) => {
        if (p.id === actions.payload.id && p.count > 1) {
          p.count = p.count - 1;
          ok = false;
        }
      });
      if (ok) {
        return state.filter((p) => p.id !== actions.payload.id);
      }
    },
    deleteAll: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const basketReducer = basketSlice.reducer;
export const basketAction = basketSlice.actions;
