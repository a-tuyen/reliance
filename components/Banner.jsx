import { useState, useEffect } from "react";

const Banner = () => {
  const [bannerHidden, setBannerHidden] = useState(true);

  useEffect(() => {
    const changeDisplay = () => {
      if (window.scrollY >= 450) {
        setBannerHidden(false);
      } else {
        setBannerHidden(true);
      }
    };
    window.addEventListener("scroll", changeDisplay);
  }, []);

  return (
    <>
      <div className={bannerHidden ? "hidden" : "fixed top-[120px] left-[0%] w-[100%] z-30 text-center"}>
        <div className="flex flex-col lg:flex-row justify-center w-[100%] bg-accent py-1">
        <h1 className="font-banner text-white text-lg tracking-wider">
          Zinc for salt water.
        </h1>
        <h1 className="font-banner text-white text-lg tracking-wider pl-0 lg:pl-2">
          Aluminum for salt and brackish water.
        </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
