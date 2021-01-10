import React from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav"
import Profile from "./components/profile/Profile";
import {
    Switch,
    Route
} from "react-router-dom";

export default function App() {
    return (
        <div className="trainheroic-code-test">
            <Nav />
            <Switch>
                <Route path="/athlete/:id">
                    <Profile />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}
