import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import HomePage from "./pages/HomePage";
import Article from "./pages/Article";
import BlogList from "./pages/BlogList";
import "./assets/css/style.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "nav-open" : ""}>
      <Header open={open} setOpen={setOpen} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/blog">
          <BlogList />
        </Route>
        <Route exact path="/article/:type/:id">
          <Article />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
