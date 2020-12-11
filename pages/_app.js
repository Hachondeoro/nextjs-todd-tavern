import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/css/custom.css";
import "leaflet/dist/leaflet.css";
import Layout from "../layouts/Dropdown";
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <MultiDropdownNavbar>
        <LandingPageHeader />
        <Component {...pageProps} />
      </MultiDropdownNavbar>
      <FooterAboutUs />
    </div>
  );
}
