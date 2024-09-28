import { configureStore } from "@reduxjs/toolkit";
import allSlice from "../reducer/allSlice";

export default configureStore({
  reducer: {
    slice: allSlice,
  },
});
