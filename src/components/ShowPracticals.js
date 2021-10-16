import React from "react"

const ShowPracticals = (props) => {
  const { idIdentifier } = props
  let test = [];
  for (let i = 0; i < idIdentifier; i++) {
    test.push(
      <div className="formSection">
        <div className="flex">
          <div>
            <label htmlFor={`company${idIdentifier}`} className="makeBlock">Previous company</label>
            <input type="text" id={`company${idIdentifier}`} className="makeBlock input"/>
          </div>
          <div>
            <label htmlFor={`position${idIdentifier}`} className="makeBlock">Position</label>
            <input type="text" id={`position${idIdentifier}`} className="makeBlock input"/>
          </div>
        </div>
        <div className="flex">
          <div>
            <label htmlFor={`task${idIdentifier}`} className="makeBlock">Main tasks</label>
            <input type="text" id={`task${idIdentifier}`} className="makeBlock input"/>
          </div>
          <div>
            <label htmlFor={`duration${idIdentifier}`} className="makeBlock">How long did you work</label>
            <input type="text" id={`duration${idIdentifier}`} className="makeBlock input"/>
          </div>
        </div>
      </div>
    )
  }
  console.log(props.inputs)
    return (
      <div>
        {test}
      </div>
    )
}

export default ShowPracticals