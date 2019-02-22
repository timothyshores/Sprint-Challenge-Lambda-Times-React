## Self-Study/Essay Questions
- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Proptypes are used to prevent bugs using typechecking. Javascript is very loose as a language. This means that a function that is only suppose to recieve a number, string, array, variable or object could recieve a different data type as an argument. Proptypes will display an warning message in the Javascript console during development.

- [ ] Describe a life-cycle event in React?

Constructor, render, componentDidMount and unmount.

- [ ] Explain the details of a Higher Order Component?

A component that a components as its input and then returns the supplied component with added functionality. Higher order components are patterns that allow the reuse of a components logic. 

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

Use classes to style, use inline styles or use styled components. Inline is very obvious where your styles are located but I personally think it doesn't look very clean. Using className along with an imported .css file looks a bit cleaner but it's might be difficult to locate the specific CSS selector that you want to modify for a given component.

Lastly the styled components library keeps track of which components are rendered to the DOM and injects the styles, there's no issues with duplicate class names, it's very obvious whether or not a styled component is being used or not within a component, it's easier to maintain with the CSS being located in the same file as the JSX and there's automated vendor prefixes.