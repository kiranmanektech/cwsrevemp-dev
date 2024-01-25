/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import SwiperCore, {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";
import HandshakeImg from "../../public/images/human-hand.png";
import TorusImg from "../../public/images/torus.png";
import StarsImg from "../../public/images/3d-stars.png";
import PuzzleImg from "../../public/images/3d​-puzzle.png";
import gettingStartImg from "../../public/images/gettingStartImg.png";
import WebDesignImg from "../../public/images/web-design.png";
import GoogleRankImg from "../../public/images/google-white.svg";
import DiamondImg from "../../public/images/diamond-white.svg";
import TopTalentImg from "../../public/images/topTalent-white.svg";
import AcquisitionImg from "../../public/images/acquisition-white.svg";
import QualityImg from "../../public/images/quality-white.svg";
import BusinessPickupImg from "../../public/images/business-pickup.png";
import KidsNHeartImg from "../../public/images/Kids-N-Heart.jpg";
import CompellingCopyImg from "../../public/images/compelling-copy.svg";
import DistinctiveDesignImg from "../../public/images/distinctive-design.svg";
import PopupEnrollmentFormImg from "../../public/images/popup-enrollment-form.svg";
import StrategicCareersImg from "../../public/images/strategic-careers-page.svg";
import BlogResourcesImg from "../../public/images/blog-and-resources.svg";
import ChatBoxImg from "../../public/images/chat-box.svg";
import OptionalUpgradeImg from "../../public/images/optional-upgrade-img.png";
import AbaAgencyImg1 from "../../public/images/aba-website-1.png";
import AbaAgencyImg2 from "../../public/images/aba-website-2.png";
import AbaAgencyImg3 from "../../public/images/aba-website-3.png";
import AbaAgencyImg4 from "../../public/images/aba-website-4.png";
import MobileResponsivenessImg from "../../public/images/mobile-responsiveness.png";
import CustomerServiceImg from "../../public/images/customer-service.png";
import QuickTurnaroundTimeImg from "../../public/images/quick-turnaround-time.png";
import HostingOptionsImg from "../../public/images/hosting-options.png";
import WebsiteSpeedImg from "../../public/images/website-speed.png";
import CompetitiveRatesImg from "../../public/images/competitive-rates.png";

export default function AbaAgencies() {

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
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
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
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
    },
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".torusLandingContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: torusLanding,
    });

    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) {
        gsap.set(".dragWithme", { top: "-10px" });
        const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });

        ScrollTrigger.create({
          trigger: ".gl_area",
          start: "-=600",
          endTrigger: "#end_anim",
          end: "+=6000",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: liftArow,
          once: true,
        });

        gsap.to(".profitDrag", { scaleY: 0 });
        const action = gsap.to(".profitDrag", {
          scaleY: "100%",
          transformOrigin: "top bottom",
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: "#start_anim",
          start: "-=600",
          endTrigger: "#end_anim",
          end: "+=6000",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: action,
          once: true,
        });

        const panels = gsap.utils.toArray(".gl_area .benifit_ttl");
        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "-=600",
            end: "center",
            markers: false,
            onEnter: () => {
              panels[i].classList.add("activate");
            },
            // onEnterBack: () => {
            //   panels[i].classList.remove("activate");
            // },
          });
        });
      } else {
        gsap.set(".dragWithme", { top: "-10px" });
        const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });

        ScrollTrigger.create({
          trigger: ".gl_area",
          start: "-=200",
          endTrigger: ".end_anim",
          end: "bottom +=300",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: liftArow,
          once: true,
        });

        gsap.to(".profitDrag", { scaleY: 0 });
        const action = gsap.to(".profitDrag", {
          scaleY: "100%",
          transformOrigin: "top bottom",
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: ".start_anim",
          start: "-=200",
          endTrigger: ".end_anim",
          end: "bottom +=300",
          markers: false,
          scrub: -2,
          pinSpacing: false,
          animation: action,
          once: true,
        });

        const panels = gsap.utils.toArray([
          ".gl_area .benifit_ttl",
          ".gl_area .benifit_ttl_mb",
        ]);
        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "-=250",
            end: "center",
            markers: false,
            onEnter: () => {
              panels[i].classList.add("activate");
            },
            // onEnterBack: () => {
            //   panels[i].classList.remove("activate");
            // },
          });
        });
      }
    }

    document.body.classList.add("aba-agencies");

    return () => {
      document.body.classList.remove("aba-agencies");
    };
  }, []);

  return (
    <main>
      <div className="banner__overlap">
        <div className="container-xl bbn_1">
          <div className="bottom_shape">
            <div className="floor-1">
              <div className="torusLandingLottie">
                <div className="torusLandingContainer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="abaAgencyBanner">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>
                We know websites.{" "}
                <em className="fw-bold text-warning">Especially ABA.</em>
              </h1>
              <p className="mb-4 pb-2">
                There’s a reason we’re the first choice of hundreds of ABA
                agencies looking to impress online.
              </p>
              <div className="text-center">
                <img src={HandshakeImg.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abaAgencyVideoSec">
          <div className="abaAgencyVideo">
            <video autoPlay muted loop playsInline>
              <source
                src="https://cms.cwsio.com/wp-content/uploads/2024/01/aba-agency-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="abaAgencyVideoContent">
              <div className="container">
                <h4 className="text-white fw-bold mb-4">With us, <span className="text-warning">your ABA agency</span> stands out from the others.</h4>
                <p className="fs-20 mb-0">We’re not just web developers; we’re website builders and writers who really know the ABA therapy field. Over the years, we’ve teamed up with countless ABA operators to build websites that not only look great, but also meet the needs of the therapy world.</p>
              </div>
            </div>
        </div>
      </section>
      <section className="abaNeeds">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 px-lg-0">
              <div className="title text-center mb-5 pb-5">
                <img className="torusImg mb-4 pb-3" src={TorusImg.src} alt="" />
                <h3 className="text-white ft-gilroy_b fw-bold mb-4 pb-2">
                  When you team up with us, you become the proud owner of a
                  stand-out website that shows off your agency's message and
                  brings in more clients and employees.
                </h3>
                <a
                  href="#"
                  className="btn btn-yellow ft-gilroy_b fw-bold d-inline-flex px-5"
                >
                  My ABA agency needs this
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-auto">
              <div className="needBox">
                <div className="boxContent">
                  <img src={PuzzleImg.src} alt="" />
                  <h3>100+</h3>
                  <p>ABA therapy clients</p>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="needBox">
                <div className="boxContent">
                  <img src={WebDesignImg.src} alt="" />
                  <h3>2 ABA</h3>
                  <p>
                    Websites launched <br />
                    monthly
                  </p>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="needBox">
                <div className="boxContent">
                  <img src={StarsImg.src} alt="" />
                  <h3>5</h3>
                  <p>
                    <a href="#">Star client reviews</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abaScrollSection">
        <div className="container">
          <div className="gl_area aba-agency_inner">
            <div className="container-xl position-relative p-0">
              <div className="line_anim">
                <div className="profitDrag"></div>
                <div className="dragWithme">
                  <img src="../images/smArrow.png" />
                </div>
              </div>
              <section
                className="row get_row g-0 sec-1 start_anim"
                id="start_anim"
              >
                <div className="col-12 col-md-1 d-none d-md-block benit__ttl">
                  <div className="benifit_ttl">
                    <h3 className="vr-title">Benefits</h3>
                  </div>
                </div>
                <div className="col-12 col-md-11 ps-md-5 pt-md-5">
                  <div className="d-md-none">
                    <div className="benifit_ttl_mb mb-stl pd-48-15">
                      <h3 className="vr-title_mb">Benefits</h3>
                    </div>
                  </div>
                  <div className="title mb-5">
                    <h5 className="text-white fw-bold">
                      Your website is not just your online address. <br />
                      It’s a platform for you to show the world what you’ve got.
                    </h5>
                  </div>
                  <div className="aba-benefitsBlock">
                    <h4 className="fs-20 text-warning fw-semibold mb-3">
                      A well-crafted website can help you
                    </h4>
                    <div className="abaBenefits">
                      <div className="row">
                        <div className="col">
                          <div className="card benefitCard">
                            <div className="card-body">
                              <div className="card-icon mb-3">
                                <img src={GoogleRankImg.src} alt="" />
                              </div>
                              <p className="card-title">
                                Rank higher on Google
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card benefitCard">
                            <div className="card-body">
                              <div className="card-icon mb-3">
                                <img src={DiamondImg.src} alt="" />
                              </div>
                              <p className="card-title">
                                Showcase your unique approach
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card benefitCard">
                            <div className="card-body">
                              <div className="card-icon mb-3">
                                <img src={TopTalentImg.src} alt="" />
                              </div>
                              <p className="card-title">
                                Attract top <br />
                                talent
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card benefitCard">
                            <div className="card-body">
                              <div className="card-icon mb-3">
                                <img src={AcquisitionImg.src} alt="" />
                              </div>
                              <p className="card-title">
                                Engage prospective clients
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card benefitCard">
                            <div className="card-body">
                              <div className="card-icon mb-3">
                                <img src={QualityImg.src} alt="" />
                              </div>
                              <p className="card-title">
                                Offer valuable resources to parents
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="row get_row g-0 kickStartSec">
                <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
                  <div className="pd-48-15">
                    <div className="benifit_ttl whyUs_title align-self-center">
                      <h3 className="vr-title">Why Us</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-11">
                  <div className="d-md-none">
                    <div className="benifit_ttl_mb mb-stl pd-48-15">
                      <h3 className="vr-title_mb">Why Us</h3>
                    </div>
                  </div>
                  <div className="row g-0 why__us align-items-center">
                    <div className="col-12 col-md-7 ps-md-5">
                      <div className="">
                        <h5 className="text-warning mb-3">Just getting started? <br/><span className="text-white">The kickstart you’re looking for</span></h5>
                        <p>ABA start-ups count on the CWS team to help crystallize their vision, build a brand, and share their voice. With friendly professionals who are here to help your agency get off the ground fast, you’ll love a winning combo of unmatched customer care and web design expertise.</p>
                      </div>
                    </div>
                    <div class="col-lg-5 text-lg-end text-center groupImg"><img class="img-fluid" src={gettingStartImg.src} /></div>
                  </div>
                  <div className="row g-0 align-items-center">
                    <div class="col-lg-6 ps-lg-5">
                      <img src={BusinessPickupImg.src} alt="" />
                    </div>
                    <div className="col-12 col-md-6 ps-md-0">
                      <div className="">
                        <h5 className="text-warning mb-3">Been here a while? <br/><span className="text-white">Your business pick-me-up</span></h5>
                        <p className="fs-20">With an experienced team of website experts behind your project, you’ll get an impressive product that highlights your agency’s uniqueness. Our ABA sites don’t only look great, but also incorporate ABA industry knowledge that targets parents’ concerns and reaches potential employees. Give your agency a boost with a striking online space that is SEO-optimized.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center beautifulWork">
                    <div className="col-lg-12">
                      <div className="work-slider-area">
                        <h2 className="text-warning fw-bold">Check out <br/>our beautiful <br/>work.</h2>
                        <Swiper className="slider-scroller" {...settingsB}>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-button-next"></div>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
                
              </section>

              <section className="row get_row g-0 serviceDetailSec">
                <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
                  <div className="pd-48-15">
                    <div className="benifit_ttl align-self-center">
                      <h3 className="vr-title">Service Details</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-11">
                  <div className="d-md-none">
                    <div className="benifit_ttl_mb mb-stl pd-48-15">
                      <h3 className="vr-title_mb">Service Details</h3>
                    </div>
                  </div>
                  <div className="row service_details ps-lg-5">
                    <div className="col-lg-4">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={CompellingCopyImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">Compelling copy</h3>
                          <p className="card-content">Our in-house copywriters incorporate ABA industry knowledge to address parent concerns, offer career opportunities, and highlight your agency’s uniqueness.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={DistinctiveDesignImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">Distinctive design</h3>
                          <p className="card-content">Highly customized design ensures your website reflects your agency’s identity and appeals to your target audience.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={PopupEnrollmentFormImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">Popup enrollment form</h3>
                          <p className="card-content">Make it easy for people to sign up quickly, give you essential information, and access your services faster.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={StrategicCareersImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">Strategic careers page</h3>
                          <p className="card-content">Showcase your unique work environment. Attract top talent for a strong team that boosts therapy quality and agency success.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={BlogResourcesImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">Blog and resources</h3>
                          <p className="card-content">Share helpful information, establish your agency’s expertise, and build trust with your audience.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card serviceDetailCard">
                        <div className="card-icon">
                          <img src={ChatBoxImg.src} alt="" />
                        </div>
                        <div className="card-body">
                          <h3 className="text-warning text-center fw-bold mb-3">Chat box</h3>
                          <p className="card-content">Help people quickly get personalized information and support for ABA therapy services, making communication easier and more engaging.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="row get_row g-0 optional_upgrades">
                <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
                  <div className="pd-48-15">
                    <div className="benifit_ttl align-self-center">
                      <h3 className="vr-title">Optional Upgrades:</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-11 pd-30-l-mix time_acquainted">
                  <div className="d-md-none">
                    <div className="benifit_ttl_mb mb-stl pd-48-15">
                      <h3 className="vr-title_mb">Optional Upgrades:</h3>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center">
                    <div className="col-12 col-md-6 ps-lg-5 leftColumn">
                      <h5 className="mb-3">You want your business seen, <br/>and so do we. </h5>
                      <p className="fs-20 mb-3 text-black">Our SEO specialists strategically incorporate keywords, backlinks, and meta tags to make your website more visible and attractive to search engines. Now more people can find you faster.</p>
                      <a href="#" className="btn btn-blue rounded-pill text-white px-5">I need this.</a>
                    </div>
                    <div className="col-md-6">
                      <div className="optionalImgOuter">
                        <img className="optionalImg" src={OptionalUpgradeImg.src} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="row get_row g-0 branding_package">
                <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
                  <div className="pd-48-15">
                    <div className="benifit_ttl align-self-center">
                      <h3 className="vr-title">Branding Package</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-11 brandingPackageCol">
                  <div className="d-md-none">
                    <div className="benifit_ttl_mb mb-stl pd-48-15">
                      <h3 className="vr-title_mb">Branding Package</h3>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center justify-content-between">
                    <div className="col-12 col-md-9 ps-lg-5">
                      <h5 className="mb-2">Tell your story without words.</h5>
                      <p className="fs-20 mb-0 text-black">An iconic logo and branding get your business noticed and let people know what you have to offer. Our designers are tuned into the nuances of color psychology and typography, working closely with you to craft a visual identity that fits your company's strategy and creates the right association in your viewer’s mind.</p>
                    </div>
                    <div className="col-md-3 text-end ps-md-5">
                      <div className="d-grid">
                        <a href="#" className="btn btn-blue rounded-pill text-white px-5">I need this.</a>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center beautifulWork">
                    <div className="col-lg-12">
                      <div className="work-slider-area">
                        <h2 className="text-primary fw-bold">Check out <br/>our beautiful <br/>work.</h2>
                        <Swiper className="slider-scroller" {...settingsB}>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-button-next"></div>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="row get_row g-0 branding_package brochureFlyer end_anim" id="end_anim">
                <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
                  <div className="pd-48-15">
                    <div className="benifit_ttl align-self-center">
                      <h3 className="vr-title">Brochures and Flyers</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-11 brandingPackageCol fingerTipCol">
                  <div className="d-md-none">
                    <div className="benifit_ttl_mb mb-stl pd-48-15">
                      <h3 className="vr-title_mb">Brochures and Flyers</h3>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center justify-content-between">
                    <div className="col-12 col-md-9 ps-lg-5">
                      <h5 className="mb-2">Keep your business at everyone’s fingertips.</h5>
                      <p className="fs-20 mb-0 text-black">Whether you choose flyers, brochures, or letterheads, spread the word about your business and make the statement you want. Our design specialists merge marketing strategy with eye-catching graphics to give your brand the platform it needs to convert your audience.</p>
                    </div>
                    <div className="col-md-3 text-end ps-md-5">
                      <div className="d-grid">
                        <a href="#" className="btn btn-blue rounded-pill text-white px-5">I need this.</a>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 align-items-center beautifulWork">
                    <div className="col-lg-12">
                      <div className="work-slider-area">
                        <h2 className="text-primary fw-bold">Check out <br/>our beautiful <br/>work.</h2>
                        <Swiper className="slider-scroller" {...settingsB}>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <SwiperSlide>
                            <a href="#">
                              <img className="rounded-4" src={KidsNHeartImg.src} alt="" />
                            </a>    
                          </SwiperSlide>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-button-next"></div>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
      <section className="abaFeatures">
        <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12">
                <h2 className="text-white text-center fw-bold">Experience our marketing know-how and sterling service. <br/>Come out with a website that is <span className="text-warning">as effective as it is beautiful.</span></h2>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={MobileResponsivenessImg.src} alt="" />
                  <h4 className="mb-0 text-white fw-bold">Mobile responsiveness</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={WebsiteSpeedImg.src} alt="" />
                  <h4 className="mb-0 text-white fw-bold">Website speed</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={CustomerServiceImg.src} alt="" />
                  <h4 className="mb-0 text-white fw-bold">Customer service</h4>
                </div>
              </div>
            </div>
            <div className="row justify-content-between mt-4 pt-2">
              <div className="col-lg-4">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={QuickTurnaroundTimeImg.src} alt="" />
                  <h4 className="mb-0 text-white fw-bold">Quick turnaround time</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={HostingOptionsImg.src} alt="" />
                  <h4 className="mb-0 text-white fw-bold">Hosting options</h4>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex align-items-center">
                  <img className="me-2" src={CompetitiveRatesImg.src} alt="" />
                  <h4 className="mb-0 text-white fw-bold">Competitive rates </h4>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <a href="#" className="btn btn-yellow d-inline-flex">Get my site started</a>
            </div>
        </div>
      </section>
      <section className="abaWebsites">
        <div className="container-fluid">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-lg-6">
              <h2 className="text-center fw-bold text-primary">See how we’ve delivered for other ABA agencies like yours.</h2>
            </div>
          </div>
          <div className="row mb-5 pb-3">
            <div className="col-lg-3 text-center">
              <img className="img-fluid" src={AbaAgencyImg1.src} alt="" />
            </div>
            <div className="col-lg-3 text-center">
              <img className="img-fluid" src={AbaAgencyImg2.src} alt="" />
            </div>
            <div className="col-lg-3 text-center">
              <img className="img-fluid" src={AbaAgencyImg3.src} alt="" />
            </div>
            <div className="col-lg-3 text-center">
              <img className="img-fluid" src={AbaAgencyImg4.src} alt="" />
            </div>
          </div>
          <div className="text-center">
            <a href="#" className="btn btn-blue rounded-pill px-4">I need a site like this.</a>
          </div>
        </div>
      </section>
    </main>
  );
}