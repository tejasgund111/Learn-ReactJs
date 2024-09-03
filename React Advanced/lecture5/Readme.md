"Shopping Cart Application"

Here in this project we are going to create a shopping cart application , and the concept we are going to use is 'Redux'


check reduce function =>

const numbers = [10, 20, 30, 40];
// Using reduce to sum all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 100



useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

Whenever the 'cart' changes, the 'useEffect' runs, recalculating the total amount of the cart items by summing up their prices and updating the 'totalAmount' state using 'setTotalAmount'.


Summary:
Initial State: [] (an empty array).

After add Action: The state includes the added items, represented as objects within the array.

After remove Action: The state will be an array with all items except the one matching the id passed in the remove action.

Each action (add or remove) updates the state by adding new items to the cart or filtering out items based on the provided criteria, reflecting the current state of the cart in the Redux store.
