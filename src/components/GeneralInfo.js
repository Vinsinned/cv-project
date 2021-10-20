import React from "react"

const General = (props) => {
    return (
        <div className="cvSection" id="generalSection">
            <img width="150px" height="150px" src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="Default" id="picture"/>
					<div>
					<div className="generalInformation">
						<p className="identifier">Name:</p>
						<p>{props.information[0]}1</p>
					</div>
					<div className="generalInformation">
						<p className="identifier">Email</p>
						<p>{props.information[1]}2</p>
					</div>
					<div className="generalInformation">
						<p className="identifier">Phone:</p>
						<p>{props.information[2]}3</p>
					</div>
					</div>
        </div>
    )
}

export default General