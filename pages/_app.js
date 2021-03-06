import Nav from "../components/Nav";
import "../styles/tailwind.css";
import { useState } from "react";
import { useMediaQuery } from "../components/useMediaQuery";

import "../styles/global.scss";
import Footer from "../components/containers/Footer";

function MyApp({ Component, pageProps }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Nav />
      <Component {...pageProps} isMobile={isMobile} />
      <Footer />
    </>
  );
}

export default MyApp;
