# freecodecamp

A place to practice the free code camp video assigment.


## Unsorted notes

#### Smart vs dumb components

1. Smart ones have state.
2. Dumb ones don't.
3. Dumb components should be functional.
4. One easy way to pass state from smart to dumb is to pass the whole thing down as a data prop.


```
<smart data={props.state}/>
```

```
<dumb>
  {props.data}
</dumb>
```

#### Forms

TextArea in react is like text field input.
1. Single vs. Double tag. `<textarea name="blah" />`

checkbox
1. has a check property.
2. You want to set state to the checked property.
3. This is the thing you have to do.

Values need onChange property.
1. You want one handle change method for all form fields.

You can pull the type of the form.
`event.target.type`

radios
1. have a list of checkbox. 

select box
1. Use the value property to figure what is chosen.

Formik...
1. react tool for better forms.

Submitting form
1. Multiple ways.
2. `<input type="submit">`
3. Buttons in form tags are considered submit. You can add the handler either on the button on the form tag
4. Preference on the form tag. 


#### State

1. class base component required.
2. Can be modified.
3. Tied to the react component.
4. Mutable.
5. Set it by `this.state` in the constructor;
6. Can be managed by other libs.
7. `setState` method is how to update state.

#### Class vs. function components

1. class has state and lifecycle methods among other things.
2. class need this for props.

#### addtional attributes

1. If you want to pass additionl attributes to jsx components you can use the `data-` prefix.
2. So `<div data-foo="blah">`
3. Value should be probably from the state.
4. In CSS, then you can do conditional rendering for that attribute with something like `div[data-complete="true"] {yourAttr: 100px}`
5. class need a `render()` method.
6. class uses `this.props` instead of `props`.

#### Lists

1. You need keys for list.
2. You can take an array of components and just render them. Use a map.

#### css styling

https://www.freecodecamp.org/news/the-css-handbook-a-handy-guide-to-css-for-developers-b56695917d11/

#### classnames

1. className vs. class for JSX
2. can only apply to react elements by FB

#### JSX Land

1. Remember that its between the '<' and the '>' is the JSX.
2. When you are in JSX land, you have to escape to use JS.

#### JS in JSX

1. use `{youVar}` for JS.
2. use `${yourVAR}` for variables.

#### JSX Styles attribute

1. Needs an JS object. `<a style={{}}>`
2. You need to use two sets of braces. Once for the JS. Once for the JS Object.
3. Also you need `camelCase` since js does object properties does not like dashes. 
4. So `{{background-color: "red"}}` becomes `{{backgroundColor: "red"}}`
5. If you use inline styles, break it out to a separate variables.
6. For pixels, you can just use the number.




## Links

https://www.youtube.com/watch?v=DLX62G4lc44ls
