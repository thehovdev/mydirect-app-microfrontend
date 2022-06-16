import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { ICitate, ICitates } from "../interfaces/Citate";
import {act} from "react-dom/test-utils";


// Define the initial state using that type
const initialState : ICitates = {
  items: []
}

export const citateSlice = createSlice({
  name: 'citate',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    populate: (state, action: PayloadAction<[]>) => {
      state.items = action.payload
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    insert: (state, action: PayloadAction<ICitate>) => {
      state.items = [...state.items, action.payload]
    },

    update: (state, action: PayloadAction<ICitate>) => {
      state.items = state.items.map((item) => {
        return item.id === action.payload.id ? action.payload : item
      })
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    }
  },
})

export const { populate, insert, update, remove } = citateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const items = (state: RootState) => state.citate.items

export default citateSlice.reducer