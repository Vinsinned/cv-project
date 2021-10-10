import React, {Component} from "react"

class AddPractical extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { company, position, task, duration } = this.props.values;
        return (
            <div className="formSection">
            <div className="flex">
              <div>
                <label htmlFor={`company${this.props.idIdentifier}`} className="makeBlock">Previous company</label>
                <input type="text" id={`company${this.props.idIdentifier}`} className="makeBlock input" onChange={this.props.handleChange} value={company} />
              </div>
              <div>
                <label htmlFor={`position${this.props.idIdentifier}`} className="makeBlock">Position</label>
                <input type="text" id={`position${this.props.idIdentifier}`} className="makeBlock input" onChange={this.props.handleChange} value={position} />
              </div>
            </div>
            <div className="flex">
              <div>
                <label htmlFor={`task${this.props.idIdentifier}`} className="makeBlock">Main tasks</label>
                <input type="text" id={`task${this.props.idIdentifier}`} className="makeBlock input" onChange={this.props.handleChange} value={task} />
              </div>
              <div>
                <label htmlFor={`duration${this.props.idIdentifier}`} className="makeBlock">How long did you work</label>
                <input type="text" id={`duration${this.props.idIdentifier}`} className="makeBlock input" onChange={this.props.handleChange} value={duration} />
              </div>
            </div>
          </div>
        )
    }
}

export default AddPractical