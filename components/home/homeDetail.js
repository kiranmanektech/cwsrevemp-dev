/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import lottieFire from "/public/lottie/fire.json";
import lottieMoke from "/public/lottie/green-smoke.json";
import lottie from "lottie-web";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HomeDetails({
  homeSettings,
  portfolioList,
  testimonialSettings,
}) {
  const videoRef = useRef(null);
  const perChunk = 6;
  const parts = 3;
  const chunkSize = Math.ceil(homeSettings?.businessImageSlider.length / parts);

  const businessImageArray = Array.from({ length: parts }, (_, index) =>
    homeSettings?.businessImageSlider.slice(
      index * chunkSize,
      (index + 1) * chunkSize
    )
  );

  const result = portfolioList.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  SwiperCore.use([
    Navigation,
    Pagination,
    EffectCreative,
    Autoplay,
    Keyboard,
    Mousewheel,
  ]);
  var settingsB = {
    // Install modules
    modules: [Navigation, Pagination, EffectCreative],
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      319: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },
    },
  };

  var bild1 =
    '<div className="menuSlider swipe-item-0"><img src="images/services/webDesign-icon.svg" /></div>';
  var bild2 =
    '<div className="menuSlider swipe-item-1"><img src="images/services/customSystem-icon.svg" /></div>';
  var bild3 =
    '<div className="menuSlider swipe-item-2"><img src="images/services/ecommerce-icon.svg" /></div>';
  var bild4 =
    '<div className="menuSlider swipe-item-3"><img src="images/services/hosting-icon.svg" /></div>';
  var bild5 =
    '<div className="menuSlider swipe-item-4"><img src="images/services/whiteLabel-icon.svg" /></div>';
  var bild6 =
    '<div className="menuSlider swipe-item-5"><img src="images/services/socialMedia-icon.svg" /></div>';
  var menu = [bild1, bild2, bild3, bild4, bild5, bild6];

  var settingsD = {
    slidesPerView: 6,
    spaceBetween: 25,
  };

  const handleModal = (title, content, image, url) => {
    document.querySelector(".sideModal-title h3").innerHTML = title;
    document.querySelector(".modal-content").innerHTML = content;
    document.querySelector(".sideModal-title a").href = url;
    document.querySelector(".main-project-data").src = image;
    document.querySelector(".side-modal").classList.toggle("side-modal-off");
    ["overflow-hidden", "toggleShadow"].map((v) =>
      document.querySelector("body").classList.toggle(v)
    );
  };
  const handleMouseEnter = (e) => {
    var list;
    list = document.querySelectorAll(".bild-cont");
    for (var i = 0; i < list.length; ++i) {
      list[i].classList.add("hovOnRemove");
    }
    e.currentTarget.classList.remove("hovOnRemove");
  };

  const handleCheck = () => {
    document.querySelector(".side-modal").classList.toggle("side-modal-off");
    ["overflow-hidden", "toggleShadow"].map((v) =>
      document.querySelector("body").classList.toggle(v)
    );
  };

  const handleMouseLeave = (e) => {
    var listR;
    listR = document.querySelectorAll(".bild-cont");
    for (var i = 0; i < listR.length; ++i) {
      listR[i].classList.remove("hovOnRemove");
    }
  };

  const handleClose = () => {
    document.querySelector(".side-modal").classList.toggle("side-modal-off");
    ["overflow-hidden", "toggleShadow"].map((v) =>
      document.querySelector("body").classList.toggle(v)
    );
  };

  const scroll2El = (elID) => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop,
      behavior: "smooth",
    });
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };

  // Fire Button Hover Animation
  const fireContainer = useRef(null);
  const fireContainer1 = useRef(null);
  useEffect(() => {
    const bannerVideo = document.querySelector(".bannerVideo video");
    const handleMetadataLoaded = () => {
      bannerVideo.play();
      bannerVideo.removeEventListener("loadedmetadata", handleMetadataLoaded);
    };

    bannerVideo.addEventListener("loadedmetadata", handleMetadataLoaded);
    const videoElement = videoRef.current;
    videoElement.play();
    lottie.loadAnimation({
      container: fireContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: lottieFire,
    });

    lottie.loadAnimation({
      container: fireContainer1.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: lottieFire,
    });

    let fireBtn = document.querySelector(".fireBtn");
    let fireBtn1 = document.querySelector(".fireBtn1");

    fireBtn.addEventListener("mouseenter", (e) => {
      lottie.play();
    });

    fireBtn.addEventListener("mouseleave", (e) => {
      lottie.stop();
    });

    fireBtn1.addEventListener("mouseenter", (e) => {
      lottie.play();
    });

    fireBtn1.addEventListener("mouseleave", (e) => {
      lottie.stop();
    });

    let iconMenu = document.querySelector(".lotti_smoke");
    lottie.loadAnimation({
      container: iconMenu,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: lottieMoke,
    });

    return () => {
      bannerVideo.removeEventListener("loadedmetadata", handleMetadataLoaded);
      lottie.destroy();
    };
  }, []);

  return (
    <main>
      <section className="homeBanner">
        <div className="container position-relative">
          <div className="row g-0 position-relative">
            <div className="col-12">
              <div
                className="title text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1>
                  <span>{homeSettings.bannerTitle}</span>
                </h1>
                <div className="new-title">
                  {homeSettings.bannerSubtitle}
                  <em>
                    {/* <TypeAnimation
                                            sequence={["Simplify.", 200, "Best."]}
                                            speed={300}
                                            deletionSpeed={200}
                                            cursor={true}
                                            wrapper="span"
                                            repeat={Infinity}
                                        /> */}
                    <span className="hs-1">simplify your workflow. </span>
                    <span className="hs-2">delight your customers. </span>
                    <span className="hs-3">boost your profits. </span>
                  </em>
                </div>
              </div>
              {homeSettings?.bannerVideoUrl && (
                <div className="bannerVideo">
                  <video ref={videoRef} autoPlay muted loop playsinline>
                    <source
                      src={homeSettings.bannerVideoUrl}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
          <div className="scrollForMore">
            <button onClick={onBtnClick} goto="contacts">
              <div className="inner-cirl">
                <div className="arrow-svg">
                  <img src="images/arrow.svg" />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="brandWeServe">
          <div className="brandIcon shopify">
            <img
              className="normlImg"
              src="images/shopify-brand-gray.svg"
              alt=""
            />
            <img
              className="hoverImg"
              src="images/shopify-brand-color.svg"
              alt=""
            />
          </div>
          <div className="brandIcon wordpress">
            <img
              className="normlImg"
              src="images/wordpress-brand-gray.png"
              alt=""
            />
            <img
              className="hoverImg"
              src="images/wordpress-brand-color.png"
              alt=""
            />
          </div>
          <div className="brandIcon framer">
            <img
              className="normlImg"
              src="images/framer-brand-gray.svg"
              alt=""
            />
            <img
              className="hoverImg"
              src="images/framer-brand-color.svg"
              alt=""
            />
          </div>
        </div>
        <div className="friendly-atmos" id="contacts">
          <div className="container p-0">
            <div className="friendly-atmos-inner">
              <div className="row g-0 align-items-center">
                <div className="col-12 col-lg-7 position-relative order-lg-0 order-1">
                  <div
                    className="face-information overflow-hidden"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    dangerouslySetInnerHTML={{
                      __html: homeSettings.friendlyTitle,
                    }}
                  ></div>
                  <div className="demo-container">
                    <div className="progress-bar">
                      <div className="progress-bar-value"></div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 order-lg-1 order-0">
                  <div className="atmos-faces">
                    <div className="face-1">
                      <img src="images/crewImg1.jpg" alt="" />
                    </div>
                    <div className="face-2">
                      <img src="images/crewImg2.jpg" alt="" />
                    </div>
                    <div className="face-3">
                      <img src="images/crewImg3.jpg" alt="" />
                    </div>

                    {/* <img
                      className="img-fluid"
                      src={
                        homeSettings.friendlyImage.sourceUrl
                          ? homeSettings.friendlyImage.sourceUrl
                          : "/images/face.png"
                      }
                      alt=""
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-new">
            <img className="cr-big" src="/images/path10397.svg" alt="" />
          </div>
        </div>
        <div className="companyDevelopment">
          <div className="container">
            <div className="title text-center">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-white mb-3"
                dangerouslySetInnerHTML={{ __html: homeSettings.aboutTitle }}
              ></h2>
              <em
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="text-white d-inline-block bunch_em"
                dangerouslySetInnerHTML={{ __html: homeSettings.aboutSubtitle }}
              ></em>
            </div>

            {homeSettings.aboutSlider && (
              <>
                <div
                  className="menuall-slider"
                  id="manual-slider"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {/* <Swiper className="slider-object" {...settingsD}>
                    {homeSettings.aboutSlider.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="sliderBox">
                            <div className="slideInner">
                              <div
                                className="icon"
                                dangerouslySetInnerHTML={{
                                  __html: menu[index],
                                }}
                              ></div>
                              <h5>{item.aboutDomain}</h5>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}

                    <div className="swiper-pagination"></div>
                  </Swiper> */}
                  <div className="slider-object d-flex flex-wrap justify-content-between">
                    {homeSettings.aboutSlider.map((item, index) => {
                      return (
                        <div
                          className="sliderObjectInner mx-xl-2 px-xl-0 px-2 mb-3"
                          key={index}
                        >
                          <Link href={item.domainUrl}>
                            <div className="sliderBox">
                              <div className="slideInner">
                                <div
                                  className="icon"
                                  dangerouslySetInnerHTML={{
                                    __html: menu[index],
                                  }}
                                ></div>
                                <h5>{item.aboutDomain}</h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-xl-5 pt-4">
                  <Link className="btn btn-yellow fireBtn" href="/services">
                    <span>Wait, there’s more… </span>
                    {/* <span className="fireContainer" ref={fireContainer} /> */}
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {homeSettings.whyUsBlocks && (
        <section className="banner-yll" id="moveToYellow">
          <div className="container banner-after position-relative">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <h3>Why Choose Us</h3>
                </div>
                <div className="chooseUs-msg">
                  <ul className="list-unstyled m-0">
                    {homeSettings.whyUsBlocks.map((item, index) => {
                      return (
                        <li key={index}>
                          <div className="mini-card">
                            <div className="d-flex flex-lg-row flex-column align-items-center">
                              <div className="mini-child">
                                {item.whyUsTitle && <h5>{item.whyUsTitle} </h5>}
                                {item.whyUsDescription && (
                                  <p>{item.whyUsDescription}</p>
                                )}
                              </div>
                              <div className="mini-child">
                                {index == 0 && (
                                  <div className="right-bild-pull hands-bild">
                                    <div className="inline-item">
                                      <img src="images/bulb-1.png" />
                                    </div>
                                    <div className="inline-item">
                                      <img src="images/bulb-3d.png" />
                                    </div>
                                    <div className="inline-item">
                                      <img src="images/bulb-2.png" />
                                    </div>
                                  </div>
                                )}
                                {index == 1 && (
                                  <div className="right-bild-pull rocket-bild">
                                    <div className="inline-item">
                                      <img src="images/rocket-1.png" />
                                    </div>
                                    <div className="inline-item">
                                      <img src="images/rocket-3d.png" />
                                    </div>
                                    <div className="inline-item">
                                      <img src="images/rocket-2.png" />
                                    </div>
                                    <div className="inline-item">
                                      <img src="images/rocket-3.png" />
                                    </div>
                                  </div>
                                )}
                                {index == 2 && (
                                  <div className="right-bild-pull voice-bild">
                                    <div className="inline-item">
                                      <img src="images/mic-2.png" />
                                    </div>
                                    <div className="inline-item">
                                      <img src="images/voice-1.png" />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="all-business bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-xl-6">
              <div className="update-pseudo">
                <div className="" data-aos="fade-up" data-aos-duration="1000">
                  <img
                    className="flyingImg mb-2"
                    src="images/rectangle3434.png"
                  />
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: homeSettings.businessTitle,
                    }}
                  ></h2>
                  <em className="yello-title-em">
                    {homeSettings.businessSubtitle}
                  </em>
                </div>
              </div>
            </div>
            {businessImageArray && (
              <div className="col-12 col-xl-6 mt-xl-0 mt-4 pt-xl-0 pt-3">
                <div className="d-none d-xl-block">
                  <div className="vr-row-parent">
                    {businessImageArray.map((item, index) => {
                      const directionV = index === 1 ? true : false;
                      return (
                        <div className="child-row" key={`ibi-${index}`}>
                          <Swiper
                            direction={"vertical"}
                            slidesPerView={4.2}
                            spaceBetween={50}
                            autoplay={{
                              delay: 1500,
                              disableOnInteraction: false,
                              reverseDirection: directionV,
                            }}
                            loop={true}
                            breakpoints={{
                              1200: {
                                slidesPerView: 5.5,
                                spaceBetween: 20,
                              },
                              1400: {
                                slidesPerView: 4.5,
                                spaceBetween: 30,
                              },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                          >
                            {item.map((element, elementIndex) => {
                              return (
                                <SwiperSlide key={`eleI-${elementIndex}`}>
                                  <div class="sub-child">
                                    <img
                                      src={element.businessImage.sourceUrl}
                                    />
                                  </div>
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container-fluid p-0 d-xl-none">
          <div className="row g-0">
            <div className="col-12">
              <div className="vr-row-parent">
                {businessImageArray.map((item, index) => {
                  const directionV = index === 1 ? true : false;
                  return (
                    <div className="child-row" key={`ibi-${index}`}>
                      <Swiper
                        //direction={"vertical"}
                        slidesPerView={4.2}
                        spaceBetween={50}
                        autoplay={{
                          delay: 1500,
                          disableOnInteraction: false,
                          reverseDirection: directionV,
                        }}
                        loop={true}
                        breakpoints={{
                          319: {
                            slidesPerView: 2,
                            spaceBetween: 14,
                          },
                          360: {
                            slidesPerView: 2.5,
                            spaceBetween: 14,
                          },
                          425: {
                            slidesPerView: 3,
                            spaceBetween: 14,
                          },
                          568: {
                            slidesPerView: 4,
                            spaceBetween: 14,
                          },
                          768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                          1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                          },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        {item.map((element, elementIndex) => {
                          return (
                            <SwiperSlide key={`eleI-${elementIndex}`}>
                              <div class="sub-child">
                                <img src={element.businessImage.sourceUrl} />
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {result && (
        <>
          <section className="project-area">
            <div className="title">
              <h2 className="text-center text-white">
                Check out our work. Be blown away.
              </h2>
            </div>
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 position-relative">
                  <div className="banner-projects">
                    {result.map((item, index) => {
                      return (
                        <div className="project-part" key={index}>
                          {item.map((i, j) => {
                            return (
                              <div
                                className="bild-cont"
                                key={j}
                                onMouseLeave={(e) => handleMouseLeave(e)}
                                onMouseEnter={(e) => handleMouseEnter(e)}
                                onClick={() =>
                                  handleModal(
                                    i.node.title,
                                    i.node.content,
                                    i.node.portfolioSettings.modalImage
                                      .sourceUrl,
                                    i.node.portfolioSettings.portfolioUrl
                                  )
                                }
                              >
                                {i.node?.featuredImage?.node?.sourceUrl && (
                                  <Link href="">
                                    <img
                                      className=""
                                      src={i.node.featuredImage.node.sourceUrl}
                                    />
                                    {/* <Image className='' width={} height={} src={i.node.featuredImage.node.sourceUrl} /> */}
                                  </Link>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-table ms-auto me-auto center-button-project">
              <Link href="/portfolio" className="btn btn-yellow fireBtn1">
                <span>View Portfolio </span>
                <span className="fireContainer" ref={fireContainer1} />
              </Link>
            </div>
          </section>
          <div className="side-modal">
            <div className="bg-container">
              <div className="side-modal-close" onClick={handleClose}>
                <button type="button" className="btn btn-default">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
                      className="arrowLeft"
                      fill="#FDB627"
                    />
                  </svg>
                  Back
                </button>
              </div>
              <div className="project-detail">
                <div className="sideModal-title">
                  <h3>Hashkifa</h3>
                  <div className="modal-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <Link href="#" className="btn btn-blue">
                    Visit Websites
                  </Link>
                </div>
                <div className="device-anim">
                  <div className="site-image-anim1">
                    <div className="device-holder">
                      <div className="main-device">
                        <img src="images/macws.png" />
                      </div>
                      <div className="main-project-holder">
                        <img
                          className="main-project-data"
                          src="images/bild-full.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {testimonialSettings.clientTestimonials && (
        <section className="about-us">
          {/* <div className="floating-object"></div> */}
          <div className="aboutUs-title position-relative zindex-2">
            <div className="row">
              <div className="col-12 about-info overflow-hidden">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                  {testimonialSettings.testimonialsThemeTitle}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {testimonialSettings.testimonialsThemeSubtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="slider-area">
            <Swiper className="slider-scroller" {...settingsB}>
              {testimonialSettings.clientTestimonials.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="raw-card">
                      <div className="mb-4">
                        {item.authorDescription && (
                          <div
                            className="para-side-detail"
                            dangerouslySetInnerHTML={{
                              __html: item.authorDescription,
                            }}
                          />
                        )}
                      </div>
                      <div className="other-detail d-flex align-items-center">
                        {item.authorImage && (
                          <div className="sm-user-bild">
                            <div className="circle_area">
                              <img src={item.authorImage.sourceUrl} alt="" />
                            </div>
                          </div>
                        )}
                        <h5>
                          {item.authorName}
                          <span>{item.authorDesignation}</span>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </section>
      )}
      {homeSettings.processBlocks && (
        <section className="simple-process">
          <div className="container position-relative zindex-2">
            <div className="row">
              <div className="col-12">
                {homeSettings.processMainTitle && (
                  <div className="text-center overflow-hidden title">
                    <h2
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      dangerouslySetInnerHTML={{
                        __html: homeSettings.processMainTitle,
                      }}
                    ></h2>
                  </div>
                )}

                <div className="card-items">
                  <div className="row g-37">
                    {homeSettings.processBlocks.map((item, index) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-xl-3 card-items-cols"
                          key={index}
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay="300"
                        >
                          <div className="card-container">
                            {item.processImage && (
                              <div className="card-bild">
                                <img src={item.processImage.sourceUrl} alt="" />
                              </div>
                            )}
                            <div className="card-mor-detail">
                              <h6 className="title-cr">{item.processTitle}</h6>
                              <p>{item.processDescription}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="process__action d-table">
                  <Link class="btn btn-yellow" href="/contact">
                    <span>Let’s start your process today. </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
