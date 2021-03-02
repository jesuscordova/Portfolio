import React from "react";
import MainPage from "./components/MainPage.js";
import Blog from "./components/Blog.js";
import Article from "./components/Article.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
        </Switch>
        <Switch>
          <Route path="/Blog" component={Blog} />
        </Switch>
        <Switch>
          <Route path="/Article-1" component={Article} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
