import React from 'react'
import Header from '../Comonents/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../Comonents/Pagination';
import Blogs from '../Comonents/Blogs';

function TagPage() {
    const navigation = useNavigate(-1);
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

  return (
    <div>
        <Header/>
        <div>
            <button onClick={()=>navigation(-1)}>
                Back
            </button>
            <h2>
                Blogs Tagges <span>#{tag}</span>
            </h2>
        </div>

        <Blogs />
        <Pagination/>
    </div>
  )
}

export default TagPage