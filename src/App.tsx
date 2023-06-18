import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./page/login";
import Register from "./page/register";
import Main from "./page/main";
import routes from "./routes/index";

function App() {
  return (
      <Router>
          <div>
                <Switch>
                    <Route exact path={routes.LOGIN} component={Login}/>
                    <Route path={routes.REGISTER} component={Register}/>
                    <Route path={routes.MAIN} component={Main}/>
                </Switch>
          </div>
      </Router>
  );
}

export default App;
