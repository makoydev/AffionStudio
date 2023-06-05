import React, { useEffect } from "react";
import Navigation from "../../Components/Navigation";

const Home = () => {
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    const backToTopBtn = document.getElementById("backToTop");

    if (navbar) {
      if (window.scrollY > 0) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 100) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }
  };

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      // Remove the 'w--current' className from all other nav-links
      navLinks.forEach((link) => link.classList.remove("w--current"));

      // Add the 'w--current' className to the clicked nav-link
      navLink.classList.add("w--current");
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", () => {
        // Remove the 'w--current' className from all other nav-links
        navLinks.forEach((link) => {
          (link as HTMLElement).classList.remove("w--current");
          (link as HTMLElement).style.backgroundColor = "#1d1d1d";
          (link as HTMLElement).style.color = "#fff";
        });

        // Add the 'w--current' className to the clicked nav-link
        (navLink as HTMLElement).classList.add("w--current");
        (navLink as HTMLElement).style.backgroundColor = "#ff5732";
        (navLink as HTMLElement).style.color = "#fff";
      });
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <button id="backToTop" className="back-to-top" onClick={scrollToTop}>
        Back to Top
      </button>

      <Navigation />

      <div className="banner-section wf-section" id="home">
        <div className="container w-container">
          <div className="banner-wrap">
            <div className="banner-whole-wrap home-banner">
              <div className="w-layout-grid banner-grid">
                <div className="banner-title-wrap">
                  <p className="banner-sub-title">Digital Agency</p>
                  <h1 className="banner-title">
                    Developing the Digital Universe
                  </h1>
                  <div className="banner-content-wrap">
                    <p className="banner-content">
                      We are a forward-thinking team of designers and developers
                      driven by passion fully fueled by digital curiosity.
                    </p>
                  </div>
                  <div className="banner-button-wrap">
                    <a
                      data-w-id="235228c2-faae-e525-0a85-e00098e20d9f"
                      href="#about"
                      className="arrow-button w-inline-block"
                    >
                      <div>Get Started</div>
                      <div className="arrow-line-wrap">
                        <div
                          style={
                            {
                              WebkitTransform:
                                "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              MozTransform:
                                "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              msTransform:
                                "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              transform:
                                "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            } as React.CSSProperties
                          }
                          className="arrow-top-line"
                        ></div>
                        <div className="arrow-middle-line"></div>
                        <div
                          style={
                            {
                              WebkitTransform:
                                "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              MozTransform:
                                "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              msTransform:
                                "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                              transform:
                                "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            } as React.CSSProperties
                          }
                          className="arrow-bottom-line"
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  id="w-node-_386eea91-bd1b-fdab-58f8-5676c1cc5aab-ac377b5e"
                  className="banner-card-wrap"
                >
                  <div className="banner-card-title-wrap">
                    <div className="banner-title-flex">
                      <div className="banner-card-title-image-wrap">
                        <img
                          src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae76de111f58cf675bba13_Card-title-image.svg"
                          loading="lazy"
                          alt="Home Banner Card Logo"
                        />
                      </div>
                      <p className="banner-card-sub-title">Olivia Waller</p>
                    </div>
                    <div className="banner-wishlist-image-wrap">
                      <img
                        src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae768fa6bbf6630a31cdbb_wishlist.svg"
                        loading="lazy"
                        alt="Home Banner Wishlist Image"
                      />
                    </div>
                  </div>
                  <div className="banner-card-image-wrap">
                    <img
                      src="https://assets.website-files.com/63ad48963db63e3052377b5d/63e0c6b93f861238fb88a4b6_Banner.jpg"
                      loading="lazy"
                      alt="Banner Image"
                    />
                  </div>
                  <div className="banner-card-content-wrap">
                    <p className="banner-card-title">Marketing</p>
                    <div className="banner-card-star-wrap">
                      <img
                        src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae77f3035b9868f21af549_Star.svg"
                        loading="lazy"
                        alt="Home Banner Card Star Image"
                      />
                      <img
                        src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae77f3035b9868f21af549_Star.svg"
                        loading="lazy"
                        alt="Home Banner Card Star Image"
                      />
                      <img
                        src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae77f3035b9868f21af549_Star.svg"
                        loading="lazy"
                        alt="Home Banner Card Star Image"
                      />
                      <img
                        src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae77f3035b9868f21af549_Star.svg"
                        loading="lazy"
                        alt="Home Banner Card Star Image"
                      />
                      <img
                        src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae77f3035b9868f21af549_Star.svg"
                        loading="lazy"
                        alt="Home Banner Card Star Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="341baa52-9e28-5368-4566-a671cd4ba98b"
              className="banner-bg-wrap"
            ></div>
          </div>
        </div>
      </div>

      <div className="service-section wf-section">
        <div className="container w-container">
          <div className="service-grid-wrap">
            <div className="w-layout-grid service-grid">
              <div
                id="w-node-a90aa95d-cdf1-9854-fa9a-9007b1a2db0c-ac377b5e"
                data-w-id="a90aa95d-cdf1-9854-fa9a-9007b1a2db0c"
              >
                <p className="sub-title">We offer</p>
                <h2 className="section-title">Our Services</h2>
              </div>
              <div
                id="w-node-_839c426c-8b3a-0ac0-e68f-66bd41482efa-ac377b5e"
                data-w-id="839c426c-8b3a-0ac0-e68f-66bd41482efa"
                className="service-whole-wrap"
              >
                <div className="service-point-flex">
                  <div className="service-wrap">
                    <h3 className="service-title">Design</h3>
                    <p className="service-content">
                      The design teams use to create products that provide
                      meaningful and relevant experiences to users.
                    </p>
                  </div>
                  <div className="service-wrap">
                    <h3 className="service-title">Branding</h3>
                    <p className="service-content">
                      Creating a unique name and image for the digital or real
                      product in the consumers’ business mind.
                    </p>
                  </div>
                </div>
                <div className="service-point-flex">
                  <div className="service-wrap">
                    <h3 className="service-title">Art</h3>
                    <p className="service-content">
                      Responsible for the coding, design and layout of a website
                      according to a company&#x27;s specifications.
                    </p>
                  </div>
                  <div className="service-wrap">
                    <h3 className="service-title">Customize</h3>
                    <p className="service-content">
                      Initial stage of a software release is developmental
                      evolution &amp; product to repeat making this the first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-title" id="about">
        <div className="scroll-section">
          <div className="scroll-overflow">
            <div className="scroll-text-wrap">
              <div
                style={
                  {
                    WebkitTransform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  } as React.CSSProperties
                }
                className="scrolling-flex"
              >
                <div className="scroll-wrap">
                  <div className="scroll-point-wrap purple-bg">
                    <div className="scroll-inner-circle">
                      <p className="scroll-inner-content">1</p>
                    </div>
                  </div>
                  <p className="scroll-content">Customize</p>
                </div>
                <div className="scroll-wrap">
                  <div className="scroll-point-wrap blue-bg">
                    <div className="scroll-inner-circle">
                      <p className="scroll-inner-content">2</p>
                    </div>
                  </div>
                  <p className="scroll-content">Blazing Fast Loading</p>
                </div>
                <div className="scroll-wrap">
                  <div className="scroll-point-wrap green-bg">
                    <div className="scroll-inner-circle">
                      <p className="scroll-inner-content">3</p>
                    </div>
                  </div>
                  <p className="scroll-content">Quick Support</p>
                </div>
                <div className="scroll-wrap">
                  <div className="scroll-point-wrap pink-bg">
                    <div className="scroll-inner-circle">
                      <p className="scroll-inner-content">4</p>
                    </div>
                  </div>
                  <p className="scroll-content">Smooth Interaction</p>
                </div>
                <div className="scroll-wrap">
                  <div className="scroll-point-wrap orange-bg">
                    <div className="scroll-inner-circle">
                      <p className="scroll-inner-content">5</p>
                    </div>
                  </div>
                  <p className="scroll-content">100% Satisfaction</p>
                </div>
              </div>
              <div
                style={
                  {
                    WebkitTransform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  } as React.CSSProperties
                }
                className="scrolling-flex"
              >
                <div className="scroll-wrap">
                  <div className="scroll-point-wrap purple-bg">
                    <div className="scroll-inner-circle">
                      <p className="scroll-inner-content">1</p>
                    </div>
                  </div>
                  <p className="scroll-content">Customize</p>
                </div>
                <div className="scroll-wrap">
                  <div className="scroll-point-wrap blue-bg">
                    <div className="scroll-inner-circle">
                      <p className="scroll-inner-content">2</p>
                    </div>
                  </div>
                  <p className="scroll-content">Blazing Fast Loading</p>
                </div>
                <div className="scroll-wrap">
                  <div className="scroll-point-wrap green-bg">
                    <div className="scroll-inner-circle">
                      <p className="scroll-inner-content">3</p>
                    </div>
                  </div>
                  <p className="scroll-content">Quick Support</p>
                </div>
                <div className="scroll-wrap">
                  <div className="scroll-point-wrap pink-bg">
                    <div className="scroll-inner-circle">
                      <p className="scroll-inner-content">4</p>
                    </div>
                  </div>
                  <p className="scroll-content">Smooth Interaction</p>
                </div>
                <div className="scroll-wrap">
                  <div className="scroll-point-wrap orange-bg">
                    <div className="scroll-inner-circle">
                      <p className="scroll-inner-content">5</p>
                    </div>
                  </div>
                  <p className="scroll-content">100% Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-rotate">
          <div className="scroll-section-wrap">
            <p className="scroll-section-title">WE HAVE PRIDE IN OUR WORK</p>
          </div>
        </div>
      </div>

      <div className="about-us-section wf-section">
        <div className="container w-container">
          <div className="about-us-grid-wrap">
            <div className="w-layout-grid about-us-grid">
              <div
                id="w-node-_7c28a2dc-d593-3347-d396-1661330c618e-ac377b5e"
                data-w-id="7c28a2dc-d593-3347-d396-1661330c618e"
              >
                <p className="sub-title">About us</p>
                <h2 className="section-title">
                  Modern and creative agency specialized in Digital
                </h2>
                <p className="about-us-content">
                  We specialize in user interface design, including front-end
                  development which we consider to be a part of the UX.
                </p>
                <div className="about-us-card">
                  <div className="about-us-image-wrap">
                    <img
                      src="https://assets.website-files.com/63ad48963db63e3052377b5d/63afc06db337a672ec08fe52_About-us.jpg"
                      loading="lazy"
                      alt="About Us Author Image"
                      className="about-card-image"
                    />
                  </div>
                  <div className="about-card-content-wrap">
                    <img
                      src="https://assets.website-files.com/63ad48963db63e3052377b5d/63afc0d71e34a7e905ac66a6_About-Card-quote.svg"
                      loading="lazy"
                      alt="About card Qoute Image"
                    />
                    <p className="about-card-content">
                      Our conversion rates have increased by 125% since they
                      revamped our website and messaging. There is not more
                      anything else
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="w-node-c62382ef-a35c-f76e-b386-cbdf625c6f63-ac377b5e"
                data-w-id="c62382ef-a35c-f76e-b386-cbdf625c6f63"
                className="about-video-wrap"
              >
                <div className="about-image-wrap">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/6402e65e8a898d7fc30381ab_about-video-image.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 87vw, (max-width: 767px) 88vw, 610px"
                    width="610"
                    alt="About Video Image"
                    srcSet="
    https://assets.website-files.com/63ad48963db63e3052377b5d/6402e65e8a898d7fc30381ab_about-video-image-p-500.jpg 500w,
    https://assets.website-files.com/63ad48963db63e3052377b5d/6402e65e8a898d7fc30381ab_about-video-image-p-800.jpg 800w,
    https://assets.website-files.com/63ad48963db63e3052377b5d/6402e65e8a898d7fc30381ab_about-video-image-p-1080.jpg 1080w,
    https://assets.website-files.com/63ad48963db63e3052377b5d/6402e65e8a898d7fc30381ab_about-video-image.jpg 1220w
  "
                    className="about-video-image"
                  />
                  <a
                    href="index.html#"
                    className="about-video-link w-inline-block w-lightbox"
                  >
                    <img
                      src="https://assets.website-files.com/63ad48963db63e3052377b5d/63afc30f59086bf8d55f0ef8_About-video-play.svg"
                      loading="lazy"
                      alt="About Video Play Image"
                    />
                  </a>
                  <div
                    data-w-id="1861e4e1-fc92-8d04-4b33-3c79ddf8ade5"
                    className="about-video-bg"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-sub-section wf-section" id="portfolio">
        <div className="container w-container">
          <div
            data-w-id="365a97f2-18a5-e47f-0101-e02fc279226a"
            className="section-title-wrap center"
          >
            <p className="sub-title">Works</p>
            <h2 className="section-title">Our Recent Portfolio</h2>
          </div>
          <div
            data-w-id="b87077a5-27c9-e1cf-0706-7d9759e72820"
            className="portfolio-masonry-wrap"
          >
            <div className="w-layout-grid portfolio-masonry-grid">
              <div
                id="w-node-_5059ed1e-ca9e-2964-7a1c-65d636a8f96a-ac377b5e"
                className="portfolio-wrap"
              >
                <div className="portfolio-collection-wrap">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="portfolio-sub-flex vertical">
                          <a
                            href="portfolio/website-redesign-and-development-for-type.html"
                            className="portfolio-sub-image-wrap w-inline-block"
                          >
                            <img
                              src="https://assets.website-files.com/63b406ca5bacad2bb7400775/63b5606ed3a552766bdb2e69_Portfolio-01.jpg"
                              loading="lazy"
                              alt="Portfolio Image"
                              className="portfolio-list-image"
                            />
                          </a>
                          <div className="portfolio-content-wrap content-item-first">
                            <div>
                              <a
                                href="portfolio-category/designing.html"
                                className="portfolio-sub-title"
                              >
                                Designing
                              </a>
                              <a
                                href="portfolio/website-redesign-and-development-for-type.html"
                                className="portfolio-sub-link"
                              >
                                Website redesign and development for type
                              </a>
                            </div>
                            <div className="portfolio-button">
                              <a
                                data-w-id="f04142ac-e2ae-38a9-6c2c-5d0597b2a88f"
                                href="portfolio/website-redesign-and-development-for-type.html"
                                className="arrow-button w-inline-block"
                              >
                                <div>View Project</div>
                                <div className="arrow-line-wrap">
                                  <div
                                    style={
                                      {
                                        WebkitTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        MozTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        msTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        transform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                      } as React.CSSProperties
                                    }
                                    className="arrow-top-line"
                                  ></div>
                                  <div className="arrow-middle-line"></div>
                                  <div
                                    style={
                                      {
                                        WebkitTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        MozTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        msTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        transform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                      } as React.CSSProperties
                                    }
                                    className="arrow-bottom-line"
                                  ></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-collection-wrap">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="portfolio-sub-flex">
                          <a
                            href="portfolio/think-with-google-interactive-experience.html"
                            className="portfolio-sub-image-wrap w-inline-block"
                          >
                            <img
                              alt="Portfolio Image"
                              loading="lazy"
                              src="https://assets.website-files.com/63b406ca5bacad2bb7400775/63f99384284d874cdf034cb5_Portfolio-mansory-03.jpg"
                              className="portfolio-list-image"
                            />
                          </a>
                          <div className="portfolio-content-wrap content-item-second">
                            <div>
                              <a
                                href="portfolio-category/research.html"
                                className="portfolio-sub-title white-font"
                              >
                                Research
                              </a>
                              <a
                                href="portfolio/think-with-google-interactive-experience.html"
                                className="portfolio-sub-link white-font-color"
                              >
                                Think with Google interactive experience.
                              </a>
                            </div>
                            <div className="portfolio-button">
                              <a
                                data-w-id="3a3c7137-bb94-e8d9-d8a7-862ca58048e6"
                                href="portfolio/think-with-google-interactive-experience.html"
                                className="arrow-button portfolio-button w-inline-block"
                              >
                                <div>View Project</div>
                                <div className="arrow-line-wrap">
                                  <div className="arrow-top-line arrow-black-line"></div>
                                  <div className="arrow-middle-line arrow-black-line"></div>
                                  <div className="arrow-bottom-line arrow-black-line"></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-d04dab42-7fd1-109e-7fe6-845f3039f7d8-ac377b5e"
                className="portfolio-wrap"
              >
                <div className="portfolio-collection-wrap">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="portfolio-sub-flex horizontal">
                          <a
                            href="portfolio/website-design-and-development-for-the-mam.html"
                            className="portfolio-sub-image-wrap w-inline-block"
                          >
                            <img
                              alt="Portfolio Image"
                              loading="lazy"
                              src="https://assets.website-files.com/63b406ca5bacad2bb7400775/63b568074fd2274c2c6aa089_Portfolio-05.jpg"
                              className="portfolio-list-image"
                            />
                          </a>
                          <div className="portfolio-content-wrap content-item-third">
                            <div>
                              <a
                                href="portfolio-category/development.html"
                                className="portfolio-sub-title"
                              >
                                Development
                              </a>
                              <a
                                href="portfolio/website-design-and-development-for-the-mam.html"
                                className="portfolio-sub-link"
                              >
                                Website design and development for the MAM
                              </a>
                              <p className="portfolio-sub-content">
                                We consider drawing leads to greater results. We
                                share knowledge, tools, and resources to get the
                                best.
                              </p>
                            </div>
                            <div className="portfolio-button">
                              <a
                                data-w-id="52355208-e128-22a3-162d-5813d874a3cb"
                                href="portfolio/website-design-and-development-for-the-mam.html"
                                className="arrow-button w-inline-block"
                              >
                                <div>View Project</div>
                                <div className="arrow-line-wrap">
                                  <div
                                    style={
                                      {
                                        WebkitTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        MozTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        msTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        transform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                      } as React.CSSProperties
                                    }
                                    className="arrow-top-line"
                                  ></div>
                                  <div className="arrow-middle-line"></div>
                                  <div
                                    style={
                                      {
                                        WebkitTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        MozTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        msTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        transform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                      } as React.CSSProperties
                                    }
                                    className="arrow-bottom-line"
                                  ></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_46971efb-f916-30e8-f48e-76059fe17a50-ac377b5e"
                className="portfolio-wrap"
              >
                <div className="portfolio-collection-wrap">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="portfolio-sub-flex vertical">
                          <a
                            href="portfolio/how-people-really-use-voice-interfaces.html"
                            className="portfolio-sub-image-wrap w-inline-block"
                          >
                            <img
                              alt="Portfolio Image"
                              loading="lazy"
                              src="https://assets.website-files.com/63b406ca5bacad2bb7400775/63b56841f6d39054f532e7a4_Portfolio-06.jpg"
                              className="portfolio-list-image"
                            />
                          </a>
                          <div className="portfolio-content-wrap content-item-fourth">
                            <div>
                              <a
                                href="portfolio-category/research.html"
                                className="portfolio-sub-title"
                              >
                                Research
                              </a>
                              <a
                                href="portfolio/how-people-really-use-voice-interfaces.html"
                                className="portfolio-sub-link"
                              >
                                How People really use voice interfaces
                              </a>
                            </div>
                            <div className="portfolio-button">
                              <a
                                data-w-id="476026fb-ddbc-6d93-57a6-88d79d42967f"
                                href="portfolio/how-people-really-use-voice-interfaces.html"
                                className="arrow-button w-inline-block"
                              >
                                <div>View Project</div>
                                <div className="arrow-line-wrap">
                                  <div
                                    style={
                                      {
                                        WebkitTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        MozTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        msTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        transform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                      } as React.CSSProperties
                                    }
                                    className="arrow-top-line"
                                  ></div>
                                  <div className="arrow-middle-line"></div>
                                  <div
                                    style={
                                      {
                                        WebkitTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        MozTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        msTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        transform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                      } as React.CSSProperties
                                    }
                                    className="arrow-bottom-line"
                                  ></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-baa84cd6-0c3a-ae1f-55f0-6635ea0de054-ac377b5e"
                className="portfolio-wrap"
              >
                <div className="portfolio-collection-wrap">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="portfolio-sub-flex vertical">
                          <div className="portfolio-content-wrap content-item-fifth">
                            <div>
                              <a
                                href="portfolio-category/development.html"
                                className="portfolio-sub-title white-font"
                              >
                                Development
                              </a>
                              <a
                                href="portfolio/saas-website-for-unique-start-up-brands.html"
                                className="portfolio-sub-link white-font-color"
                              >
                                Saas website for unique start-up brands
                              </a>
                            </div>
                            <div className="portfolio-button">
                              <a
                                data-w-id="fa5f3a5b-43f0-f916-d744-552e098fdd2e"
                                href="portfolio/saas-website-for-unique-start-up-brands.html"
                                className="arrow-button portfolio-button w-inline-block"
                              >
                                <div>View Project</div>
                                <div className="arrow-line-wrap">
                                  <div className="arrow-top-line arrow-black-line"></div>
                                  <div className="arrow-middle-line arrow-black-line"></div>
                                  <div className="arrow-bottom-line arrow-black-line"></div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <a
                            href="portfolio/saas-website-for-unique-start-up-brands.html"
                            className="portfolio-sub-image-wrap w-inline-block"
                          >
                            <img
                              alt="Portfolio Image"
                              loading="lazy"
                              src="https://assets.website-files.com/63b406ca5bacad2bb7400775/63b555a4408b5855ca1352a5_Portfolio-02.jpg"
                              sizes="(max-width: 479px) 92vw, (max-width: 767px) 400px, (max-width: 991px) 95vw, (max-width: 1279px) 800px, 1200px"
                              srcSet="
                              https://assets.website-files.com/63b406ca5bacad2bb7400775/63b555a4408b5855ca1352a5_Portfolio-02-p-500.jpg   500w,
                              https://assets.website-files.com/63b406ca5bacad2bb7400775/63b555a4408b5855ca1352a5_Portfolio-02-p-800.jpg   800w,
                              https://assets.website-files.com/63b406ca5bacad2bb7400775/63b555a4408b5855ca1352a5_Portfolio-02-p-1080.jpg 1080w,
                              https://assets.website-files.com/63b406ca5bacad2bb7400775/63b555a4408b5855ca1352a5_Portfolio-02.jpg        1100w
                            "
                              className="portfolio-list-image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-d67c7118-3b1e-c4b4-ddcd-8b3e2102d57e-ac377b5e"
                className="portfolio-wrap"
              >
                <div className="portfolio-collection-wrap">
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="portfolio-sub-flex horizontal">
                          <a
                            href="portfolio/voluptas-fugiat.html"
                            className="portfolio-sub-image-wrap w-inline-block"
                          >
                            <img
                              alt="Portfolio Image"
                              loading="lazy"
                              src="https://assets.website-files.com/63b406ca5bacad2bb7400775/63bfa6b479c8e29e2c8ec718_Portfolio-mansory-07.jpg"
                              className="portfolio-list-image"
                            />
                          </a>
                          <div className="portfolio-content-wrap content-item-sixth">
                            <div>
                              <a
                                href="portfolio-category/designing.html"
                                className="portfolio-sub-title"
                              >
                                Designing
                              </a>
                              <a
                                href="portfolio/voluptas-fugiat.html"
                                className="portfolio-sub-link"
                              >
                                Elegantly detailed and elaborately crafted
                              </a>
                            </div>
                            <div className="portfolio-button">
                              <a
                                data-w-id="ebab6e26-2f67-eb8c-1bd6-35c0402065cb"
                                href="portfolio/voluptas-fugiat.html"
                                className="arrow-button w-inline-block"
                              >
                                <div>View Project</div>
                                <div className="arrow-line-wrap">
                                  <div
                                    style={
                                      {
                                        WebkitTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        MozTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        msTransform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        transform:
                                          "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                      } as React.CSSProperties
                                    }
                                    className="arrow-top-line"
                                  ></div>
                                  <div className="arrow-middle-line"></div>
                                  <div
                                    style={
                                      {
                                        WebkitTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        MozTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        msTransform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                        transform:
                                          "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                                      } as React.CSSProperties
                                    }
                                    className="arrow-bottom-line"
                                  ></div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-section wf-section" id="pricing">
        <div className="container w-container">
          <div className="banner-wrap">
            <div className="banner-whole-wrap">
              <div className="w-layout-grid banner-grid">
                <div className="banner-title-wrap">
                  <p className="banner-sub-title">Pricing Plans</p>
                  <h1 className="banner-title">
                    Find the perfect plan for you
                  </h1>
                </div>
              </div>
            </div>
            <div className="banner-bg-wrap sub-pages"></div>
          </div>
        </div>
      </div>

      <div className="pricing-page-section wf-section">
        <div className="container w-container">
          <div className="pricing-page-flex">
            <div className="pricing-wrap">
              <div className="pricing-details-wrap">
                <p className="sub-title">Basic Plan</p>
                <h2 className="pricing-rate">$1,500+</h2>
                <p className="pricing-content">
                  Service plan is for company with minimal website needs.
                </p>
              </div>
              <div className="pricing-point-wrap">
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">
                    Pay just for the services you require.
                  </p>
                </div>
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">
                    <span className="pricing-sub-text">Customized</span> for
                    your needs.
                  </p>
                </div>
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">
                    3 rounds of feedback included.
                  </p>
                </div>
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">
                    Clear upfront pricing. No confusion.
                  </p>
                </div>
              </div>
              <div className="pricing-button-wrap">
                <a
                  data-w-id="7b5830a6-6ad2-8109-e783-a84f0b133462"
                  href="pricing.html#"
                  className="arrow-button gray w-inline-block"
                >
                  <div>Get Started Now</div>
                  <div className="arrow-line-wrap">
                    <div
                      style={
                        {
                          WebkitTransform:
                            "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          MozTransform:
                            "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          msTransform:
                            "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          transform:
                            "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                        } as React.CSSProperties
                      }
                      className="arrow-top-line"
                    ></div>
                    <div className="arrow-middle-line"></div>
                    <div
                      style={
                        {
                          WebkitTransform:
                            "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          MozTransform:
                            "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          msTransform:
                            "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          transform:
                            "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                        } as React.CSSProperties
                      }
                      className="arrow-bottom-line"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="pricing-wrap">
              <div className="pricing-details-wrap">
                <p className="sub-title">Standard</p>
                <h2 className="pricing-rate">$2,300+</h2>
                <p className="pricing-content">
                  The plan is for company with large website needs.
                </p>
              </div>
              <div className="pricing-point-wrap">
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">
                    UX Strategy, High fidelity design—the whole deal.
                  </p>
                </div>
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">Upto 10 screens</p>
                </div>
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">
                    Unlimited rounds of edits.
                  </p>
                </div>
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">
                    Clear upfront pricing.
                    <span className="pricing-sub-text">No confusion.</span>
                  </p>
                </div>
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">
                    Training for your design team, included.
                  </p>
                </div>
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">
                    Customized for your needs.
                  </p>
                </div>
                <div className="pricing-point-flex">
                  <img
                    src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b25b60b3e3756ad0501156_Pricing-point.svg"
                    loading="lazy"
                    alt="Pricing Point Image"
                    className="pricing-point-image"
                  />
                  <p className="pricing-point-content">
                    4 rounds of feedback included.
                  </p>
                </div>
              </div>
              <div className="pricing-button-wrap">
                <a
                  data-w-id="e3c3dde9-3307-202f-5f40-0351a5b26be1"
                  href="pricing.html#"
                  className="arrow-button gray w-inline-block"
                >
                  <div>Get Started Now</div>
                  <div className="arrow-line-wrap">
                    <div
                      style={
                        {
                          WebkitTransform:
                            "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          MozTransform:
                            "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          msTransform:
                            "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          transform:
                            "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                        } as React.CSSProperties
                      }
                      className="arrow-top-line"
                    ></div>
                    <div className="arrow-middle-line"></div>
                    <div
                      style={
                        {
                          WebkitTransform:
                            "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          MozTransform:
                            "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          msTransform:
                            "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          transform:
                            "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                        } as React.CSSProperties
                      }
                      className="arrow-bottom-line"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="pricing-permium-flex">
            <div className="pricing-permium-wrap">
              <div className="pricing-details-wrap permium">
                <p className="sub-title">Enterprise Plan</p>
                <h3 className="pricing-rate white-font-color">$5,500+</h3>
                <p className="pricing-content white-font-color">
                  Plan with the large scale digital website services.
                </p>
              </div>
              <div>
                <div className="pricing-point-wrap permium-point">
                  <div className="pricing-point-flex">
                    <img
                      src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b3bbba19c92c7b904cfe67_pricing-point.svg"
                      loading="lazy"
                      alt="Pricing Point Image"
                      className="pricing-point-image"
                    />
                    <p className="pricing-point-content dark-font-color">
                      Pay just for the services you require.
                    </p>
                  </div>
                  <div className="pricing-point-flex">
                    <img
                      src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b3bbba19c92c7b904cfe67_pricing-point.svg"
                      loading="lazy"
                      alt="Pricing Point Image"
                      className="pricing-point-image"
                    />
                    <p className="pricing-point-content dark-font-color">
                      <span className="pricing-sub-text orange-font-color">
                        Customized
                      </span>
                      for your needs.
                    </p>
                  </div>
                  <div className="pricing-point-flex">
                    <img
                      src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b3bbba19c92c7b904cfe67_pricing-point.svg"
                      loading="lazy"
                      alt="Pricing Point Image"
                      className="pricing-point-image"
                    />
                    <p className="pricing-point-content dark-font-color">
                      3 rounds of feedback included.
                    </p>
                  </div>
                  <div className="pricing-point-flex">
                    <img
                      src="https://assets.website-files.com/63ad48963db63e3052377b5d/63b3bbba19c92c7b904cfe67_pricing-point.svg"
                      loading="lazy"
                      alt="Pricing Point Image"
                      className="pricing-point-image"
                    />
                    <p className="pricing-point-content dark-font-color">
                      Clear upfront pricing. No confusion.
                    </p>
                  </div>
                </div>
                <div className="pricing-permium-button-wrap">
                  <a
                    data-w-id="3639f93c-9926-af2e-c980-6d928b24b809"
                    href="pricing.html#"
                    className="arrow-button w-inline-block"
                  >
                    <div>Get Started Now</div>
                    <div className="arrow-line-wrap">
                      <div
                        style={
                          {
                            WebkitTransform:
                              "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            MozTransform:
                              "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            msTransform:
                              "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            transform:
                              "translate3d(14px, -4px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          } as React.CSSProperties
                        }
                        className="arrow-top-line"
                      ></div>
                      <div className="arrow-middle-line"></div>
                      <div
                        style={
                          {
                            WebkitTransform:
                              "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            MozTransform:
                              "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            msTransform:
                              "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                            transform:
                              "translate3d(14px, 2px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)",
                          } as React.CSSProperties
                        }
                        className="arrow-bottom-line"
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-footer">
        <div className="cta-section wf-section">
          <div className="container w-container">
            <div className="cta-whole-wrap">
              <div className="cta-wrap">
                <div className="cta-content-wrap">
                  <p className="cta-sub-title">Connect with us</p>
                  <h2 className="cta-title">
                    Let’s work together on the next big digital thing .
                  </h2>
                  <div className="cta-form-block w-form">
                    <form
                      id="wf-form-Hero-Form"
                      name="wf-form-Hero-Form"
                      data-name="Hero Form"
                      method="get"
                      className="cta-form"
                    >
                      <div className="cta-form-flex">
                        <input
                          type="email"
                          className="cta-input w-input"
                          maxLength={256}
                          name="Hero-Email-2"
                          data-name="Hero Email 2"
                          aria-label="Enter your email"
                          placeholder="Enter your email"
                          id="Hero-Email-2"
                          required={true}
                        />
                        <input
                          type="submit"
                          value="Get Started"
                          data-wait="Please wait..."
                          className="button w-button"
                        />
                      </div>
                    </form>
                    <div className="success-message w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="error-message w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cta-bg-wrap"></div>
            </div>
          </div>
        </div>
        <div className="footer wf-section">
          <div className="container w-container">
            <div>
              <div className="footer-widget-flex">
                <div className="footer-whole-wrap">
                  <a
                    href="#home"
                    aria-current="page"
                    className="footer-brand w-inline-block w--current"
                  >
                    AffionStudio
                  </a>
                </div>
                <div
                  data-w-id="9f830d42-9bef-2bb5-e50d-03d06424a11d"
                  className="footer-widget-wrap"
                >
                  <p className="sub-title">Email</p>
                  <a href="mailto:info@unifolio.com" className="footer-link">
                    info@unifolio.com
                  </a>
                </div>

                <div
                  data-w-id="9f830d42-9bef-2bb5-e50d-03d06424a127"
                  className="footer-widget-wrap"
                >
                  <p className="sub-title">Follow</p>
                  <div className="footer-social-wrap">
                    <a
                      href="https://www.instagram.com/"
                      className="footer-social-link w-inline-block"
                    >
                      <img
                        src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae71db917c0c60a93b880a_Footer-01.svg"
                        loading="lazy"
                        alt="Footer Social Image"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      className="footer-social-link w-inline-block"
                    >
                      <img
                        src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae71da3ca69813c8f76077_Footer-02.svg"
                        loading="lazy"
                        alt="Footer Social Image"
                      />
                    </a>
                    <a
                      href="https://twitter.com/"
                      className="footer-social-link w-inline-block"
                    >
                      <img
                        src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae71da6c21e625b0dc347e_Footer-03.svg"
                        loading="lazy"
                        alt="Footer Social Image"
                      />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      className="footer-social-link w-inline-block"
                    >
                      <img
                        src="https://assets.website-files.com/63ad48963db63e3052377b5d/63ae71db892ff67a97948f39_Footer-04.svg"
                        loading="lazy"
                        alt="Footer Social Image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-wrap">
              <p
                data-w-id="9f830d42-9bef-2bb5-e50d-03d06424a137"
                className="copyright-content"
              >
                Copyright © AffionDesign
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
