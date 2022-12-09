import "../styles/main.scss";
import LoadingScreen from "../components/loader2";
// import LoadingScreen from "../components/loadingscreen";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 3500);
  }, []);
  return (
    <>
      {!isLoading ? (
        <motion.div
          // initial={{ height: "0", y: "0vh" }}
          initial={{ opacity: "1" }}
          // animate={{ height: "100vh", y: "-100vh" }}
          animate={{ opacity: "0" }}
          transition={{
            ease: "easeIn",
            duration: 4,
            delay: 4,
          }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <Component {...pageProps} />
       )} 
    </>
  );
}

export default MyApp;
