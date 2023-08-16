import * as React from 'react';
import TextEditor from './textEditor';

export default function PatientStatusDescription() {
  return (
    <div className="patient-status-description">
      <div className="heading">
        <h3>Referral ID:XXXXXXX</h3>
      </div>
      <div className="table-responsive">
        <table className="table  table-light">
          <thead>
            <tr className="text-center">
              <th scope="col">
                <h4>Patient status description</h4>
              </th>
              <th scope="col">
                <h4>Status</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TextEditor />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
