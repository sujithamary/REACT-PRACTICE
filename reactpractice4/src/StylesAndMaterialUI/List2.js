import React from 'react'

function ListExample(props)
{
    return(
        <div>
             {props.name}
        </div>
    )
}

export default function List2()
{
    const studentName = ["sangu", "subanu"]
    const stName = studentName.map((stu)=><ListExample name={stu}></ListExample>)
    return(
        <div>
            <h1>List2</h1>
            {stName}
        </div>
    )
}