import React from 'react'
import { useNavigate } from 'react-router-dom'

function Labs() {
  const navigate = useNavigate();

  function changeHandler(){
    navigate("/about");
  }
  return (
    <div>
      <div>Labs</div>
      <button onClick={changeHandler}>Move to About page</button>
    </div>
  )
}

export default Labs