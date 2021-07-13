/**
 * app.js
 * all commands run before pages show up are implemented here
 */
import TopNav from "../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider>
        <ToastContainer position="top-center" />
        <TopNav></TopNav>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
