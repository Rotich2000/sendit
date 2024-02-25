import Head from 'next/head';

const ParcelDetails: React.FC = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Order and Process Parcels" />
        <meta name="author" content="Sanni Michael Tomiwa" />
        <title>Send IT | Parcel Details</title>
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
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a className="current" href="/parcel">
                  Parcel
                </a>
              </li>
              <li>
                <a href="/login">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="whitee-login">
        <br />
        <br />
        <div className="detailContainer">
          <h1 id="quoteTitle">Parcel Name : Infinix HOT 4</h1>
          <div id="userform" className="detailsForm">
            <hr />
            <p>
              <span className="status-color">Request Date</span>: May 22, 2018. 5:00pm
            </p>
            <hr />
            <p>
              <b>Location</b>: Yaba
            </p>
            <p>
              <b>Destination</b>: Sabo
            </p>
            <p>
              <b>Weight</b>: 30kg
            </p>
            <p>
              <b>Amount</b>: #1500
            </p>
            <p>
              <b>Status</b>: Pending
            </p>
            <br />
            {/* <button className="button" id="approve">
              Change Location
            </button> */}
            <button className="button button2" id="reject">
              Cancel Order
            </button>
            <button className="button" id="approve">
              Change Destination
            </button>
          </div>
        </div>
      </div>

      <footer>
        <p>
          <span id="trackerText">Send<span id="highlighter">it</span></span>, Copyright &copy; 2018
        </p>
      </footer>

      <script src="assets/js/app.js"></script>
    </div>
  );
};

export default ParcelDetails;
