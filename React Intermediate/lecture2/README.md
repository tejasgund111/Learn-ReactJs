Creation of User Registration Form
// created perfect form use and refer it for further projects

1.setting the values of the object

const [formData, setFormData] = useState({
    firstName: ""
  });

function changeHandler(event) {
    const { name, value } = event.target;
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    });
  }

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }
  
  // both the functions performs the same work


2.