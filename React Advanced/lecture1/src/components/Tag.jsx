import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// we are accessing the api key which is inside the .env file by the help of process.env
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {

  const [tag, setTag] = useState('');

  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-500 gap-y-5 mt-[15px] rounded-lg border border-black flex flex-col items-center'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold '>Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="450" alt="" />)
      }

      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(e) => setTag(e.target.value)}
        type="text"
        value={tag} />

      <button className='w-10/12 bg-blue-300 text-lg py-2 rounded-lg mb-[20px]' onClick={()=> fetchData(tag)}>
        Generate
      </button>

    </div>
  )
}

export default Tag