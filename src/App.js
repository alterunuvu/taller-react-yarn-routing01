import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Homepage } from "./views/Homepage";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Login } from "./views/Login";
import { MovieDetail } from "./views/MovieDetail";
import { Register } from "./views/Register";

function App() {
  const user = "johan.quijano@nuvu.cc";

  return (
    <div className="App">
      <Router>
        <Header />
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/moviedetail/:id">
              <MovieDetail />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/profile">{/* <Profile /> */}</Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
