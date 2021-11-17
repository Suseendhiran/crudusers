import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import UsersList from "./Components/UsersList";
import AddCelebs from "./Components/AddEditCelebs";

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <UsersList />
      </Route>
      <Route path="/add-celeb">
        <AddCelebs />
      </Route>
      <Route path="/edit-celeb/:id">
        <AddCelebs />
      </Route>
    </Switch>
  );
}

export default Router;
