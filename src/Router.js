import React from "react";
import { Switch } from "react-router-dom";
import UsersList from "./Components/UsersList";
import AddCelebs from "./Components/AddEditCelebs";
import LoginScreen from "./Components/LoginScreen";
import SignUpScreen from "./Components/SignUpScreen";
import ProtectedRoute from "./ProtectedRoute";
function Router() {
  return (
    <Switch>
      <ProtectedRoute path="/" exact>
        <LoginScreen />
      </ProtectedRoute>

      <ProtectedRoute path="/signup">
        <SignUpScreen />
      </ProtectedRoute>
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
