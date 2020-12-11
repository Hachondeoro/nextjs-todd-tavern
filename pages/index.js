import Head from "next/head";
import React from "react";
import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todd Tavern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MultiDropdownNavbar />
      <LandingPageHeader />
      <FooterAboutUs />
    </>
  );
}
