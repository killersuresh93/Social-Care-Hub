import * as React from 'react';

const PatientActivities = () => {
  return (
    <div className="patient-activities-container">
      <div className="heading">
        {' '}
        <h3>Patient Activities</h3>
      </div>
      <div className="button-row">
        <button
          className="activity-button "
          style={{ backgroundColor: '#524698' }}
        >
          <i className="fa fa-file-text-o" aria-hidden="true"></i>Activity Log
        </button>
        <button
          className="activity-button "
          style={{ backgroundColor: '#524698' }}
        >
          <i className="fa fa-asterisk" aria-hidden="true"></i>Encounters
        </button>
        <button
          className="activity-button "
          style={{ backgroundColor: '#ee4355' }}
        >
          <i className="fa fa-archive" aria-hidden="true"></i>Planned Encounters
        </button>
        <button
          className="activity-button "
          style={{ backgroundColor: '#69cce1' }}
        >
          <i className="fa fa-star" aria-hidden="true"></i>View All Tasks
        </button>
        <button
          className="activity-button "
          style={{ backgroundColor: '#ed65d3' }}
        >
          New Referral(to HAH)
        </button>
      </div>
    </div>
  );
};

export default PatientActivities;
