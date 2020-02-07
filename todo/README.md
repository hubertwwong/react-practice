# Todo

Just a practice on creating a todo list with the create react app



## Features

1. Keeping it minimal to keep thing obvious.  No CSS.
2. Using the CRA.
3. Add notes by typing in the text field and pressing enter.
4. Able to delete note by pressing 'x'



## Notes - Mostly to self

Need to remember export default on React components.

Use state instead of refs when possible.

https://reactjs.org/docs/forms.html

Use maps for loops.

Dont use keyword. a.k.a. delete instead of something deleteNote

On lists, provide the key prop. 
Otherwise you get a warning.
Its a way for react to tell what to rerender.

Remember if you are passing handlers, use arrow functions.
That way, it matains the 'this' object so it calls the correct thing from the calling class.
Remeber to pass in param arguments. Child components should be dumb.

Something i'm not sure about is that should you use a array or object for list?
Lets say you delete an item of an array.
If you are assiging keys based off array index, the key will refer to different components.
Is that a issue?

