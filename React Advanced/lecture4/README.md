"Counter Application"

Here in this tutorial we will be learning "Redux" and with the help of that we are going to create a "Counter App"

Redux :
Redux is a JS library for predictable and maintainable global state management.

IMP: firstly go through short documentation of Redux
 
Some steps which have to be done at the start of creating the project, in case of using Redux toolkit
1. slice must have to be created  // slice can be single of multiple
- We create the slice by using createSlice function
- pass this 3 things to that function -> name, initialState, reducer
- We have to export certain things -> 
  1. functions from the action creators
  2. reducers

2. store must have to be creared
- store all the slices
- store created using configureStore method 
- input parameters of configureStore method -> reducer
// ye sab karna hi padega

React components can be linked with the Redux with the providers

Hook to be used for fetching the data from the slice
"useSelector hook"

useDispatch hook -> useDispatch is another hook provided by React Redux, which allows functional components to dispatch actions to the Redux store. 
ex. here in this app it is increment and decrement