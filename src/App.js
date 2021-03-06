import React, {Component} from "react";
import './styles/App.css';
import General from "./components/GeneralInfo";
import Education from "./components/EducationExp";
import Practical from "./components/PracticalExp";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      //for detecting when
      showEdit: false,
      clicked: false,
      name: '',
      email: '',
      phone: '',
      general: ['John Doe', 'example123@gmail.com', '702-123-4567'],
      school: '',
      major: '',
      date: '',
      education: ['Columbia University', 'Bachelor, Computer Science', '2015-2019'],
      company0: '',
      position0: '',
      task0: '',
      duration0: '',
      displayPracticals: [
      ],
      practicals: 0,
      //for looping
      loopPracticals: [1],
      practical: [],
    }

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    console.log(e.target.id)
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state[e.target.id])
  }
  submit = (e) => {
    e.preventDefault();
    const { name, email, phone, school, major, date} = this.state;
    const form = document.querySelector('#form');
    document.body.style.cssText = 'background-color: white';
    //save form elements for later
    this.setState({
      innerHTMLs: form.innerHTML,
      content: [],
    })
    form.classList.add('hide');
    this.setState({
      general: [name, email, phone],
      education: [school, major, date],
      showEdit: true,
    });
    //make a array, append every input, and then set state with array
    let practicalArray = [];
    for (let i = 0; i < this.state.loopPracticals.length; i++) {
      practicalArray.push(this.state[`company${i}`], this.state[`position${i}`], this.state[`task${i}`], this.state[`duration${i}`])
    }
    this.setState({
      practical: practicalArray
    })
  }
  increment = (e) => {
    let { practicals } = this.state;
    //this order in order to make the final
    this.setState({
      practicals: practicals += 1,
      loopPracticals: this.state.loopPracticals.concat(1)
    })
    this.setState({
      [`company${practicals}`]: '',
      [`task${practicals}`]: '',
      [`position${practicals}`]: '',
      [`duration${practicals}`]: '',
    })
    this.setState({
      displayPracticals: this.state.displayPracticals.concat(
        <div className="formSection" key={practicals}>
            <div className="flex">
              <div>
                <label htmlFor={`company${practicals}`} className="makeBlock">Previous company</label>
              <input type="text" id={`company${practicals}`} className="makeBlock input" onChange={this.handleChange} value={this.state.company1}/>
              </div>
              <div>
                <label htmlFor={`position${practicals}`} className="makeBlock">Position</label>
                <input type="text" id={`practicals}`} className="makeBlock input" onChange={this.handleChange} value={this.state.position1}/>
              </div>
            </div>
            <div className="flex">
              <div>
                <label htmlFor={`task${practicals}`} className="makeBlock">Main tasks</label>
              <input type="text" id={`task${practicals}`} className="makeBlock input" onChange={this.handleChange} value={this.state.task1}/>
              </div>
              <div>
                <label htmlFor={`duration${practicals}`} className="makeBlock">How long did you work</label>
                <input type="text" id={`duration${practicals}`} className="makeBlock input" onChange={this.handleChange} value={this.state.duration1}/>
              </div>
            </div>
          </div>
      )
    });
  }
  editClick = (e) => {
    const form = document.querySelector('#form');
    if (this.state.showEdit === true) {
      form.classList.remove('hide');
    }
  }
  render() {
    const { name, email, phone, general, school, major, date,
      education, practical } = this.state
    return (
      <div id="mamaDiv">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <div id="navBar">
          <h1 id="title">CV Application</h1>
          <span className="material-icons" onClick={this.editClick}>edit</span>
        </div>
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
                    <div className="formSection">
          <div className="flex">
            <div>
              <label htmlFor={`company0`} className="makeBlock">Previous company</label>
                  <input type="text" id={`company0`} className="makeBlock input" onChange={this.handleChange} value={this.state.company0}/>
            </div>
            <div>
              <label htmlFor={`position0`} className="makeBlock">Position</label>
              <input type="text" id={`position0`} className="makeBlock input" onChange={this.handleChange} value={this.state.position0}/>
            </div>
          </div>
          <div className="flex">
            <div>
              <label htmlFor={`task0`} className="makeBlock">Main tasks</label>
              <input type="text" id={`task0`} className="makeBlock input" onChange={this.handleChange} value={this.state.task0}/>
            </div>
            <div>
              <label htmlFor={`duration0`} className="makeBlock">How long did you work</label>
              <input type="text" id={`duration0`} className="makeBlock input" onChange={this.handleChange} value={this.state.duration0}/>
            </div>
          </div>
            </div>
            {this.state.displayPracticals}
          </div>
          <span className="material-icons" id="addIcon" onClick={this.increment}>add</span>

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
