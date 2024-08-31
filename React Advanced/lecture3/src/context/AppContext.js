import { createContext, useState } from 'react';
import { baseUrl } from '../baseUrl';
import { useNavigate } from 'react-router-dom';

// step 1 : creation of context
export const AppContext = createContext(); // creation of context

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    // data filling

    async function fetchBlogPosts(page = 1, tag = null, category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
            category += `&category=${category}`;
        }

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

    function handlePageChange(page) {
        navigate({ search: `?page=${page}`});
        setPage(page);
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

