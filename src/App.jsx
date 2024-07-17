import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
// Remove the unused import
// import CommentForm from "./components/CommentForm";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" component={BlogPost} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
