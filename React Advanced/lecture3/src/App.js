import React, { useContext, useEffect } from 'react'
import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import CategoryPage from './Pages/CategoryPage'
import TagPage from './Pages/TagPage'
import { AppContext } from './context/AppContext'
import './App.css'
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom'

function App() {

  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1; // ek to page se value leke aana, or bydefault 1 set kr denge
    if (location.pathname.includes("tags")) {
      // iska matlab tag wala page show karna hai
      const tag = location.pathname.split("/").at(-1).replace("-", " "); // it will give the value after the last "/"  -> it will split on the basis of "/"
      fetchBlogPosts(Number(page), tag);
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }
    else { // it will be just a normal call
      fetchBlogPosts(Number(page));
    }

  }, [location.pathname, location.search]);

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>

  )
}

export default App