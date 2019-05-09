import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import NewUserContainer from "./containers/Users/NewUserContainer";
import LoginContainer from "./containers/Login/LoginContainer";
import UsersContainer from "./containers/Users/UsersContainer";
import UserContainer from "./containers/Users/UserContainer";

export default () =>
  <Switch>
  
  { /* Routes User */ }
  <Route path="/users/new" component={NewUserContainer}></Route>
  <Route path="/users/:id/edit" render={props => <UserContainer {...props} id={props.match.params.id}/>}>
  </Route>
  <Route path="/users" component={UsersContainer}></Route>

  { /* Routes Login */ }
  <Route path="/login" component={LoginContainer}></Route>

  { /* Routes Home */ }
  <Route path="/" exact component={Home} />
  
  { /* Finally, catch all unmatched routes */ }
  <Route component={NotFound} />
  </Switch>;