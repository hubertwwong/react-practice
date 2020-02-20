# Todo

A basic todo app.

Todo.jsx 
1. Contains the smart component.
2. handleXXX are dealing with events.
3. events are passed down using handleXXX prop.
4. Event handling could have been cleaner. In the examples that I have seen, you can use just one handle change event instead of a handle change and handle click. Something to work on.

Other notes
1. Use arrow functions to define the event handlers.
2. Use arrow functions to props. `{() => {props.handleClick(props.data.id)}}`
3. Using a basic flexbox for the CSS styling.
4. Don't add labels to input fields if you are not using them. Makes the styling harder.