import React from "react"

const Practical = (props) => {
    let informations = [];
    for (let i = 0; i < props.information.length; i++) {
        console.log(props.information[i])
        informations.push(
            <div key={props.information[i] + i}>
                <p>{props.information[i]}</p>
            </div>
        )
    }
    return (
        <div className="cvSection">
            <h1 className="headers">Practical</h1>
            {informations}
        </div>
    )
}

export default Practical