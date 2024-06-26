/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";
import ServiceContact from "../commonServiceContact/commonServiceContact";

gsap.registerPlugin(ScrollTrigger);

export default function LogoBranding({ data, themeOptions, form }) {
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
          end: "+=1800",
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
          end: "+=1800",
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

    document.body.classList.add("logo-branding");
    return () => {
      document.body.classList.remove("logo-branding");
    };
  }, []);

  return (
    <main
      className="position-relative webApp_inner logoBrand_multi zindex-2 overflow-hidden webapp_logobr"
      id="main"
    >
      <div className="banner__overlap">
        <div className="container-xl bbn_1">
          <div className="design_development_container ecom_development_container" hidden></div>
          <div className="bottom_shape">
            <div className="floor-1">
              <div className="torusLandingLottie">
                <div className="torusLandingContainer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner_content logo-design-bnr position-relative overflow-hidden">
        <div className="container p-lg-0">
          <div className="row g-xxl-0">
            <div className="col-12 ecom__info position-relative">
              <div className="banner_content_info text-center">
                <div className="text-center">
                  <img src="../images/sp-1.svg"/>
                </div>
                {data.pageHeading && <h1>{data.pageHeading} </h1>}
                {/* {data.bannerSubtitle && (
                  <div className="sub_title play_fair-ttl">
                    <h2 className="justify-content-center">
                      {data.bannerSubtitle}
                    </h2>
                  </div>
                )} 
                {data.bannerTitle && (
                  <div className="moji_ttl">
                    <h3>{data.bannerTitle}</h3>
                  </div>
                )}*/}
                {data.bannerDescription && (
                  <div
                    className="mb-4 text-center text-white moji_ttl"
                    dangerouslySetInnerHTML={{ __html: data.bannerDescription }}
                  />
                )}
              </div>
            </div>
            {/* <div className="col-12 col-xl-5 position-relative group__bild">
              {data.bannerImage.sourceUrl && (
                <div className="theme___bg">
                  <img
                    className="img-fluid w-100"
                    src={data.bannerImage.sourceUrl}
                  />
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
      <div className="gl_area">
        <div className="container-xl position-relative p-0">
          <div className="line_anim">
            <div className="profitDrag"></div>
            <div className="dragWithme">
              <img src="../images/smArrow.png" />
            </div>
          </div>
          <section className="row get_row g-0 sec-1 start_anim" id="start_anim">
            <div className="col-1 d-md-block d-none benit__ttl">
              {data.benefitsHeading && (
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.benefitsHeading}</h3>
                </div>
              )}
            </div>
            <div className="col-md-11 pd-30-mix pd-48-15">
              <div className="d-md-none mb-4">
                {data.benefitsHeading && (
                  <div className="benifit_ttl_mb">
                    <h3 className="vr-title_mb">{data.benefitsHeading}</h3>
                  </div>
                )}
              </div>
              {data.benefitsBlocks && (
                <ul className="list-inline benifit__inner benifit_new justify-content-start">
                  {data.benefitsBlocks.map((item, index) => {
                    return (
                      <li className="list-inline-item" key={`benefit-${index}`}>
                        <div className="ffk_btn flex-column justify-content-center">
                          <div className="position-relative zindex-3 mb-2">
                            <img src="../images/enf-1.png" />
                          </div>
                          <span>{item.benefitBlockTitle}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>
          <section className="row get_row g-0 sec-2">
            <div className="col-1 d-md-block d-none wus__ttl">
              {data.whyUsHeading && (
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.whyUsHeading}</h3>
                </div>
              )}
            </div>
            <div className="col-md-11 pd-30-mix pd-48-15">
              <div className="d-md-none mb-4">
                {data.whyUsHeading && (
                  <div className="benifit_ttl_mb">
                    <h3 className="vr-title_mb">{data.whyUsHeading}</h3>
                  </div>
                )}
              </div>
              <div className="row g-xxl-0 why__us align-items-center mb-5">
                <div className="col-lg-6 maxim_effort position-relative">
                  {data.whyUsTitle && (
                    <div
                      dangerouslySetInnerHTML={{ __html: data.whyUsTitle }}
                    ></div>
                  )}
                  {data.whyUsDescription && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.whyUsDescription,
                      }}
                    ></div>
                  )}
                </div>
                {data.whyUsImage.sourceUrl && (
                  <div className="col-lg-6 text-lg-end text-center mt-lg-0 mt-4 pt-lg-0 pt-4">
                    <img
                      className="img-fluid"
                      src={data.whyUsImage.sourceUrl}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-3 end_anim" id="end_anim">
            <div className="col-1 d-md-block d-none serv__ttl">
              {data.servicesHeading && (
                <div className="benifit_ttl align-self-center">
                  <h3 className="vr-title">{data.servicesHeading} </h3>
                </div>
              )}
            </div>
            <div className="col-md-11 pd-30-mix pd-48-15 time_acquainted">
              <div className="row g-xxl-0 why__us align-items-center">
                <div className="d-md-none mb-4">
                  {data.servicesHeading && (
                    <div className="benifit_ttl_mb">
                      <h3 className="vr-title_mb">{data.servicesHeading}</h3>
                    </div>
                  )}
                </div>
                {data.service1Image.sourceUrl && (
                  <div className="col-12 col-lg-6 text-lg-left text-center order-lg-0 order-1 mt-lg-0 mt-4 pt-lg-0 pt-4">
                    <img
                      className="img-fluid"
                      src={data.service1Image.sourceUrl}
                    />
                  </div>
                )}
                <div className="col-12 col-lg-6 automate_work position-relative order-lg-1 order-0">
                  {data.service1Title && <h2>{data.service1Title}</h2>}
                  {data.service1Description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.service1Description,
                      }}
                    ></div>
                  )}
                  {data.service1ButtonLink && (
                    <div className="d-table mt-3">
                      <a
                        className="btn btn-yellow ft-gilroy_b fw-bold"
                        href={data.service1ButtonLink}
                      >
                        <strong>{data.service1ButtonText}</strong>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="row g-xxl-0 why__us align-items-center mt-lg-0 mt-4 pt-lg-0 pt-4">
                <div className="col-lg-7 automate_work position-relative">
                  {data?.service2Title && <h2>{data.service2Title}</h2>}
                  {data?.service2Description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.service2Description,
                      }}
                    ></div>
                  )}
                </div>
                {data?.service2Image?.sourceUrl && (
                  <div className="col-lg-5 text-lg-start text-center mt-lg-0 mt-4 pt-lg-0 pt-4">
                    <img
                      className="img-fluid"
                      src={data.service2Image.sourceUrl}
                    />
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
