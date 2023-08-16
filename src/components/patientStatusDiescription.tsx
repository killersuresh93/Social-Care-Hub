import * as React from 'react';
import TextEditor from './textEditor';

export default function PatientStatusDescription() {
  return (
    <div className="patient-status-description">
      <div className="heading">
        <h3>Referral ID:XXXXXXX</h3>
      </div>

      <div className="hedder">
        <div>
          <h4>Patient status description</h4>
        </div>
        <div>
          <h4>
            <select className="status">
              <option selected>Status</option>
              <option className="planned" value="planned">
                Planned
              </option>
              <option className="progress" value="progress">
                In Progress
              </option>
              <option className="scheduled" value="scheduled">
                Scheduled
              </option>
              <option className="complete" value="complete">
                Complete
              </option>
            </select>
          </h4>
        </div>
      </div>
      <div className="">
        <TextEditor />
      </div>
      <div className="hedder">
        <div>
          <h4>Notes</h4>
        </div>
        <div>
          <h4>Date</h4>
        </div>
      </div>
      <div className="">
        <TextEditor />
      </div>
      <br />
    </div>
  );
}
