import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const ContactPage = () => {
  return (
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
                <ScrollLink
                  className="nav-link w-nav-link"
                  to=""
                  smooth={true}
                  duration={500}
                  offset={-10000}
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  className="nav-link w-nav-link"
                  to="about"
                  smooth={true}
                  duration={500}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  className="nav-link w-nav-link"
                  to="portfolio"
                  smooth={true}
                  duration={500}
                >
                  Portfolio
                </ScrollLink>

                <ScrollLink
                  className="nav-link w-nav-link"
                  to="pricing"
                  smooth={true}
                  duration={500}
                >
                  Pricing
                </ScrollLink>
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
  );
};

export default ContactPage;
