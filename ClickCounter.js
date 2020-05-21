// https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95

import React, { useState } from 'react';

const ClickCounter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter+1);
        // console.log(counter);
    }
    const handleChange = (e) => {
        setCounter(e.target.value); // but will be one step behind render
    }
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p>{'    '}</p>
            <input 
                type="text" 
                name="display"
                value={counter}
                onChange={handleChange} 
            />
            <span>Note: You can simply make input disabled. Then no need for handleChange.</span>
            <span>This works too: You clicked the button {counter} times</span>
        </div>
    )
}
 export default ClickCounter;