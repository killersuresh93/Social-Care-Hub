import * as React from 'react';
import PatientAlert from './patientAlert';
export default function PatientDetails() {
  return (
    <div className="patient-details">
      <div className="heading">
        <h3>Referral ID:0000000</h3>
      </div>
      <div className="patient-details-div row">
        <div className="col-md-5">
          <div className="patient-info ">
            <div className="patient-info-div">
              <div
                style={{
                  backgroundColor: '#F6782B',
                  width: '100px',
                  height: '180px',
                }}
              ></div>
              <div style={{ padding: '5px' }}>
                <section>
                  First Name : <b>Robin</b>
                  <br />
                  Last Name : <b>Hollond</b>
                  <br />
                  Birth Date : <b>03/12/2000</b>
                  <br />
                  Ethnicity:<b>Non-Hispanic or Latin(a)(o)(x)</b>
                  <br />
                  Cell Phone: <b>864-378-8975</b>
                  <br />
                  Home Phone: <b>816-487-5858</b>
                  <br />
                  Email: <b>snagel@ch.com</b>
                  <br />
                </section>
              </div>
              <div style={{ padding: '5px' }}>
                <section>
                  Birth Sex : <b>F</b>
                  <br />
                  Pronouns:<b>She/Her</b>
                  <br />
                </section>
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
      <br/>
      <PatientAlert />
      
    </div>
  );
}
