import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  cartReducer,authReducer,wishlistReducer,
});

export default rootReducer;