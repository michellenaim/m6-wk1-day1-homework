import React from "react";
import Home from "./Home";
import InventoryList from "./InventoryList";
import InventoryEdit from "./InventoryEdit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/inventories" exact={true} component={InventoryList} />
        <Route path="/inventories/:id" component={InventoryEdit} />
      </Switch>
    </Router>
  );
}

export default App;
