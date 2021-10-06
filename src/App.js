import React, {Component} from "react";
import './styles/App.css';
import General from "./components/GeneralInfo";
import Education from "./components/EducationExp";
import Practical from "./components/PracticalExp";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      clicked: false,
      name: '',
      email: '',
      phone: '',
      general: [],
      school: '',
      major: '',
      date: '',
      education: [],
      company: '',
      position: '',
      task: '',
      duration: '',
      practical: [],
    }

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  submit = (e) => {
    const { name, email, phone, school, major, date, company, position, task, duration} = this.state;
    const form = document.querySelector('#form');
    form.innerHTML = '';
    form.id = 'gone';
    this.setState({
      general: [name, email, phone],
      education: [school, major, date],
      practical: [company, position, task, duration]
    });
  }
  render() {
    const { name, email, phone, general, school, major, date,
      education, company, position, task,  duration, practical } = this.state

    return (
      <div>
        <form id="form">
          <label htmlFor="name" className="makeBlock">Name</label>
          <input type="text" id="name" className="makeBlock input" onChange={this.handleChange} value={name} />
          <label htmlFor="email" className="makeBlock">Email</label>
          <input type="text" id="email" className="makeBlock input" onChange={this.handleChange} value={email} />
          <label htmlFor="phone" className="makeBlock">Phone number</label>
          <input type="text" id="phone" className="makeBlock input" onChange={this.handleChange} value={phone} />
        
          <label htmlFor="school" className="makeBlock">School name</label>
          <input type="text" id="school" className="makeBlock input" onChange={this.handleChange} value={school} />
          <label htmlFor="major" className="makeBlock">Major</label>
          <input type="text" id="major" className="makeBlock input" onChange={this.handleChange} value={major} />
          <label htmlFor="date" className="makeBlock">Date of graduation</label>
          <input type="text" id="date" className="makeBlock input" onChange={this.handleChange} value={date} />

          <label htmlFor="company" className="makeBlock">Previous company</label>
          <input type="text" id="company" className="makeBlock input" onChange={this.handleChange} value={company} />
          <label htmlFor="position" className="makeBlock">Position</label>
          <input type="text" id="position" className="makeBlock input" onChange={this.handleChange} value={position} />
          <label htmlFor="task" className="makeBlock">Main tasks</label>
          <input type="text" id="task" className="makeBlock input" onChange={this.handleChange} value={task} />
          <label htmlFor="duration" className="makeBlock">How long did you work</label>
          <input type="text" id="duration" className="makeBlock input" onChange={this.handleChange} value={duration} />

          <button type="submit" className="makeBlock" onClick={this.submit}>
            Submit
          </button>
        </form>
        <div id="cvPage">
          <General information={general} />
          <Education information={education} />
          <Practical information={practical} />
        </div>
      </div>
    );
  }
}

export default App;
