import { EAuthActions, TAuthAction, TAuthState } from "./types";

const initialState: TAuthState = {
  isAuth: true,
};

export const authReducer = (
  state: TAuthState = initialState,
  action: TAuthAction
): TAuthState => {
  switch (action.type) {
    case EAuthActions.SET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
