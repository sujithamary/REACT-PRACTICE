import React from 'react';

export default function ObjectList()
{
    const details = [{id:1, name:"suji"}, {id:2, name:"saran"}, {id:3, name:"supri"}]
    const display = details.map((det, index) => <li key = {index}>{det.name}</li>)
    return(
        <div>
            <h1>Object List</h1>
            {display}
        </div>
    )
}