import React from "react"

const Education = (props) => {
    return (
        <div className="cvSection">
            <h1 className="headers">Education</h1>
            <p>{props.information[0]}</p>
            <p>{props.information[1]}</p>
            <p>{props.information[2]}</p>
        </div>
    )
}

export default Education