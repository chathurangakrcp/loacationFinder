// third-party
import { configureStore } from "@reduxjs/toolkit";
// project import
// reducers
import locationReducer from "./reducers/location";

const store = configureStore({
  reducer: {
    location: locationReducer
  }
});

export default store;