import React from 'react';

const ChildComponent = (props) => {
    return(
        <div>
            <h2>ChildComponent</h2>
            <p>My Name is : {props.name}</p>
        </div>
    );
}

export default ChildComponent;