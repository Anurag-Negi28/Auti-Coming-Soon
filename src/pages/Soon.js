import { useEffect } from "react";

const Soon = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <main className="w-full relative h-[64rem] text-center text-[4rem] text-black font-playfair-display sm:w-[26.25rem]">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/unsplashhos3dzgphzw@2x.png"
        />
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightsteelblue [backdrop-filter:blur(60px)]" />
      </div>
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[64rem] flex flex-col items-center justify-center py-[18.438rem] px-[0rem] box-border gap-[2.688rem] lg:w-[75rem] md:w-[60rem] sm:flex sm:w-[26.25rem] sm:gap-[2.25rem_2.688rem] sm:py-[0.625rem] sm:pr-[0rem] sm:pl-[0.313rem] sm:box-border mq350small:w-[21.875rem]">
        <img
          className="w-[13.125rem] h-[11.563rem] relative rounded-[20px] object-cover [&.animate]:animate-[5s_ease_1s_infinite_normal_forwards_pulsate] opacity-[1] sm:w-[13.125rem]"
          alt=""
          src="/autiembracelogo-1@2x.png"
          data-animate-on-scroll
        />
        <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit sm:text-[4rem] sm:self-stretch sm:w-auto">
          Welcome to AutiEmbrace.
        </h1>
        <h6 className="m-0 self-stretch relative text-[1.5rem] font-normal font-montserrat">
          We are going to launch our website soon.
        </h6>
      </div>
    </main>
  );
};

export default Soon;
