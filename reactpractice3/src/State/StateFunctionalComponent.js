import React, { useState } from "react";

function StateFunctionalComponent()
{
    const [color , setColor] = useState("Blue");
    const changeColor = () => setColor("Red");

    return(
        <div>
            <h2>The color is {color}</h2>
            <button onClick = {changeColor}>Change</button>
        </div>
    )
}

export default StateFunctionalComponent;