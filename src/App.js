import React, { Component } from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { HashRouter, Route, Switch } from "react-router-dom"
import Contact from "./components/Contact";
import About from "./components/About";
import PostPage from "./components/PostPage";




export class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/posts/:post_id" component={PostPage}></Route>

          </Switch>


        </div>
      </HashRouter>


    );
  }

}

export default App;
