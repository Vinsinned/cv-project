import React from "react"

const Education = (props) => {
    return (
        <div className="cvSection" id="educationSection">
            <p id="educationHeader">Education</p>
            <p className="educationElement">{props.information[0]}1</p>
            <p className="educationElement">{props.information[1]}1</p>
            <p className="educationElement">{props.information[2]}1</p>
        </div>
    )
}

export default Education