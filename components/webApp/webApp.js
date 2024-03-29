/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import lottie from "lottie-web";
import torusLanding from "/public/lottie/3d-torus-loading.json";
import automateImage from "/public/lottie/loading-cwwws.json";
import ServiceContact from "../commonServiceContact/commonServiceContact";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function WebApp({ data, themeOptions, form }) {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".torusLandingContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: torusLanding,
    });

    lottie.loadAnimation({
      container: document.querySelector(".automateContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: automateImage,
    });

    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) {
        gsap.set(".dragWithme", { top: "-10px" });
        const liftArow = gsap.to(".dragWithme", { top: "100%", ease: "none" });

        ScrollTrigger.create({
          trigger: ".gl_area",
          start: "-=600",
          endTrigger: "#end_anim",
          end: "+=1400",
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
          end: "+=1400",
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

    document.body.classList.add("web-app");
    return () => {
      document.body.classList.remove("web-app");
    };
  }, []);

  return (
    <main
      className="position-relative webApp_inner zindex-2 overflow-hidden"
      id="main"
    >
      <div className="banner__overlap">
        <div className="container-xl bbn_1">
          <div className="design_development_container ecom_development_container"></div>
          <div className="bottom_shape">
            <div className="floor-1">
              <div className="torusLandingLottie">
                <div className="torusLandingContainer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner_content position-relative overflow-hidden">
        <div className="container-xl p-0">
          <div className="row g-0">
            <div className="col-12 col-md-7 ecom__info position-relative">
              <div className="banner_content_info">
                <div
                  className="main__title"
                  dangerouslySetInnerHTML={{ __html: data.pageHeading }}
                ></div>
                {data.bannerSubtitle && (
                  <div className="sub_title play_fair-ttl">
                    <h2>{data.bannerSubtitle}</h2>
                  </div>
                )}
                {data.bannerTitle && (
                  <div
                    className="banner-h3 moji_ttl mb-0"
                    dangerouslySetInnerHTML={{ __html: data.bannerTitle }}
                  ></div>
                )}
                <div className="d-md-none bild-before position-relative">
                  {data.bannerImage && (
                    <div className="position-relative group__bild">
                      <div className="theme___bg">
                        <img
                          className="img-fluid"
                          src={data.bannerImage.sourceUrl}
                        />
                      </div>
                    </div>
                  )}
                </div>
                {data.bannerDescription && (
                  <div
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: data.bannerDescription }}
                  ></div>
                )}
              </div>
            </div>
            {data.bannerImage && (
              <div className="col-12 col-md-5 position-relative group__bild">
                <div className="theme___bg d-none d-md-block">
                  <img className="img-fluid" src={data.bannerImage.sourceUrl} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="gl_area web-app_inner">
        <div className="container-xl position-relative p-0">
          <div className="line_anim">
            <div className="profitDrag"></div>
            <div className="dragWithme">
              <img src="../images/smArrow.png" />
            </div>
          </div>
          <section className="row get_row g-0 sec-1 start_anim" id="start_anim">
            <div className="col-12 col-md-1 d-none d-md-block benit__ttl">
              {data.benefitsTitle && (
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.benefitsTitle}</h3>
                </div>
              )}
            </div>
            <div className="col-12 col-md-11 pd-30-l-mix">
              <div className="d-md-none">
                <div className="benifit_ttl_mb mb-stl pd-48-15">
                  <h3 className="vr-title_mb">{data.benefitsTitle}</h3>
                </div>
              </div>
              {data.benefitsBlocks && (
                <ul className="list-inline benifit__inner benefit_list_mb">
                  {data.benefitsBlocks.map((item, index) => {
                    return (
                      <li
                        className="list-inline-item"
                        key={`benefits-${index}`}
                      >
                        <div className="ffk_btn">
                          <div className="btn-flex-col d-flex align-items-center">
                            <div className="d-md-none position-relative zindex-3 me-3">
                              <img src="../images/wb-1.png" alt="wp1" />
                            </div>
                            <span>{item.benefitBlockTitle} </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>
          <section className="row get_row g-0 sec-2">
            <div className="col-12 col-md-1 d-none d-md-block wus__ttl">
              {data.whyUsHeading && (
                <div className="benifit_ttl">
                  <h3 className="vr-title">{data.whyUsHeading}</h3>
                </div>
              )}
            </div>
            <div className="col-12 col-md-11 pd-30-l-mix">
              <div className="d-md-none">
                {data.whyUsHeading && (
                  <div className="benifit_ttl_mb mb-stl pd-48-15">
                    <h3 className="vr-title_mb">{data.whyUsHeading}</h3>
                  </div>
                )}
              </div>
              <div className="row g-0 why__us align-items-center">
                <div className="col-12 col-md-7 maxim_effort position-relative">
                  <div className="pd-48-15">
                    {data.whyUsTitle && (
                      <h2
                        dangerouslySetInnerHTML={{ __html: data.whyUsTitle }}
                      />
                    )}
                    {data.whyUsDescription && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.whyUsDescription,
                        }}
                      />
                    )}
                  </div>
                </div>
                {data.whyUsImage && (
                  <div className="col-12 col-md-5">
                    <div className="pd-48-15 pe-0">
                      <div className="d-md-none">
                        <img
                          className="img-fluid w-100"
                          src="../images/trgt.png"
                          alt="bldrp"
                        />
                      </div>
                      <div className="d-none d-md-block">
                        <img
                          className="img-fluid w-100"
                          src={data.whyUsImage.sourceUrl}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="row get_row g-0 sec-3 end_anim" id="end_anim">
            <div className="col-12 col-md-1 d-none d-md-block serv__ttl">
              <div className="pd-48-15">
                {data.serviceDetailsHeading && (
                  <div className="benifit_ttl align-self-center">
                    <h3 className="vr-title">{data.serviceDetailsHeading}</h3>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-md-11 pd-30-l-mix time_acquainted">
              <div className="d-md-none">
                {data.serviceDetailsHeading && (
                  <div className="benifit_ttl_mb mb-stl pd-48-15">
                    <h3 className="vr-title_mb">
                      {data.serviceDetailsHeading}
                    </h3>
                  </div>
                )}
              </div>
              <div className="row g-0 why__us align-items-center">
                <div className="col-12 col-md-6 order-2 order-md-1">
                  <div className="pd-48-15">
                    <div className="automateImg">
                      <div className="automateContainer" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 automate_work automate_work_last position-relative order-1 order-md-2">
                  <div className="pd-48-15">
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: data.serviceDetailsTitle,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data.serviceDetailsDescription,
                      }}
                    />
                    <p className="mb-4">
                      <strong
                        dangerouslySetInnerHTML={{
                          __html: data.serviceDetailsSubtitle,
                        }}
                      />
                    </p>
                    {data.seeOurWorkLink && (
                      <div className="d-sm-table">
                        <Link
                          className="btn btn-yellow ft-gilroy_b fw-bold"
                          href={data.seeOurWorkLink}
                        >
                          <strong>Let’s talk</strong>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="industryNeeds">
        <div className="container-xl">
          <div className="row g-0 needs_block align-items-end">
            <div className="col-md-5 automate_work position-relative">
              {data.industryDetailsTitle && (
                <h2
                  dangerouslySetInnerHTML={{
                    __html: data.industryDetailsTitle,
                  }}
                />
              )}
              {data.industryDetailsDescription && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.industryDetailsDescription,
                  }}
                />
              )}
              {data.industryDetailsSubtitle && (
                <h3>
                  <strong className="fw-bold">
                    {data.industryDetailsSubtitle}
                  </strong>
                </h3>
              )}
            </div>
            {data.industryDetailsImage && (
              <div className="col-md-7 d-flex justify-content-end">
                <div className="img-inner">
                  <img
                    className="img-fluid"
                    src={data.industryDetailsImage.sourceUrl}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ServiceContact data={themeOptions} />
    </main>
  );
}
