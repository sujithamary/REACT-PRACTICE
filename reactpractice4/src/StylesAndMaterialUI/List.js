import React from 'react';

export default function List() 
{
    const animal = ["Lion", "Tiger", "Elephant", "Rabbit"]
    const result = animal.map((ani,idx)=><li key={idx}>{idx}{ani}</li>)
    return(
        <div>
            <ul>
                <h1>Unordered List</h1>
                {result}
            </ul>
        </div>
    )
}