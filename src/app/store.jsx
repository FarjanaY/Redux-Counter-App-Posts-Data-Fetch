//external Imports
import { configureStore } from "@reduxjs/toolkit";

//internal imports
import counterReducer from "../features/counters/countersSlice";
import postReducer from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counterR: counterReducer,
    postR: postReducer,
  },
});

export default store;
