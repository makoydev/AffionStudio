import { Link as RouterLink } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav sticky"
      >
        <div className="container w-container">
          <div className="nav-menu-flex">
            <a
              href="#home"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              AffionStudio
            </a>
            <div className="nav-menu-link-flex">
              <nav role="navigation" className="nav-menu w-nav-menu ">
                <div className="nav-link-flex">
                  <RouterLink className="nav-link w-nav-link" to="/">
                    Home
                  </RouterLink>
                  <RouterLink className="nav-link w-nav-link" to="/">
                    About
                  </RouterLink>
                  <RouterLink className="nav-link w-nav-link" to="/">
                    Portfolio
                  </RouterLink>

                  <RouterLink className="nav-link w-nav-link" to="/">
                    Pricing
                  </RouterLink>
                  <RouterLink to="/contact" className="nav-link w-nav-link">
                    Contact
                  </RouterLink>
                </div>
              </nav>
              <div className="nav-menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
              <div
                data-w-id="db691496-a173-a4a8-6d55-1ae447b76548"
                className="nav-menu-popup-wrap"
              >
                <div className="nav-popup-line-wrap">
                  <div className="nav-popup-line top-menu-line"></div>
                  <div className="nav-popup-line center-menu-line"></div>
                  <div className="nav-popup-line bottom-menu-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-section wf-section">
        <div className="container w-container">
          <div className="banner-wrap">
            <div className="banner-whole-wrap">
              <div className="banner-title-wrap">
                <p className="banner-sub-title">Get in Touch</p>
                <h1 className="banner-title">Contact us</h1>
              </div>
            </div>
            <div className="banner-bg-wrap sub-pages"></div>
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
  );
};

export default ContactPage;
