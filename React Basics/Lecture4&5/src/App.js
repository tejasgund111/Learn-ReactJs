import React, { useEffect, useState } from 'react'
import Filter from "./Components/Filter"
import Cards from './Components/Cards'
import Navbar from './Components/Navbar'
import { apiUrl, filterData } from './data';
import Spinner from './Components/Spinner';
import { toast } from 'react-toastify'

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Network me koi dikkat haiii");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="min-h-screen flex flex-col bg-slate-600">
      <div>
        <Navbar />
      </div>

      <div className='bg-slate-600 '>

        <div>
          <Filter category={category} setCategory={setCategory} filterData={filterData} />
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          }
          {/* if loading is true then show spinner and if the data is fully fetched then show cards  */}
        </div>

      </div>

    </div>
  )
}

export default App