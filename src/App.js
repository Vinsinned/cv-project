import React, {Component} from "react";
import './styles/App.css';
import General from "./components/GeneralInfo";
import Education from "./components/EducationExp";
import Practical from "./components/PracticalExp";
import AddPractical from "./components/addPractical";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      practicals: 1,
      clicked: false,
      name: '',
      email: '',
      phone: '',
      general: ['John Doe', 'example123@gmail.com', '702-123-4567'],
      school: '',
      major: '',
      date: '',
      education: ['Columbia University', 'Bachelor, Computer Science', '2015-2019'],
      company: '',
      position: '',
      task: '',
      duration: '',
      practical: ['Vinson Incorporated', 'Senior Web Developer', 'helped to build the eiffel tower', '2010-2020'],
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
    const { name, email, phone, school, major, date, company, position, task, duration, practicals} = this.state;
    const form = document.querySelector('#form');
    document.body.style.cssText = 'background-color: white'
    form.innerHTML = '';
    form.id = 'gone';
    console.log(company)
    console.log(practicals)
    /*
    this.setState({
      general: [name, email, phone],
      education: [school, major, date],
      practical: [company, position, task, duration]
    });
    */
  }
  increment = (e) => {
    let { practicals } = this.state
    this.setState({
      practicals: practicals += 1
    })
  }
  render() {
    const { practicals, name, email, phone, general, school, major, date,
      education, company, position, task, duration, practical } = this.state
    return (
      <div>
        <AddPractical values={[company, position, task, duration]} handleChange={this.handleChange} idIdentifier={practicals} />
        <form id="form">
          <div className="formSection">
            <h2>General Information</h2>
            <div className="flex">
              <div>
                <label htmlFor="name" className="makeBlock">Name</label>
                <input type="text" id="name" className="makeBlock input" onChange={this.handleChange} value={name} />
              </div>
              <div>
                <label htmlFor="email" className="makeBlock">Email</label>
                <input type="text" id="email" className="makeBlock input" onChange={this.handleChange} value={email} />
              </div>
            </div>
            <label htmlFor="phone" className="makeBlock">Phone number</label>
            <input type="text" id="phone" className="makeBlock input" onChange={this.handleChange} value={phone} />
          </div>

          <div className="formSection">
            <h2>Education Information</h2>
            <div className="flex">
              <div>
                <label htmlFor="school" className="makeBlock">School name</label>
                <input type="text" id="school" className="makeBlock input" onChange={this.handleChange} value={school} />
              </div>
              <div>
                <label htmlFor="major" className="makeBlock">Major</label>
                <input type="text" id="major" className="makeBlock input" onChange={this.handleChange} value={major} />
              </div>
            </div>
            <label htmlFor="date" className="makeBlock">Date of graduation</label>
            <input type="text" id="date" className="makeBlock input" onChange={this.handleChange} value={date} />
          </div>

          <div className="formSection">
            <h2>Practical Information</h2>
            <div className="flex">
              <div>
                <label htmlFor="company0" className="makeBlock">Previous company</label>
                <input type="text" id="company0" className="makeBlock input" onChange={this.handleChange} value={company} />
              </div>
              <div>
                <label htmlFor="position0" className="makeBlock">Position</label>
                <input type="text" id="position0" className="makeBlock input" onChange={this.handleChange} value={position} />
              </div>
            </div>
            <div className="flex">
              <div>
                <label htmlFor="task0" className="makeBlock">Main tasks</label>
                <input type="text" id="task0" className="makeBlock input" onChange={this.handleChange} value={task} />
              </div>
              <div>
                <label htmlFor="duration0" className="makeBlock">How long did you work</label>
                <input type="text" id="duration0" className="makeBlock input" onChange={this.handleChange} value={duration} />
              </div>
            </div>
          </div>

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
