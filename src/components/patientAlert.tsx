import * as React from 'react';

export default function PatientAlert() {
  return (
    <div className="patient-alert">
      <div className="patient-alert-header">
        <div className="heading">
          <h3>Patient Alert</h3>
        </div>
        <div>
          <a>
            <i className="fa fa-window-close-o" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-light">
          <thead>
            <tr>
              <th scope="col">
                <h4>Date</h4>
              </th>
              <th scope="col">
                <h4>Summary</h4>
              </th>
              <th scope="col">
                <h4>Referral Type</h4>
              </th>
              <th scope="col">
                <h4>First Name</h4>
              </th>
              <th scope="col">
                <h4>Last Name</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08/03/2023</td>
              <td>New referral URL</td>
              <td>Housing</td>
              <td>Robin</td>
              <td>Holland</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
