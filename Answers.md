1. What problem does the context API help solve?
Context solves several problems, prop drilling also make it easier accessing global variables. 
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are packets of information that are sent to our reducers.

Reducers are used to update state.

The Store is where your state lives. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state for your entire Application.  Compontent state would be use for Forms or components that only need/use there own state. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk makes Redux asyc, it's no longer single threaded. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
useState, but Redux is pretty great. 
