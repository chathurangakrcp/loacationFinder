import { createSlice } from "@reduxjs/toolkit";

const initState = {
  mapApiLoaded: false,
  mapInstance: null,
  mapApi: null,
  places: [],
};

const locationSlice = createSlice({
  name: "location",
  initialState: initState,
  reducers: {
    setLocation(state, action) {
      state.places.push(action.payload);
    },
    setMapInstance(state, action){
        state.mapInstance = {...action.payload};
    }
  },
});

export const locationActions = locationSlice.actions;
export default locationSlice.reducer;
