import React, { useState, useEffect, useRef, Fragment } from "react";
import Head from "next/head";
import Baselayout from "../components/layout"
import Davinci from "./davinci";

export default function Home() {

  return (
    <React.Fragment>
      <Head>
        <title></title>
        <meta name="description" content="" />
      </Head >
      <Baselayout>
      <Davinci/>
      </Baselayout>
    </React.Fragment>
  );
}
