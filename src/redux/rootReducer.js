import { combineReducers } from "redux";
import userReducer from "./reducers/auth_reducer";
import contactReducer from "./reducers/contact_reducer";


const rootReducer = combineReducers({
    user: userReducer,
    data: contactReducer
});

export default rootReducer;