Practicing from:
https://overreacted.io/how-are-function-components-different-from-classes/
https://codesandbox.io/s/snowy-feather-1jx41?file=/src/ProfilePageClass.js:0-516

This example shows difference between class and functional component.
First.js passes user props to ProfilePageClass and ProfilePageFunction both.

While the state, props, eventHandler values remain same for a particular render 
for the functional component, Follow button click event shows expected result.

On the other hand, with class component the this.props.user value changes between
when the Follow button is clicked and showMessage is called. So result is not 
what we want it to be.


