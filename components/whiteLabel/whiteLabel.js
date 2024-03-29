/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GravityFormsForm } from "../../generated/graphql";
import GravityForm from "../../components/GravityForm";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";
import ServiceContact from "../commonServiceContact/commonServiceContact";

gsap.registerPlugin(ScrollTrigger);

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  cache: new InMemoryCache(),
});

export default function WhiteLabel({ data, themeOptions, form }) {
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
          end: "+=1200",
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
          end: "+=1200",
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

    document.body.classList.add("white-label");
    return () => {
      document.body.classList.remove("white-label");
    };
  }, []);

  return (
    <main
      className="position-relative whitelabel_inner zindex-2 overflow-hidden"
      id="main"
    >
      <div className="banner__overlap">
        <div className="container-xl bbn_1">
          <div className="design_development_container"></div>
          <div className="bottom_shape">
            <div className="floor-1">
              <div className="torusLandingLottie">
                <div className="torusLandingContainer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single__banBild">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <img src="../images/group-meeting.png" alt="topRight" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner_content position-relative overflow-hidden">
        <div className="container p-lg-0">
          <div className="row g-0">
            <div className="col-12 col-xl-7 ecom__info position-relative">
              <div className="banner_content_info">
                <h1>White Label Development Services </h1>
                {data.bannerTagline && (
                  <div className="sub_title play_fair-ttl">
                    <h2>{data.bannerTagline}</h2>
                  </div>
                )}
                {data.bannerTitle && (
                  <div
                    className="moji_ttl"
                    dangerouslySetInnerHTML={{ __html: data.bannerTitle }}
                  ></div>
                )}
                {data.bannerDescription && (
                  <div
                    className="mb-4 d-xl-block d-none"
                    dangerouslySetInnerHTML={{ __html: data.bannerDescription }}
                  ></div>
                )}
              </div>
              {data.bannerImage && (
                <div className="col-12 col-xl-5 position-relative group__bild d-none">
                  <img className="img-fluid" src={data.bannerImage.sourceUrl} />
                </div>
              )}

              <div className="d-xl-none d-block mobileDesc">
                {data.bannerDescription && (
                  <div
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: data.bannerDescription }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gl_area hosting_page">
        <div className="container-xl position-relative p-0">
          <div className="line_anim">
            <div className="profitDrag"></div>
            <div className="dragWithme">
              <img src="../images/smArrow.png" />
            </div>
          </div>
          <section className="row get_row g-0 sec-1 start_anim" id="start_anim">
            <div className="col-12 col-md-1 d-none d-md-block benit__ttl">
              <div className="benifit_ttl">
                <h3 className="vr-title">Benefits</h3>
              </div>
            </div>
            <div className="col-12 col-md-11 pd-30-mix">
              <div className="d-md-none mb-4">
                <div className="benifit_ttl_mb pd-48-15">
                  <h3 className="vr-title_mb">Benefits</h3>
                </div>
              </div>
              <div className="row g-0 why__us align-items-center">
                <div className="col-md-7 pd-48-15 order-lg-0 order-1 mt-lg-0 mt-5">
                  {data.benefitTagline && (
                    <div className="mb-md-3">
                      <h2>{data.benefitTagline}</h2>
                    </div>
                  )}
                  {data.benefitTitle && (
                    <p>
                      <strong className="mobNormalWeight">
                        {data.benefitTitle}
                      </strong>
                    </p>
                  )}
                  {data.benefitDescription && (
                    <div
                      className="benefit-desc"
                      dangerouslySetInnerHTML={{
                        __html: data.benefitDescription,
                      }}
                    ></div>
                  )}
                </div>
                {data.benefitImage && (
                  <div className="col-md-5 pd-48-15 order-lg-1 order-0">
                    <img
                      className="img-fluid"
                      src={data.benefitImage.sourceUrl}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
          <section
            className="row get_row why__usc g-0 sec-2 end_anim"
            id="end_anim"
          >
            <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
              <div className="benifit_ttl align-self-center">
                <h3 className="vr-title">Why Us </h3>
              </div>
            </div>
            <div className="col-12 col-md-11 pd-30-mix pd-48-15">
              <div className="d-md-none mb-4">
                <div className="benifit_ttl_mb">
                  <h3 className="vr-title_mb">Why Us</h3>
                </div>
              </div>
              {data.whyUsBlocks && (
                <div className="pattern__card">
                  <div className="row">
                    {data.whyUsBlocks.map((item, index) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-lg-3 pattern__child"
                          key={`whyUs-${index}`}
                        >
                          <div
                            className="y_shape_bg"
                            dangerouslySetInnerHTML={{
                              __html: item.whyUsBlockTitle,
                            }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="why__us pb-0 text-center">
                {data.whiteLabelServiceTitle && (
                  <h2>{data.whiteLabelServiceTitle}</h2>
                )}
                {data.whiteLabelServicePoints && (
                  <div className="service__label">
                    <div className="row align-items-center">
                      {data.whiteLabelServicePoints.map((item, index) => {
                        return (
                          <div
                            className="col-12 col-lg-4 mb-lg-0 mb-4"
                            key={`whyUs-${index}`}
                          >
                            <div className="d-flex flex-md-row flex-column align-items-center serviceBox">
                              {item.whiteLabelServiceImage && (
                                <img
                                  src={item.whiteLabelServiceImage.sourceUrl}
                                />
                              )}
                              {item.whiteLabelServicePoint && (
                                <p>
                                  <strong>{item.whiteLabelServicePoint}</strong>
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      <ServiceContact data={themeOptions} />
    </main>
  );
}
