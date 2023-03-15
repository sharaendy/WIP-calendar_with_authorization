import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privetRoutes, publicRoutes, RoutesName } from "../router";

const AppRouter = () => {
  const isAuthorized = true;

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

  return isAuthorized ? authorizedUser : notAuthorizedUser;
};

export default AppRouter;
