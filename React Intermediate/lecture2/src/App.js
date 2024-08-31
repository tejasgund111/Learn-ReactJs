import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form submitted:", formData);
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
      <form className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full transition-transform transform hover:scale-105 hover:shadow-2xl duration-300" 
      onSubmit={submitHandler}>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">User Information</h2>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Love"
              value={formData.firstName}
              onChange={changeHandler}
              className="w-full p-2 mt-2 border rounded-lg focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Babbar"
              value={formData.lastName}
              onChange={changeHandler}
              className="w-full p-2 mt-2 border rounded-lg focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="love@abcd.com"
              value={formData.email}
              onChange={changeHandler}
              className="w-full p-2 mt-2 border rounded-lg focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-gray-700 font-semibold">Country</label>
            <select
              name="country"
              value={formData.country}
              id="country"
              onChange={changeHandler}
              className="w-full p-2 mt-2 border rounded-lg focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
            >
              <option>India</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>

          <div>
            <label htmlFor="streetAddress" className="block text-gray-700 font-semibold">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              placeholder="B-25C"
              value={formData.streetAddress}
              onChange={changeHandler}
              className="w-full p-2 mt-2 border rounded-lg focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-gray-700 font-semibold">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Pune"
              value={formData.city}
              onChange={changeHandler}
              className="w-full p-2 mt-2 border rounded-lg focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
            />
          </div>

          <div>
            <label htmlFor="state" className="block text-gray-700 font-semibold">State / Province</label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Maharashtra"
              value={formData.state}
              onChange={changeHandler}
              className="w-full p-2 mt-2 border rounded-lg focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block text-gray-700 font-semibold">ZIP / Postal Code</label>
            <input
              type="number"
              name="postalCode"
              id="postalCode"
              placeholder="411043"
              value={formData.postalCode}
              onChange={changeHandler}
              className="w-full p-2 mt-2 border rounded-lg focus:ring-4 focus:ring-blue-400 transition-shadow duration-300"
            />
          </div>
        </div>

        <fieldset className="mb-6 mt-6">
          <legend className="text-lg font-semibold text-gray-700">By Email</legend>

          <div className="flex items-start mt-4">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="mt-1 h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
            />
            <div className="ml-2">
              <label htmlFor="comments" className="text-gray-700">Comments</label>
              <p className="text-gray-500 text-sm">Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex items-start mt-4">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mt-1 h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
            />
            <div className="ml-2">
              <label htmlFor="candidates" className="text-gray-700">Candidates</label>
              <p className="text-gray-500 text-sm">Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex items-start mt-4">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
              className="mt-1 h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
            />
            <div className="ml-2">
              <label htmlFor="offers" className="text-gray-700">Offers</label>
              <p className="text-gray-500 text-sm">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="mb-6">
          <legend className="text-lg font-semibold text-gray-700">Push Notifications</legend>
          <p className="text-gray-500 text-sm mb-4">These are delivered via SMS to your mobile phone.</p>

          <div className="flex items-center mb-2">
            <input 
              type="radio" 
              id="pushEverything"
              name="pushNotifications" 
              value="Everything"
              onChange={changeHandler} 
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="pushEverything" className="text-gray-700">Everything</label>
          </div>

          <div className="flex items-center mb-2">
            <input 
              type="radio" 
              id="pushEmail"
              name="pushNotifications" 
              value="Same as email"
              onChange={changeHandler} 
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="pushEmail" className="text-gray-700">Same as email</label>
          </div>

          <div className="flex items-center mb-2">
            <input 
              type="radio" 
              id="pushNothing"
              name="pushNotifications" 
              value="No Push Notifications"
              onChange={changeHandler} 
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="pushNothing" className="text-gray-700">No Push Notifications</label>
          </div>
        </fieldset>

        <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400">Save</button>
      </form>
    </div>
  );
}

export default App;
