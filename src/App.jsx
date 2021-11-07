import React, { Component } from "react";
import NavBar from "./NavBar";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatch from "./404";

class App extends Component {
    render() {
        return (
            // <React.Fragment>
            // BrowserRouter to navigate between the components
            <BrowserRouter>
                <NavBar />
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/customers" element={<CustomersList />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </div>
            </BrowserRouter>
            // </React.Fragment>
        );
    }
}

export default App;
