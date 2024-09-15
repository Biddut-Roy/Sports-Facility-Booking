import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type Product = {
  _id: string;
  category: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  image: string;
};

interface StoreState {
  user: Product[];
  checkout: Product | null;
}

const initialState: StoreState = {
  user: [],
  checkout: null,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Product>) => {
      state.user.push(action.payload);
    },
    clearUser: (state) => {
      state.user = [];
    },
  },
});

export const { addUser, clearUser } = storeSlice.actions;

export default storeSlice.reducer;

export const currentUser = (state: RootState) => state.store.user;
