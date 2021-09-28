import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Sidebar from "./components/sidebar/Sidebar";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import Categories from "./pages/Categories";
import Discount from "./pages/Discount";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="layout">
          <Sidebar />
          <div className="layout-content">
            <Navbar />
            <div className="layout-content-main">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/customers" exact component={Customers} />
                <Route path="/products" exact component={Products} />
                <Route path="/orders" exact component={Orders} />
                <Route path="/analytics" exact component={Analytics} />
                <Route path="/categories" exact component={Categories} />
                <Route path="/discount" exact component={Discount} />
                <Route path="/inventory" exact component={Inventory} />
                <Route path="/settings" exact component={Settings} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
