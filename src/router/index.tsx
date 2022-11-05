import React from "react";
import { Switch, Route } from "react-router-dom";
import { ApplicationRouter } from "./base/approuter";
import { Home, Products } from "../views";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "rc-footer/assets/index.css";

import FieldContext from "../core/context/FieldContext";

interface ICalc {
  Component: React.ComponentType;
  exact?: any;
  path?: any;
}

const RouteWithLoad: React.FC<ICalc> = ({ Component, ...rest }) => {
  return <Route {...rest} render={(props: any) => <Component {...props} />} />;
};

export default function App() {
  return (
    <Switch>
      <FieldContext>
        {/* toast container standard implementation */}
        <RouteWithLoad
          exact
          path={ApplicationRouter.home.path}
          Component={Home}
        />
        <RouteWithLoad
          exact
          path={ApplicationRouter.products.path}
          Component={Products}
        />
      </FieldContext>
    </Switch>
  );
}
