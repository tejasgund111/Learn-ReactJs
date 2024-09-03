import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
         },
        remove: (state, action) => {
            // it will return a new state 
            return state.filter((item) => item.id !== action.payload);
            // is state ke andar wo items store hogi, jo input parameter me jo id aayi hai uske equal na ho
         }
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;


/*

Summary:
Initial State: [] (an empty array).

After add Action: The state includes the added items, represented as objects within the array.

After remove Action: The state will be an array with all items except the one matching the id passed in the remove action.

Each action (add or remove) updates the state by adding new items to the cart or filtering out items based on the provided criteria, reflecting the current state of the cart in the Redux store.

*/