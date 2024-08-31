import React, { useContext, useEffect } from 'react'
import Header from './Comonents/Header'
import Blogs from './Comonents/Blogs'
import Pagination from './Comonents/Pagination'
import { AppContext } from './context/AppContext'
import './App.css'

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=> {
    fetchBlogPosts();
  },[]);

  return (
    <div className='w-full h-full flex flex-col gap-y-8 items-center bg-gray-50'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App