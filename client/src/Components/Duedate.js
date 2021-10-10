import React from 'react'

export default function Duedate(props) {
    var d = props.clientDate
   var myDate = d.setDate(d.getDate() + 50);
    return (
        <div>
            <p>{myDate}</p>
        </div>
    )
}