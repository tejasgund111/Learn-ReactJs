import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// we are accessing the api key which is inside the .env file by the help of process.env
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {

  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   // const output = await axios.get(url);
  //   // console.log(output);
  //   // after destructuring for the data
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_image.url;
  //   // console.log(imageSource); 

  //   setGif(imageSource);
  //   setLoading(false);

  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const {gif, loading, fetchData} = useGif(); // our custom hook


  return (
    <div className='w-1/2 bg-green-500 gap-y-5 mt-[15px] rounded-lg border border-black flex flex-col items-center'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold '>A Random Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="450" alt="" />)
      }



      <button className='w-10/12 bg-green-300 text-lg py-2 rounded-lg mb-[20px]' onClick={() => fetchData()}>
        Generate
      </button>

    </div>
  )
}

export default Random