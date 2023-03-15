import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

export type TRootState = ReturnType<typeof store.getState>; // из документации
export type TAppDispatch = typeof store.dispatch; // из документации

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(thunk));
