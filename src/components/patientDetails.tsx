import * as React from 'react';
import PatientAlert from './patientAlert';
import PatientQueue from './patientQueue';
import PatientActivities from './patientActivities';
import PatientStatusDiescription from './patientStatusDiescription';
export default function PatientDetails() {
  return (
    <div className="patient-details">
      <div className="heading">
        <h3>Referral ID:XXXXXXX</h3>
      </div>
      <div className="patient-details-div">
        <div className="row">
          <div className="col-md-5">
            <div className="patient-info ">
              <div className="patient-info-div">
                <div className="patient-info-orangeBox"></div>
                <div style={{ padding: '5px' }}>
                  <table>
                    <tr>
                      <td>
                        {' '}
                        First Name : <b>Robin</b>
                      </td>
                      <td>
                        Birth Sex : <b>F</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {' '}
                        Last Name : <b>Hollond</b>
                      </td>
                      <td>
                        Pronouns:<b>She/Her</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {' '}
                        Birth Date : <b>03/12/2000</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Ethnicity:<b>Non-Hispanic or Latin(a)(o)(x)</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Cell Phone: <b>864-378-8975</b>
                      </td>
                    </tr>
                    Home Phone: <b>816-487-5858</b>
                    <tr>
                      <td>
                        Email: <b>snagel@ch.com</b>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="table-responsive">
              <table className="table table-striped table-light">
                <thead>
                  <tr>
                    <th scope="col">
                      <h4>Service Requested</h4>
                    </th>
                    <th scope="col">
                      <h4>Verification Method</h4>
                    </th>
                    <th scope="col">
                      <h4>Storage Location</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Driver License</td>
                    <td>Scanned</td>
                    <td>Electronic File</td>
                  </tr>
                  <tr>
                    <td>Food stamp or TANF Award Letter of Application</td>
                    <td>Scanned</td>
                    <td>Electronic File</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      <PatientAlert />
      <br />
      <PatientQueue />
      <br />
      <PatientActivities />
      <div className="main-button-row">
        <button className="main-button">Button1</button>{' '}
        <button className="main-button">Button2</button>
      </div>
      <br />
      <PatientStatusDiescription />
      <div className="main-button-row">
        <button className="main-button">Button1</button>{' '}
        <button className="main-button">Button2</button>
      </div>
    </div>
  );
}
