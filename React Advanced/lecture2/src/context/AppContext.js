import { createContext, useState } from 'react';
import {baseUrl} from '../baseUrl';

// step 1 : creation of context
export const AppContext = createContext(); // creation of context

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data filling

    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
           
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            
        } 
        catch (error) {
            console.log("Failed to fetch");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
            
        }

        setLoading(false);
    }
    
    // if there is a change in function then this function gets called and sets the respective page number
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    // hume jo jo bhi bad me use karna hai woh sab kuch send karna padega naa
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPosts
    };

    // step 2: apply provider
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

