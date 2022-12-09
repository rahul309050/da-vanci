import React, { useRef, useEffect } from "react";
import Head from "next/head";
import classes from "../styles/pages/davinci.module.scss";
import Baselayout from "../components/layout";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Davinci() {
  const cardRef = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>DA-VINCI</title>
        <meta name="" content="" />
      </Head>

      <Baselayout>
        <ParallaxProvider>
          <section className={classes.first_section}>
            <div className={` container ${classes.first_section__content}  `}>
              <div className={classes.coverImg}>
                <img
                  className={classes.coverImg_img}
                  src="./images/coverimg.png"
                  alt=""
                />
                <div className={`  ${classes.dec}  `}>
                  <div className={classes.top}>
                    <div className={classes.right}>
                      <p>Elevating Loader Experience</p>
                    </div>
                    <div className={classes.left}>
                      <img src="./images/icons/share.svg" alt="" />
                      <img src="./images/icons/like.svg" alt="" />
                      <img src="./images/icons/comments.svg" alt="" />
                    </div>
                  </div>
                  <div className={classes.bottom}>
                    <div className={classes.right}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse.
                    </div>
                    <div className={classes.left}>
                      <p>
                        {" "}
                        Design & Animation : Shonit K Jadhav | Shubham Kishore
                      </p>
                      <p>Development : PK Sharma | Rahul Raj</p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </section>

          <section className={classes.second_section}>
            <div className={` container ${classes.second_section__content}  `}>
              <Parallax speed={-10}>
                <div className={classes.heading}>
                  <p className={classes.title}>Da Vinci</p>
                  <p className={classes.subtitle}>
                    Every week, we strive to stay ahead of the competition with
                    exciting innovations and explorations. Our ongoing
                    commitment drives our success!
                  </p>
                </div>
              </Parallax>

              <div ref={cardRef} className={` container ${classes.vinci}  `}>
                <Parallax speed={10}>
                  <div className={classes.card1}>
                    <img src="./images/1.jpg" alt="" />
                    <video
                      src="./video/1.mp4"
                      muted
                      autoPlay
                      playsInline
                      loop
                      controls={false}
                    ></video>
                  </div>
                </Parallax>
                <Parallax speed={5}>
                  <div className={classes.card2}>
                    <img src="./images/2.jpg" alt="" />
                    <video
                      src="./video/2.mp4"
                      muted
                      autoPlay
                      playsInline
                      loop
                      controls={false}
                    ></video>
                  </div >
                </Parallax>
                <Parallax speed={10}>
                  <div className={classes.card3}>
                    <img src="./images/3.jpg" alt="" />
                    <video
                      src="./video/3.mp4"
                      muted
                      autoPlay
                      playsInline
                      loop
                      controls={false}
                    ></video>
                  </div>
                </Parallax>
                {/* <Parallax speed={10}> */}
                <Parallax speed={5}>
                  <div className={classes.card4}>
                    <img src="./images/4.jpg" alt="" />
                    <video
                      src="./video/4.mp4"
                      muted
                      autoPlay
                      playsInline
                      loop
                      controls={false}
                    ></video>
                  </div>
                </Parallax>

                <Parallax speed={10}  className={classes.card5}>
                  <img src="./images/5.jpg" alt="" />
                </Parallax >

                <Parallax speed={10}>
                  <div className={classes.card6}>
                    <img src="./images/6.jpg" alt="" />
                    <video
                      src="./video/6.mp4"
                      muted
                      autoPlay
                      playsInline
                      loop
                      controls={false}
                    ></video>
                  </div>
                </Parallax>
                <Parallax speed={10}>
                  <div  className={classes.card7}>
                    <img src="./images/7.jpg" alt="" />
                    <video
                      src="./video/7.mp4"
                      muted
                      autoPlay
                      playsInline
                      loop
                      controls={false}
                    ></video>
                  </div >
                </Parallax>
                <Parallax speed={10}>
                  <div className={classes.card8}>
                    <img src="./images/8.jpg" alt="" />
                    <div className={classes.lottie}>
                      <lottie-player
                        autoplay
                        loop
                        src="./lottie/home_banner.json"
                        style={{ width: "100%", height: "100%" }}
                        mode="normal"
                      ></lottie-player>
                    </div>
                  </div>
                </Parallax>

                <Parallax speed={10}  className={classes.card9}>
                  <img src="./images/9.jpg" alt="" />
                  <video
                    src="./video/9.mp4"
                    muted
                    autoPlay
                    playsInline
                    loop
                    controls={false}
                  ></video>
                </Parallax >

                <Parallax speed={10}  className={classes.card10}>
                  <img src="./images/10.jpg" alt="" />
                  <video
                    src="./video/10.mp4"
                    muted
                    autoPlay
                    playsInline
                    loop
                    controls={false}
                  ></video>
                </Parallax >
                <Parallax speed={10}  className={classes.card11}>
                  <img src="./images/11.jpg" alt="" />
                </Parallax >
                <Parallax speed={10}  className={classes.card12}>
                  <img src="./images/12.jpg" alt="" />
                  <div className={classes.lottie}>
                    <lottie-player
                      autoplay
                      loop
                      src="./lottie/open_minded.json"
                      style={{ width: "100%", height: "100%" }}
                      mode="normal"
                    ></lottie-player>
                  </div>
                </Parallax >
              </div>
            </div>
          </section>
        </ParallaxProvider>
      </Baselayout>
    </React.Fragment>
  );
}
