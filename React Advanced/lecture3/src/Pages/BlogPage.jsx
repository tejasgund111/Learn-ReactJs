import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../Comonents/Header';
import BlogDetails from '../Comonents/BlogDetails';

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatdBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("url is >> ", newBaseUrl);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
      console.log(data);
      
    }
    catch (err) {
      console.log("Error occurred while fetching blodId");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatdBlogs();
    }

  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>
          Back
        </button>
      </div>
      {
        loading ?
          (<div>
            <p>Loading</p>
          </div>) :
          blog ?
            (<div>
              <BlogDetails post={blog} />
              <h2>Related Blogs</h2>
              {
                relatedblogs.map((post) => (
                  <div key={post.id}>
                    <BlogDetails post={post} />
                  </div>
                ))
              }
            </div>) :
            (<div>
              <p>No Blog found</p>
            </div>)
      }

    </div>
  )
}

export default BlogPage

// here we have done one thing ->
// firstly we fetched out the blog and used the component <BlodDetails/>
// secondly the relatedblogs array is mapped using map function to show all the relatedblogs

// we can say <BlogDetails/> is the template to show a card