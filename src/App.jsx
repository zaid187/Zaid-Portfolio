import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import BlogList from "./components/BlogList";
import AddBlogPost from "./components/AddBlogPost";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/add-blog" element={<AddBlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
