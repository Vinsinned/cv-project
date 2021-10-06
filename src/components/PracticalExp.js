import React from "react"

const Practical = (props) => {
    return (
        <div>
            <h1>Practical</h1>
            <p>{props.information[0]}</p>
            <p>{props.information[1]}</p>
            <p>{props.information[2]}</p>
            <p>{props.information[3]}</p>
        </div>
    )
}

export default Practical