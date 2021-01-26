import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import WrappedLayout from "./helpers/wrappedLayout";
import BillingOverview from "./pages/BillingOverview";
import FundAccountPage from "./pages/FundAccount";
import FundsAdded from "./pages/FundsAdded";
import AddPaymentMethodPage from "./pages/AddPaymentMethod";

export default () => {
  const wrapWithLayout = (component) => {
    return <WrappedLayout>{component}</WrappedLayout>;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" key={"Route-Main"}>
          {wrapWithLayout(<BillingOverview />)}
        </Route>
        <Route exact path="/home" key={"Route-Main"}>
          {wrapWithLayout(<BillingOverview />)}
        </Route>
        <Route exact path="/add-funds" key={"Route-Add-Funds"}>
          {wrapWithLayout(<FundAccountPage />)}
        </Route>
        <Route exact path="/funds-added" key={"Route-Funds-Added"}>
          {wrapWithLayout(<FundsAdded />)}
        </Route>
        <Route
          exact
          path="/add-payment-method"
          key={"Route-Add-Payment-Method"}
        >
          {wrapWithLayout(<AddPaymentMethodPage />)}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
