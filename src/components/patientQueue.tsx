import * as React from 'react';

export default function PatientQueue() {
  return (
    <div className="patient-queue">
      <div className="heading">
        <h3>Patient Queue</h3>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-light">
          <thead>
            <tr>
              <th scope="col">
                <h4>Date Served</h4>
              </th>
              <th scope="col">
                <h4>Referral ID</h4>
              </th>
              <th scope="col">
                <h4>Summary</h4>
              </th>
              <th scope="col">
                <a>
                  {' '}
                  <h4>Referral Type</h4>
                </a>
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
              <td>01/15/2023</td>
              <td>xxxyyyzzz1</td>
              <td>Further action on housing</td>
              <td>Housing</td>
              <td>Syd</td>
              <td>Barrett</td>
            </tr>
            <tr>
              <td>0/03/2023</td>
              <td>xxxyyyzzz2</td>
              <td>Further action on employment</td>
              <td>Employment</td>
              <td>Roger</td>
              <td>Waters</td>
            </tr>
            <tr>
              <td>05/03/2023</td>
              <td>xxxyyyzzz3</td>
              <td>Further action on Leagle service</td>
              <td>Leagal service</td>
              <td>Rick</td>
              <td>Wright</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
