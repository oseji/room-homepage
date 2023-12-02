import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import imgAboutDark from "./assets/image-about-dark.jpg";
import imgABoutLight from "./assets/image-about-light.jpg";

import desktopImg1 from "./assets/desktop-image-hero-1.jpg";
import desktopImg2 from "./assets/desktop-image-hero-2.jpg";
import desktopImg3 from "./assets/desktop-image-hero-3.jpg";
import mobileImg1 from "./assets/mobile-image-hero-1.jpg";
import mobileImg2 from "./assets/mobile-image-hero-2.jpg";
import mobileImg3 from "./assets/mobile-image-hero-3.jpg";

function App() {
  const logo = (
    <svg width="62" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.988 12.672v-7.32c0-.48.142-.928.426-1.344a3.36 3.36 0 011.11-1.02c.456-.264.94-.396 1.452-.396.296 0 .618.048.966.144.348.096.654.224.918.384L9.096.588A4.277 4.277 0 007.998.162 5.115 5.115 0 006.744 0c-.776 0-1.488.186-2.136.558-.648.372-1.188.91-1.62 1.614V.384H0v12.288h2.988zm13.472.384c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0020.054.828C18.986.276 17.788 0 16.46 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm15.704 2.568c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0035.758.828C34.69.276 33.492 0 32.164 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm12.608 2.184V4.896c0-.44.126-.85.378-1.23s.596-.686 1.032-.918c.436-.232.93-.348 1.482-.348.8 0 1.432.258 1.896.774.464.516.696 1.206.696 2.07v7.428h2.988V4.908c0-.44.124-.852.372-1.236a2.717 2.717 0 011.02-.924c.432-.232.92-.348 1.464-.348.8 0 1.438.266 1.914.798s.714 1.254.714 2.166v7.308h2.988V4.548c0-.952-.198-1.766-.594-2.442a4.051 4.051 0 00-1.62-1.56C58.818.182 58.036 0 57.156 0c-.928 0-1.744.21-2.448.63-.704.42-1.332 1.022-1.884 1.806-.312-.744-.846-1.336-1.602-1.776C50.466.22 49.604 0 48.636 0c-.752 0-1.442.152-2.07.456-.628.304-1.226.772-1.794 1.404V.384h-2.988v12.288h2.988z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );

  const hamburger = (
    <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );

  const iconClose = (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
        fill="#000"
        fillRule="evenodd"
        opacity=".201"
      />
    </svg>
  );

  const iconArrow = (
    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
        fill="#000"
        fillRule="nonzero"
      />
    </svg>
  );

  const iconRight = (
    <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" />
    </svg>
  );

  const iconLeft = (
    <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
    </svg>
  );

  const [iconMenu, setIconMenu] = useState(hamburger);
  const [slideNum, setSlideNum] = useState(1);
  const [slideImg, setSlideImg] = useState(desktopImg1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navMenuRef = useRef(null);

  //GETTING SCREEN WIDTH AND SETTING SLIDES
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);

    //setting mainImg upon page load
    if (windowWidth < 600) {
      setSlideImg(mobileImg1);
    } else {
      setSlideImg(desktopImg1);
    }

    //update slide image as slideNum changes
    if (windowWidth < 600) {
      if (slideNum === 1) {
        setSlideImg(mobileImg1);
      }
      if (slideNum === 2) {
        setSlideImg(mobileImg2);
      }
      if (slideNum === 3) {
        setSlideImg(mobileImg3);
      }
    } else if (windowWidth > 600) {
      if (slideNum === 1) {
        setSlideImg(desktopImg1);
      }
      if (slideNum === 2) {
        setSlideImg(desktopImg2);
      }
      if (slideNum === 3) {
        setSlideImg(desktopImg3);
      }
    }
  }, [windowWidth, slideNum]);

  //MAKE SLIDES CHANGE EVERY 10SECS
  // useEffect(() => {
  //   setInterval(() => {
  //     if (slideNum > 0 && slideNum < 4) {
  //       setSlideNum(slideNum + 1);
  //     } else if (slideNum > 3) {
  //       setSlideNum(1);
  //     }

  //     console.log(slideNum);
  //   }, 2000);
  // }, [slideNum]);

  const prevSlide = () => {
    if (slideNum === 1) {
      setSlideNum(1);
    } else if (slideNum >= 1 && slideNum < 4) {
      setSlideNum(slideNum - 1);
      console.log(slideNum);
    }
  };
  const nextSlide = () => {
    if (slideNum >= 0 && slideNum < 3) {
      setSlideNum(slideNum + 1);
      console.log(slideNum);
    }
  };

  const toggleMenu = () => {
    const navMenu = navMenuRef.current;
    navMenu.classList.toggle("hideNavList");
  };

  return (
    <div className="App">
      <section className="topSection">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className="homeBox"
        >
          <nav>
            <div className="logoGrp">
              <div className="logo">{logo}</div>
              <div className="menu" onClick={toggleMenu}>
                {iconMenu}
              </div>
            </div>

            <div className="navListContainer hideNavList" ref={navMenuRef}>
              <div className="menu" onClick={toggleMenu}>
                {iconClose}
              </div>

              <ul className="navList">
                <li className="navText">
                  <a href="#">home</a>
                </li>
                <li className="navText">
                  <a href="#">shop</a>
                </li>
                <li className="navText">
                  <a href="#">about</a>
                </li>
                <li className="navText">
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
          </nav>

          <img src={slideImg} alt="" className="min-h-full" />

          {/* <div className="absolute bottom-0 right-0 md:hidden flex flex-row items-center">
            <button className="ctrlBtn" onClick={prevSlide}>
              {iconLeft}
            </button>
            <button className="ctrlBtn" onClick={nextSlide}>
              {iconRight}
            </button>
          </div> */}
        </motion.div>

        <div className="topTextContainer">
          {slideNum === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              className="topTextBox"
            >
              <h1 className="text-4xl font-bold mb-5">
                Discover innovative ways to decorate
              </h1>
              <p className="text mb-5">
                We provide unmatched quality,comfort and style for property
                owners across the country.Our experts combine form and function
                in bringing your vision to life.Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>

              <button className="uppercase font-light flex flex-row items-center gap-3 tracking-evenWider text-lg text-gray-400 hover:scale-110 transition ease-in-out duration-300 mb-5">
                <p>shop now</p>
                <div>{iconArrow}</div>
              </button>
            </motion.div>
          )}

          {slideNum === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              className="topTextBox"
            >
              <h1 className="text-4xl font-bold mb-5">
                We are available all across the globe
              </h1>
              <p className="text mb-5">
                With stores all over the world, it's easy for you to find
                furniture for your home or place of business. Locally we're in
                most major cities throughout the country. Find the branch
                nearest to you using our store locator. Any questions? Don't
                hesitate to contact us today
              </p>

              <button className="uppercase font-light flex flex-row items-center gap-3 tracking-evenWider text-lg text-black hover:scale-110 transition ease-in-out duration-300 mb-5">
                <p>shop now</p>
                <div>{iconArrow}</div>
              </button>
            </motion.div>
          )}

          {slideNum === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              className="topTextBox"
            >
              <h1 className="text-4xl font-bold mb-5">
                Manufactured with the best materials
              </h1>
              <p className="text mb-5">
                Our modern furniture store provides a high level of quality. Our
                company has invested in advanced technology to ensure that every
                product is made as perfect and consistent as possible. With
                three decades of experience in this industry, we understand what
                customers want for their home and office.
              </p>

              <button className="uppercase font-light flex flex-row items-center gap-3 tracking-evenWider text-lg text-black hover:scale-110 transition ease-in-out duration-300 mb-5">
                <p>shop now</p>
                <div>{iconArrow}</div>
              </button>
            </motion.div>
          )}

          <div className="ctrlBtnGrp ">
            <button className="ctrlBtn" onClick={prevSlide}>
              {iconLeft}
            </button>
            <button className="ctrlBtn" onClick={nextSlide}>
              {iconRight}
            </button>
          </div>
        </div>
      </section>

      <section className="bottomSection">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className="bottomImgBox"
        >
          <img src={imgAboutDark} className="min-h-full" alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="bottomTextBox"
        >
          <h1 className="text-lg tracking-widest font-bold mb-3 uppercase">
            About our furniture
          </h1>
          <p className="text mb-5">
            We provide unmatched quality,comfort and style for property owners
            across the country.Our experts combine form and function in bringing
            your vision to life.Create a room in your own style with our
            collection and make your property a reflection of you and what you
            love.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          className="bottomImgBox"
        >
          <img src={imgABoutLight} className="min-h-full" alt="" />
        </motion.div>
      </section>
    </div>
  );
}

export default App;
