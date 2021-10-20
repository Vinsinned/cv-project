import React from "react"

const Practical = (props) => {
	let informations = [];
	let preInfo = [];
	for (let i = 0; i < props.information.length; i++) {
		preInfo.push(props.information[i]);
		if (preInfo.length === 4) {
			informations.push(
				<div key={'preInfo' + informations.length} className="head">
					<p>{preInfo[0]}</p>
					<p>{preInfo[1]}</p>
					<p>{preInfo[2]}</p>
					<p>{preInfo[3]}</p>
				</div>
			)
			preInfo = [];
		}
	}
	return (
		<div className="cvSection" id="practicalSection">
			<h1 className="headers" id="practicalHeader">Experience</h1>
			<div id="grids">
				{informations}
			</div>
		</div>
	)
}

export default Practical