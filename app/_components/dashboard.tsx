import Head from 'next/head';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Order and Process Parcels" />
        <meta name="author" content="Sanni Michael Tomiwa" />
        <title>Send IT | Dashboard</title>
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
                <a className="current" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/parcel">Parcel</a>
              </li>
              <li>
                <a href="/admin_dashboard">Admin</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="login-bar">
        <div className="dashboard-login">
          <br />
          <h1 className="text-center">Welcome, Sanni Michael Tomiwa</h1>
          <div className="dashboard">
            <div className="col-container">
              <div className="col white-bg">
                <p className="allparcels">All Parcels</p>
                <h1 className="allparcels">1000</h1>
              </div>

              <div className="col white-bg">
                <p className="processing">Processing Parcels</p>
                <h1 className="processing">236</h1>
              </div>

              <div className="col white-bg">
                <p className="delivered">Delivered Parcels</p>
                <h1 className="delivered">764</h1>
              </div>
            </div>

            <br />
            <div id="textbox">
              <h2 className="alignleft">All Packages</h2>
              <h6 className="alignright">
                <a id="addIcon" href="/parcel">
                  <i className="fas fa-plus fa-3x"></i>
                </a>
              </h6>
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
                    <th>Action</th>
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
                    <td>Delivered</td>
                    <td>
                      <a href="/details">
                        <button className="showDetails select-button">Show Details</button>
                      </a>
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

export default Dashboard;
