# Completing the Counter Application

> The actual application contains increment and decrement buttons to update the counter

- The boilerplate folder contains the initial setup for a counter application built with React.
- The task is to complete the application by implementing the missing functionality related to the React Context API.

## Follow these steps to successfully complete the application
1. Initialize the `initialState` with an appropriate object.
2. Complete the `counterReducer` function to handle different actions (increment and decrement) that can modify the state of the counter.
3. Implement Context in Components:
    - Update all the import statements in components/*
    - Use the Context API to get access to the `dispatch` function.
    - Implement the `handleIncrement` and `handleDecrement` functions to update the `count` using the `dispatch` function.

## Run and Test
Run the application using 
```bash
npm start
```

Run Cypress tests using 
```bash
npx cypress open
```
Write Cypress test cases in [File](cypress/e2e/counter.cy.js).