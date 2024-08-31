React form

1. setting the variable values

// setting firstName
const [firstName, setFirstName] = useState("");

 function changeFirstNameHandler(event) {
    setFirstName(event.target.value);
}

// by this way we can change only one variable at a time


// by this way we are changing the firstName as well as lastName
// and we are also maintaining the previous state values

const [formData, setFormData] = useStat({ firstName: "", lastName: "" });

  function changeHandler(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    });
  }

  // the above function is same as -> without writing the return keyword
  fuction changeHandler(event){
    const {name, value} = event.target;
    setFormData(prevData => ({
      ...prevFormData,
      [name] : value
    }));
  }

// in the formData object we are changing the two values firstName and lastName based on name

// here some things are part of syntax, it is as it is -> you have to accept

we've seen how the changeHandler function dynamically updates the formData state as the user interacts with the input fields. By using a single state object and a unified change handler, the component efficiently manages form data, making it more scalable and easier to maintain, especially for forms with numerous fields.

This approach is particularly beneficial in scenarios where you have multiple form inputs and want to handle changes in a consistent and centralized manner, leveraging React's powerful state management capabilities.


2. Controlled components
React’s Controlled Components manage form data via component state, receiving values through props and updating through callbacks like onChange. The parent component maintains the state, passing updated values as props to the controlled component. Form elements, whether typed (e.g., textarea, input) or selected (e.g., radio buttons, checkboxes), trigger state updates through functions on change.

const [name, setName] = useState("");
<input name="name" value={name} onChange={(e) =>setName(e.target.value)} />