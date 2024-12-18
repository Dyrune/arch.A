import React, { useEffect } from "react";
import { preLoaderAnim } from "./gsapAnimation"; // Make sure you have this function to animate the loader

const Loader = ({ setLoading }) => {
  useEffect(() => {
    // Start the preloader animation when the component is mounted
    preLoaderAnim();

    // Simulate a loading time, or you can replace this with actual loading logic (e.g., fetching data)
    const fakeLoadingDuration = 7000; // Time in ms, adjust this based on your content loading time
    const timeout = setTimeout(() => {
      setLoading(false); // Once loading is done, set loading to false
    }, fakeLoadingDuration);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeout);
  }, [setLoading]);

  return (
    <div className="preloader">
      <div className="texts-container"> <span>fOrm</span> <span>

      <img src="/logo_dark.png" className="formstudio" alt="form studio logo" />

      </span> <span>studiO</span>
      </div>
    </div>
  );
};

export default Loader;
