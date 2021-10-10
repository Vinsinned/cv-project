import React from "react"

const General = (props) => {
    return (
        <div className="cvSection">
            <h1 className="headers">General</h1>
            <p>{props.information[0]}</p>
            <p>{props.information[1]}</p>
            <p>{props.information[2]}</p>
        </div>
    )
}

export default General