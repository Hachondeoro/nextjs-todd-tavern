import Head from "next/head";
import React from "react";
import Products from "components/Allproducts";
import Authors from "components/AuthorsUpdate";
// GraphCMS is used for graphql

export default function Home() {
  return (
    <>
      <Head>
        <title>Todd Tavern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Authors /> */}
      <Products />
    </>
  );
}
