import react from "react";
import ReactDOM from "react-dom";
import './styles/App.css'

function App() {
  return (
    <div id="form">
      <form>
        <label htmlFor="name" className="makeBlock">Name</label>
        <input type="text" id="name" className="makeBlock input"/>
        <label htmlFor="name" className="makeBlock">Email</label>
        <input type="text" id="email" className="makeBlock input"/>
        <label htmlFor="name" className="makeBlock">Phone number</label>
        <input type="text" id="phone" className="makeBlock input"/>
        
        <label htmlFor="name" className="makeBlock">School name</label>
        <input type="text" id="school" className="makeBlock input"/>
        <label htmlFor="name" className="makeBlock">Major</label>
        <input type="text" id="major" className="makeBlock input"/>
        <label htmlFor="name" className="makeBlock">Date of graduation</label>
        <input type="text" id="date" className="makeBlock input"/>

        <label htmlFor="name" className="makeBlock">Previous company</label>
        <input type="text" id="company" className="makeBlock input"/>
        <label htmlFor="name" className="makeBlock">Position</label>
        <input type="text" id="position" className="makeBlock input"/>
        <label htmlFor="name" className="makeBlock">Main tasks</label>
        <input type="text" id="task" className="makeBlock input"/>
        <label htmlFor="name" className="makeBlock">How long did you work</label>
        <input type="text" id="duration" className="makeBlock input"/>

        <button type="submit" className="makeBlock">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
