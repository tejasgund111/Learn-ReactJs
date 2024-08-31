Top courses

1. useEffect :

 const [text, setText] = useState("");
 
  variation 1 -> will run on every render
  useEffect(() => {
    console.log("renderrrr");
  });

  variation 2 -> will run on first render
  useEffect(() => {
    console.log("UI rendered");

  }, []);

  variation 3 -> on first render  + whenever dependency change
  useEffect(() => {
    console.log("UI rendered");
  }, [text]);

  variation 4 -> 
  useEffect(() => {
    console.log("listener added") // this will be executed secondly

    return (() =>
      console.log("listener removed"));  // this will be executed first
  },[text]);

  function changeHandler(event) {
    setText(event.target.value)
    console.log(text);

  }


2. Toasts
npm i react-toastify // for install

3. async function
converting data object to json

async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output
      setCourses(output);
    }
    catch (error) {
      toast.error("Network me koi dikkat haiii");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


4. 
    // the data is present in the form of key value pairs
    // we want that in the form of arrays
    // this getCourses function is giving us all the data in the array format
    let allCourses = [];
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course)
            })
        })
        return allCourses;
    }


5. Previous state 

