import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Employees} from '../../imports/collections/employees';
import EmployeeCard from './employee_card';

let limitCount=20;
let page = 1;

const EmployeeList = (props) => {

  return (
    <div className="w3-padding">
      <div className="employee_list">
          {props.employees.map((employee, index) =>
              <EmployeeCard key={index} employee={employee} />
          )}
      </div>
      <button
        onClick={() => {
          page++;
          limitCount = page * 20 ;
          Meteor.subscribe('employees', limitCount);
        }}
        className="w3-btn w3-teal w3-border w3-border-yellow w3-round-xxlarge w3-btn-block w3-padding">
        Load more...
      </button>
    </div>
  );
};

export default createContainer(() => {
  Meteor.subscribe('employees', limitCount);
  return {employees: Employees.find({}).fetch()};
}, EmployeeList);