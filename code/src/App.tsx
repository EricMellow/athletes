import React from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import {
    Switch,
    Route
} from "react-router-dom";

export default function App() {
    return (
        <div className="trainheroic-code-test">
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
