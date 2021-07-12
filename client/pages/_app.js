/**
 * app.js
 * all commands run before pages show up are implemented here
 */
import TopNav from "../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <TopNav></TopNav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
