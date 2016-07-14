import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list';

class App extends Component {
  render(){
    return (
      <div>
        <div className="w3-teal w3-center w3-padding-small">
          <h1 className="w3-text-shadow w3-text-bold">ROBOTIC EMPLOYEES LIST</h1>
        </div>
        <EmployeeList />
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('container'));
});