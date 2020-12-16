import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/css/custom.css";
import "leaflet/dist/leaflet.css";
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri:
    "https://api-ap-northeast-1.graphcms.com/v2/ckinxk2kkpj8x01xw4ka69g83/master",
});

export default function App({ Component, pageProps }) {
  return (
    <div>
      <ApolloProvider client={client}>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <MultiDropdownNavbar>
          <LandingPageHeader />
          <Component {...pageProps} />
        </MultiDropdownNavbar>
        <FooterAboutUs />
      </ApolloProvider>
    </div>
  );
}
