import React from 'react';
import ChildComponent from './ChildComponent.js';

const ParentComponent = () => {
    const name = "Suji";
    return(
        <div>
            <h1>Parent Component</h1>
            <ChildComponent name = {name}/>
        </div>
    );
}

export default ParentComponent;