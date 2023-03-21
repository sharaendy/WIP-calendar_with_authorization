import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import CalendarPage from "../pages/CalendarPage/CalendarPage";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RoutesName {
  LOGIN = "/login",
  CALENDAR = "/",
}

export const publicRoutes: IRoute[] = [
  {
    path: RoutesName.LOGIN,
    component: LoginPage,
    exact: true,
  },
];

export const privetRoutes: IRoute[] = [
  {
    path: RoutesName.CALENDAR,
    component: CalendarPage,
    exact: true,
  },
];
