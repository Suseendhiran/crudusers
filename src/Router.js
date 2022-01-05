import React from "react";
import { Switch, Route } from "react-router-dom";
import UsersList from "./Components/UsersList";
import AddCelebs from "./Components/AddEditCelebs";
import ResetPassword from "./Components/ResetPassword";
import ForgotPassword from "./Components/ForgotPassword";
import LoginScreen from "./Components/LoginScreen";
import SignUpScreen from "./Components/SignUpScreen";
import ProtectedRoute from "./ProtectedRoute";
function Router() {
  return (
    <Switch>
      <ProtectedRoute path="/" exact>
        <LoginScreen />
      </ProtectedRoute>
      <Route path="/forgotpassword">
        <ForgotPassword />
      </Route>
      <Route path="/signup">
        <SignUpScreen />
      </Route>
      <Route path="/resetpassword">
        <ResetPassword />
      </Route>
      <ProtectedRoute path="/celebs" component={UsersList}></ProtectedRoute>
      <ProtectedRoute path="/add-celeb" component={AddCelebs}></ProtectedRoute>
      <ProtectedRoute
        path="/edit-celeb/:id"
        component={AddCelebs}
      ></ProtectedRoute>
      <ProtectedRoute path="*" exact>
        <LoginScreen />
      </ProtectedRoute>
    </Switch>
  );
}

export default Router;
