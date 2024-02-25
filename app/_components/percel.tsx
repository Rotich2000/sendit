// pages/parcel.tsx
import Head from 'next/head';

const ParcelPage: React.FC = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Order and Process Parcels" />
        <meta name="author" content="Sanni Michael Tomiwa" />
        <title>Send IT | New Parcel</title>
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
                <a className="current" href="/parcel">Parcel</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="login-bar">
        <div className="white-login">
          <br /><br /><br />
          <div className="userform">
            <h3 id="quoteTitle">Create New Parcel</h3>
            <div>
              <input type="text" id="parcel" placeholder="Parcel Name" />
            </div>
            <div>
              <br />
              <input type="text" id="weight" placeholder="Weight(Kg)" />
            </div>
            <div>
              <br />
              <input type="text" id="location" placeholder="Location" />
            </div>
            <div>
              <br />
              <input type="text" id="destination" placeholder="Destination" />
            </div>

            <button id="buttonSubmit">Submit</button>
          </div>
          <br /><br />
        </div>
      </section>

      <footer>
        <p>
          <span id="trackerText">Send<span id="highlighter">it</span></span>, Copyright &copy; 2018
        </p>
      </footer>
    </>
  );
};

export default ParcelPage;
