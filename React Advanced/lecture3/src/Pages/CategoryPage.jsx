import React from 'react'
import Header from '../Comonents/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../Comonents/Blogs';
import Pagination from '../Comonents/Pagination';

function CategoryPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header />
            <div>
                <button
                    onClick={() => navigation(-1)}>
                    Back
                </button>
                <h2>Blogs on <span>{category}</span></h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    )
}

export default CategoryPage