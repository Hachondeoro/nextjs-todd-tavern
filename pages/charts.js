import Head from "next/head";
import React from "react";
// import Barchart from "components/Recharts/barchart";
// import Linechart from "components/Recharts/linechart";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todd Tavern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center" id="intro">
        {/* <Barchart /> */}
        {/* <Linechart /> */}
      </div>
    </>
  );
}
