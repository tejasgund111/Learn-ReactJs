import React from 'react'
import { useNavigate } from 'react-router-dom'

function Support() {
  const navigate = useNavigate();
  
  function backHandler(){
    navigate(-1);
  }

  return (
    <div>
      <div>Support</div>
      <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Support