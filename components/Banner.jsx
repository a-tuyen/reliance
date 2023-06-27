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
      <div className={bannerHidden ? "hidden" : "fixed top-[120px] left-[0%] w-[100%] z-50 text-center"}>
        <h1 className="text-center font-banner text-white text-lg tracking-wider bg-black py-1">
          Zinc for salt water. Aluminum for salt and brackish water
        </h1>
      </div>
    </>
  );
};

export default Banner;
