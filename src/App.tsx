import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./page/login";
import Register from "./page/register";
import Main from "./page/main";

function App() {
  return (
      <Router>
          <div>
                <Switch>
                    <Route exact path={"/"} component={Login}/>
                    <Route path={"/register"} component={Register}/>
                    <Route path={"/main"} component={Main}/>
                </Switch>
          </div>
      </Router>

  );
}

export default App;
