import React from "react";
import { motion } from "framer-motion";

// import Image from "./Image";

// Import images

const container = {
  hidden: {
    translateY: "0",
  },
  show: {
    translateY: "-105%",
    transition: {
      staggerChildren: 0.35,
      duration: 1.2,
      delay: 3.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 0, scale: 0.2 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: {
    opacity: 2,
    transition: {
      // ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
    },
  },
  show: {
    opacity: 0.1,

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2,
      delay: 1,
    },
  },
};

const Loader = ({ setLoading }) => {
  const svgVariants = {
    start: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 3.5,
        ease: "linear",
        repeat: Infinity,
      },
    },
    finished: {
      opacity: 0.3,
      pathLength: 0.4,
    },
    transition: {
      duration: 3.5,
      ease: "linear",
      repeat: Infinity,
    },
  };
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        // initial={{ translateY:"0" }}
        // animate={{ translateY:"-105%"  }}
        exit="exit"
        className="loader-inner"
      >
        {/* <ImageBlock variants={item} id="image-1" /> */}
        <motion.div variants={itemMain} className="transition-image">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="339.266"
            height="61.145"
            viewBox="0 0 339.266 61.145"
          >
            <g
              id="Group_6"
              data-name="Group 6"
              transform="translate(-480.19 -2069.685)"
            >
              <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(480.19 2069.685)"
              >
                <g id="Group_4" data-name="Group 4" transform="translate(0 0)">
                  <motion.path
                       variants={svgVariants}
                        initial="finished"
                        animate="start"
                    id="Path_3"
                    data-name="Path 3"
                    d="M480.19,2135.888v-59.1h17.365v25.064h.328l18.266-25.064h18.225l-19.453,26.252,20.354,32.846H515.083l-12.9-21.706-4.628,6.225v15.481Z"
                    transform="translate(-480.19 -2075.766)"
                    fill="#fff"
                  />
                  <motion.path
                       variants={svgVariants}
                        initial="finished"
                        animate="start"
                    id="Path_4"
                    data-name="Path 4"
                    d="M905.407,2112.912c0,6.226,3.072,9.625,8.682,9.625s8.682-3.4,8.682-9.625V2076.79h17.365v38.047c0,13.474-10.443,22.074-26.047,22.074s-26.047-8.6-26.047-22.074V2076.79h17.365Z"
                    transform="translate(-829.272 -2075.766)"
                    fill="#fff"
                  />
                  <motion.path
                       variants={svgVariants}
                        initial="finished"
                        animate="start"
                    id="Path_5"
                    data-name="Path 5"
                    d="M1323.775,2135.888H1306.41v-59.1h26.252c15.768,0,23.877,7.413,23.877,20.068,0,6.962-3.358,13.679-9.542,16.627l11.221,22.4h-19.412l-9.338-19.822h-5.693Zm0-31.289h7.167c4.874,0,7.863-2.99,7.863-7.455,0-4.382-3.154-7.535-7.823-7.535h-7.208Z"
                    transform="translate(-1187.356 -2075.766)"
                    fill="#fff"
                  />
                  <motion.path
                       variants={svgVariants}
                        initial="finished"
                        animate="start"
                    id="Path_6"
                    data-name="Path 6"
                    d="M1721.781,2124.133h-18.02l-3.072,11.754H1683l19.29-59.1h21.788l19.289,59.1h-18.511Zm-14.866-12.245h11.713l-5.693-21.46h-.328Z"
                    transform="translate(-1509.678 -2075.766)"
                    fill="#fff"
                  />
                  <motion.path
                       variants={svgVariants}
                        initial="finished"
                        animate="start"
                    id="Path_7"
                    data-name="Path 7"
                    d="M2130.368,2130.83c-18.758,0-29.856-11.017-29.856-30.634,0-19.372,11.1-30.511,29.323-30.511,14.825,0,25.883,8.723,27.194,20.846h-17.078c-1.146-4.341-5.037-7.167-10.034-7.167-7.372,0-11.713,6.061-11.713,16.586,0,10.771,4.956,17.2,12.573,17.2,5.652,0,9.665-3.153,10.157-7.9l.082-.819h-9.01v-11.55h25.72v7.782C2157.726,2120.837,2147.528,2130.83,2130.368,2130.83Z"
                    transform="translate(-1867.031 -2069.685)"
                    fill="#fff"
                  />
                  <motion.path
                       variants={svgVariants}
                        initial="finished"
                        animate="start"
                    id="Path_8"
                    data-name="Path 8"
                    d="M2587,2135.888h-41.692v-59.1H2587v13.8h-24.327v9.542h22.812v12.45h-22.812v9.5H2587Z"
                    transform="translate(-2247.738 -2075.766)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </svg>
          <div className="subtitle">
          Websites | Mobile Apps | Softwares
          </div>
        </motion.div>
   
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      {/* <Image
        src={`/images/${id}.webp`}
        fallback={`/images/${id}.jpg`}
        alt={id}
      /> */}
    </motion.div>
  );
};
export default Loader;
