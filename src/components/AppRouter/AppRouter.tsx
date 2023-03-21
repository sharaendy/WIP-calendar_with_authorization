import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privetRoutes, publicRoutes, RoutesName } from "../../router";
import { UseTypedSelector } from "../../hooks/useTypedSelector";

const authorizedUser = (
  <Switch>
    {privetRoutes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
    <Redirect to={RoutesName.CALENDAR} />
  </Switch>
);

const notAuthorizedUser = (
  <Switch>
    {publicRoutes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
    <Redirect to={RoutesName.LOGIN} />
  </Switch>
);

const AppRouter = () => {
  const isUserAuthorized = UseTypedSelector(
    (state) => state.authReducer.isAuth
  );
  return isUserAuthorized ? authorizedUser : notAuthorizedUser;
};

export default AppRouter;
