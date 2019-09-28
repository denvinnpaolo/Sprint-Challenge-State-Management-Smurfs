1. What problem does the context API help solve?
The context API solves the problem of prop drilling.
It makes the data sent from props easier to access from app level to children components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
-actions is how the state will be manipulated that is described by the type and the data is going to be in the payload.
-reducers is where the initialState is declared/returned and where it will be manipulated.
-store is the holder of the state tree. this will have the data that will be used through out the redux application.(it is known to be the single source of truth because store is the state data throughout the whole component)

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
-Application state is the main state for the whole appliction that usually affects most if not all the hooked components. Component state in the other hand is only used within the components and possibly its children. Application state is good to use when the data is needed globally through the app.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk is a function that returns a function. it helps manipulate the action before it is sent to the state.
it changes the action by either changing it, not sending it, sending it, and sending multiple actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux is complicated but has a wide library so it's more versatile.
