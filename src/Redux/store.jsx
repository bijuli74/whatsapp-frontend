import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
<<<<<<< HEAD
import { thunk } from "redux-thunk"; // Change this line to use named import
=======
import thunk from "redux-thunk";
>>>>>>> 652d065df4447d9a0fca87d826efb6162c65dc2d
import { authReducer } from "./Auth/Reducer";
import { chatReducer } from "./Chat/Reducer";
import { messageReducer } from "./Message/Reducer";

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  auth: authReducer, // Authentication related state
  chat: chatReducer, // Chat related state
  message: messageReducer, // Message related state
});

// Create the Redux store with the rootReducer and apply middleware (thunk in this case)
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
