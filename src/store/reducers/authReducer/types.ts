export enum EAuthActions {
  SET_AUTH = "SET_AUTH",
}

export type TAuthState = {
  isAuth: boolean;
};

type TSetAuth = {
  type: EAuthActions.SET_AUTH;
  payload: boolean;
};

export type TAuthAction = TSetAuth;
