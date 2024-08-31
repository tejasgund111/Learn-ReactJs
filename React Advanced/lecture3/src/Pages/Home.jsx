import React from 'react'
import Header from '../Comonents/Header'
import Blogs from '../Comonents/Blogs'
import Pagination from '../Comonents/Pagination'

function Home() {
    return (
        <div>
            <Header />
            <div>
                <Blogs />
                <Pagination />
            </div>
        </div>
    )
}

export default Home