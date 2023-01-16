import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  origin: null,
  destination: null,
  travelTime: null,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTime } = navSlice.actions;

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTime = (state: RootState) => state.nav.travelTime;

export default navSlice.reducer;
