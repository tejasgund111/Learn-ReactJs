// Topics covered inside this project

1.onClick event 
(a)Inline Arrow Function
The method you provided is an inline arrow function, which is a common way to define event handlers directly within the JSX:

<button onClick={() => removeTour(id)}>
  Remove Tour
</button>

(b)Named Function
You can define a named function outside of the JSX and reference it within the onClick attribute:

function handleRemoveTour() {
  removeTour(id);
}

<button onClick={handleRemoveTour}>
  Remove Tour
</button>



2.Map function
One of the most useful in React is the .map() array method.
The .map() method allows you to run a function on each item in the array, returning a new array as the result.
In React, map() can be used to generate lists.

const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>);
console.log(myList); // ['apple', 'banana', 'orange']



3.Spread operator
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

Example:
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];  // 1 2 3 4 5 6


We can use the spread operator with objects too:

Example
Combine these two objects:
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}



4.Template Literal
The backticks (`${}`) indicate a template literal, which allows embedding expressions inside a string.
The ${} syntax is used to insert the result of the expression directly into the string.

const description = `${info.substring(0, 200)}....`;
This method extracts a portion of the info string, starting at index 0 and ending at index 200 (not inclusive).
This means it takes the first 200 characters from the info string.
If info has less than 200 characters, it will take the entire string.

5.filter method
search filter functionality involves dynamically filtering data displayed in components based on user input. It typically utilizes state management to track search query changes, updating the component’s rendering to display only matching items in real time.




6.List and Keys
In React, you will render lists with some type of loop.
The JavaScript map() array method is generally the preferred method.

keys:
Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
Keys need to be unique to each sibling. But they can be duplicated globally.
Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

7.passing object as prop 

(a)Pass an Object as props to a component in React.js:
Use the spread syntax (...) to pass an object as props to a React component, e.g. <Person {...obj} />.

App.js

function Person({name, age, country}) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{country}</h2>
    </div>
  );
}

export default function App() {
  const obj = {name: 'Alice', age: 29, country: 'Austria'};

  return (
    <div>
      <Person {...obj} />
    </div>
  );
}


(b)Passing an entire object as a prop to a component
If you pass the entire object as a prop, you would have to access the properties on the object in the child component.

App.js

function Person({data}) {
  return (
    <div>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
      <h2>{data.country}</h2>
    </div>
  );
}

export default function App() {
  const obj = {name: 'Alice', age: 29, country: 'Austria'};

  return (
    <div>
      <Person data={obj} />
    </div>
  );
}




8.conditional rendering
Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
