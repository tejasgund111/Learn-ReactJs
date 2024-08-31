Here we are going to learn about "context API "

We want to create a blog website

Context API
We are goint to create the data and will use in the component where we want to use
The Context API is a feature in React that allows you to manage and share global state across components without having to pass props down manually at every level of the component tree. It is particularly useful for managing global data, like user authentication, themes, or application settings.

Points for revision -> 
1.prop drilling
2.lifting up state

if there is not key in the json file then we will pass the index as the key to our map
{post.tags.map((tag, index) => {
                    return <span key={index}>{`#${tag}`}</span>
                  })}


Conditional rendering
{ page > 1 && <button>Previous</button>}