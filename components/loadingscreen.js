import { useEffect } from "react";

const LoadingScreen = () => {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-container-two">
        <div className="loader-container-three">
          <lottie-player
            className="lottie-loader"
            autoplay
            loop
            // src="https://kurage-assets.s3.ap-south-1.amazonaws.com/agrim/Agrim_loader.json"
            src="/lottie/butterfly_loader.json"
            style={{ height: "100%", width: "100%" }}
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
