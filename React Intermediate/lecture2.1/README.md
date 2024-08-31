React Router

We can navigate between components without refreshing the page
Ek hi page par different components load hote hai

1.
<Link to="/support">Support</Link>
By using Link tag we have mapped Home text to support route
<Route path="/support" element={<Support/>}/>

we can do our routing by using Link tag 
instead we will use NavLink tag, it will make attach a active class to the tag

By this way we can get which component is rendered

Basss clicked element ko pehchanne ke liye NavLink use karenge

2.
useNavigate hook

const navigate = useNavigate();

function changeHandler(){
  navigate("/about");
}

<button onClick={changeHandler}>Move to About page</button>

// this function will let you back from where you had came
function backHandler(){
    navigate(-1);
}
