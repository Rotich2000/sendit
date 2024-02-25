"use client"
import { useState } from 'react';
import Head from 'next/head';

const AdminDashboard: React.FC = () => {
  // Define the getStatus function
  const getStatus = (id: string) => {
    // Your logic here
    console.log(`Status changed for item ${id}`);
  };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Order and Process Parcels" />
        <meta name="author" content="Sanni Michael Tomiwa" />
        <title>Send IT | Admin Dashboard</title>
      </Head>

      <header>
        <div className="container">
          <div id="branding">
            <h1>
              <a href="/">
                <span id="trackerText">Send<span id="highlighter">it</span></span>
              </a>
            </h1>
          </div>
          <nav>
            <ul>
              <li>
                <a className="current" href="/admin_dashboard">
                  Admin
                </a>
              </li>
              <li>
                <a href="/dashboard">User</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="login-bar">
        <div className="dashboard-login">
          <br />
          <h1 className="text-center">Welcome, Admin</h1>
          <div className="dashboard">
            <div className="col-container">
              <div className="col white-bg" style={{ margin: '7px' }}>
                <p className="processing">Processing Parcels</p>
                <h1 className="processing">859</h1>
              </div>

              <div className="col white-bg" style={{ margin: '7px' }}>
                <p className="delivered">Delivered Parcels</p>
                <h1 className="delivered">3594</h1>
              </div>

              <div className="col white-bg" style={{ margin: '7px' }}>
                <p className="allparcels">All Parcels</p>
                <h1 className="allparcels">4453</h1>
              </div>
            </div>
            <div className="col-container">
              <div className="col white-bg" style={{ margin: '7px' }}>
                <p className="allparcels">All Users</p>
                <h1 className="allparcels">50</h1>
              </div>

              <div className="col white-bg" style={{ margin: '7px' }}>
                <p className="available">Available Transit</p>
                <h1 className="available">5</h1>
              </div>

              <div className="col white-bg" style={{ margin: '7px' }}>
                <p className="declined">Declined Parcels</p>
                <h1 className="declined">10</h1>
              </div>
            </div>
            <br />
            <div id="textbox">
              <h2 className="alignleft">All Packages</h2>
            </div>
            <div id="clearAlignment"></div>
            <div id="tableContainer">
              <table>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Parcel</th>
                    <th>Weight(kg)</th>
                    <th>Location</th>
                    <th>Destination</th>
                    <th>Status</th>
                    <th>Change Destination</th>
                    <th>Change Status </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add your table data here */}
                  <tr>
                    <td>&nbsp;</td>
                    <td>Phones</td>
                    <td>50kg</td>
                    <td>Yaba</td>
                    <td>Ikeja</td>
                    <td id="one">Delivered</td>
                    <td>
                      <a href="">
                        <button className="showDetails select-button">Change </button>
                      </a>
                    </td>
                    <td>
                      <select className="select-button" id="statusOne" onChange={() => getStatus('one')}>
                        <option value="">Select Status</option>
                        <option value="progress">Processing</option>
                        <option value="delivered">Delivered</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>

      <footer>
        <p>
          <span id="trackerText">Send<span id="highlighter">it</span></span>, Copyright &copy; 2018
        </p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
