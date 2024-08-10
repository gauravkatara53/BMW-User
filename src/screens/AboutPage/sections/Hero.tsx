import { useEffect, useRef } from "react";
import APTitleText from "@/components/about-page/APTitleText";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <div className="mt-40 lg:px-32 md:px-16 sm:px-8 px-4">
      <img
        className="w-full h-[20rem] rounded-[3rem] mx-auto"
        src="about-hero-bg.png"
        alt="Hero Background"
      />
      <div className="mt-[-13rem] ml-4 sm:ml-8 flex flex-col md:flex-row justify-between w-full items-center">
        <div className="max-w-full md:max-w-[40rem] mb-4 md:mb-0">
          <APTitleText text="Find the warehouse of your dreams" />
        </div>
        <div className="relative w-full md:w-[60%] lg:w-[50%] overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-auto rounded-[3rem]"
            muted
            style={{ maxHeight: "20rem" }}
          >
            <source src="3191422-uhd_4096_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
