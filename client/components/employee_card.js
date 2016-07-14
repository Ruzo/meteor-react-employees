import React from 'react';

const EmployeeCard = ({employee}) => {
  return (
    <div className="card w3-card-4 w3-round w3-center">
      <img src={employee.image} alt="Avatar" className="w3-border"/>
      <div className="w3-container">
        <h5><strong>{employee.name}</strong></h5>
        <p>{employee.email}</p>
        <p>{employee.phone}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;