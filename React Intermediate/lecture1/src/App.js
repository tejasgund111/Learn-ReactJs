import { useState } from 'react';
import './App.css';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event) {
  //   // console.log("printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);

  // }

  // function changeLastNameHandler(event) {
  //   // console.log("printing last name")
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: "" });

  // console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target; // destructuring ->> jis bhi element ko click kiya ho... uske liye
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [name] : value
        [name]: type === "checkbox" ? checked : value // this will also handle checkbox value
        // event.target.name:event.target.value 
      }
    });
  }

  // function changeHandler(event) {
  //   const { name, value, checked, type } = event.target; // destructuring ->> jis bhi element ko click kiya ho... uske liye
  //   setFormData(prev=> ({...prev, [name]: type === "checkbox" ? checked : value}))
  // }

  function submitHandler(event){
    event.preventDefault();
    console.log("finally printing the data...")
    console.log(formData);
  }



  return (
    <div className="App">
      <form action="" onSubmit={submitHandler}>

        <input type="text" placeholder='first name' onChange={changeHandler} name='firstName' value={formData.firstName} />

        <br /><br />

        <input type="text" placeholder='last name' onChange={changeHandler} name='lastName' value={formData.lastName} />
        <br /><br />

        <input type="email" name="email" placeholder='Enter Your Email here' onChange={changeHandler} value={formData.email} />
        <br /><br />

        <textarea placeholder='Enter your comments here' onChange={changeHandler} name="comments" value={formData.comments} />
        <br /><br />

        <input type="checkbox" onChange={changeHandler} name='isVisible' id='isVisible' checked={formData.isVisible} />
        <label htmlFor="isVisible">Am I Visible ??</label>
        <br /><br />

        <input type="radio" onChange={changeHandler} name="mode" value="Online-Mode" id='online-mode' checked={formData.mode === "Online-Mode"} />
        <label htmlFor="online-mode">Online Mode</label>

        <input type="radio" onChange={changeHandler} name="mode" value="Offline-Mode" id='offline-mode' checked={formData.mode === "Offline-Mode"} />
        <label htmlFor="offline-mode">Offline Mode</label>
        <br /><br />

        <label htmlFor="favCar">Tell me your fav car</label>
        <select name="favCar" id="favCar" value={formData.favCar} onChange={changeHandler}>
          <option value="">Select</option>
          <option value="Scarpio">Scarpio</option>
          <option value="Fotrtuner">Fotrtuner</option>
          <option value="Legender">Legender</option>
          <option value="Thar">Thar</option>
          <option value="Bolero">Bolero</option>
        </select>

        <br /><br />

        {/* <input type="submit" value="submit" /> */}
        <button>Submit</button>


      </form>
    </div>
  );
}

export default App;
