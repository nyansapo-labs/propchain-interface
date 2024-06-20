import { combineReducers } from "redux";
import { PropchainApi } from "./PropchainAbi";
import { AuthSlice } from "./AuthSlice";

export default combineReducers({
  authReducer: AuthSlice.reducer,
  [PropchainApi.reducerPath]: PropchainApi.reducer,
});
