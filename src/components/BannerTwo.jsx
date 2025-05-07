import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BannerTwo = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="banner-two maxWidth">
      <div className="container container-lg">
        <div className="banner-two-wrapper d-flex align-items-start">
          {/* <div className="w-265 d-lg-block d-none flex-shrink-0">
            <div className="responsive-dropdown style-two common-dropdown nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 position-relative border-top-0">
              <button
                type="button"
                className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
              >
                <i className="ph ph-x" />{" "}
              </button>
              <div className="logo px-16 d-lg-none d-block">
                <Link to="/" className="link">
                  <img src="/assets/images/logo/logo.png" alt="Logo" />
                </Link>
              </div>
              <ul className="responsive-dropdown__list scroll-sm p-0 py-8 overflow-y-auto ">
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Computer Notebooks</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Computer Notebooks
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">HP</Link>
                      </li>
                      <li>
                        <Link to="/shop">Lenovo</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung</Link>
                      </li>
                      <li>
                        <Link to="/shop">DELL</Link>
                      </li>
                      <li>
                        <Link to="/shop">Asus</Link>
                      </li>
                      <li>
                        <Link to="/shop">Microsoft</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Tablet PCs</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Tablet PCs
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">HP</Link>
                      </li>
                      <li>
                        <Link to="/shop">Lenovo</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung</Link>
                      </li>
                      <li>
                        <Link to="/shop">DELL</Link>
                      </li>
                      <li>
                        <Link to="/shop">Asus</Link>
                      </li>
                      <li>
                        <Link to="/shop">Microsoft</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Smartphones</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Smartphones
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">Apple</Link>
                      </li>
                      <li>
                        <Link to="/shop">Nothing Phone</Link>
                      </li>
                      <li>
                        <Link to="/shop">Google Pixel</Link>
                      </li>
                      <li>
                        <Link to="/shop">Huawei</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung Z Fold 2</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung Galaxy S</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Headphone</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Headphones
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">Marshall</Link>
                      </li>
                      <li>
                        <Link to="/shop">Sony</Link>
                      </li>
                      <li>
                        <Link to="/shop">Razer</Link>
                      </li>
                      <li>
                        <Link to="/shop">AirPods</Link>
                      </li>
                      <li>
                        <Link to="/shop">Asus</Link>
                      </li>
                      <li>
                        <Link to="/shop">Apple AirPods Max</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Used Computers</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Used Computers
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">HP</Link>
                      </li>
                      <li>
                        <Link to="/shop">Lenovo</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung</Link>
                      </li>
                      <li>
                        <Link to="/shop">DELL</Link>
                      </li>
                      <li>
                        <Link to="/shop">Asus</Link>
                      </li>
                      <li>
                        <Link to="/shop">Microsoft</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Used Smartphones</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Used Smartphones
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">Apple</Link>
                      </li>
                      <li>
                        <Link to="/shop">Nothing Phone</Link>
                      </li>
                      <li>
                        <Link to="/shop">Google Pixel</Link>
                      </li>
                      <li>
                        <Link to="/shop">Huawei</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung Z Fold 2</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung Galaxy S</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Computer CPU</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Computer CPU
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">HP</Link>
                      </li>
                      <li>
                        <Link to="/shop">Lenovo</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung</Link>
                      </li>
                      <li>
                        <Link to="/shop">DELL</Link>
                      </li>
                      <li>
                        <Link to="/shop">Asus</Link>
                      </li>
                      <li>
                        <Link to="/shop">Microsoft</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Computer Memory</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Computer Memory
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">HP</Link>
                      </li>
                      <li>
                        <Link to="/shop">Lenovo</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung</Link>
                      </li>
                      <li>
                        <Link to="/shop">DELL</Link>
                      </li>
                      <li>
                        <Link to="/shop">Asus</Link>
                      </li>
                      <li>
                        <Link to="/shop">Microsoft</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Monitors</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Monitors
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">HP</Link>
                      </li>
                      <li>
                        <Link to="/shop">Lenovo</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung</Link>
                      </li>
                      <li>
                        <Link to="/shop">DELL</Link>
                      </li>
                      <li>
                        <Link to="/shop">Asus</Link>
                      </li>
                      <li>
                        <Link to="/shop">Microsoft</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Printers</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Printers
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">HP</Link>
                      </li>
                      <li>
                        <Link to="/shop">Lenovo</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung</Link>
                      </li>
                      <li>
                        <Link to="/shop">DELL</Link>
                      </li>
                      <li>
                        <Link to="/shop">Asus</Link>
                      </li>
                      <li>
                        <Link to="/shop">Microsoft</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-submenus-submenu">
                  <Link
                    to="#"
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>Accessories</span>
                    <span className="icon text-md d-flex ms-auto">
                      <i className="ph ph-caret-right" />
                    </span>
                  </Link>
                  <div className="submenus-submenu py-16">
                    <h6 className="text-lg px-16 submenus-submenu__title">
                      Accessories
                    </h6>
                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                      <li>
                        <Link to="/shop">HP</Link>
                      </li>
                      <li>
                        <Link to="/shop">Lenovo</Link>
                      </li>
                      <li>
                        <Link to="/shop">Samsung</Link>
                      </li>
                      <li>
                        <Link to="/shop">DELL</Link>
                      </li>
                      <li>
                        <Link to="/shop">Asus</Link>
                      </li>
                      <li>
                        <Link to="/shop">Microsoft</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="banner-item-two-wrapper rounded-24 overflow-hidden position-relative arrow-center flex-grow-1 mb-0">
            <img
              src="assets/images/bg/banner-two-bg.png"
              alt=""
              className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24"
            />
            <div className="banner-item-two__slider">
              <Slider {...settings}>
                <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <span className="text-white mb-8 h6">
                      Wholesale and retail.
                    </span>
                    <h2 className="banner-item-two__title bounce text-white">
                      The best prices on electronics for everyone
                    </h2>
                    <Link
                      to="/shop"
                      className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                    >
                      Shop Now
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-shopping-cart-simple" />
                      </span>
                    </Link>
                  </div>
                  <div className="banner-item-two__thumb position-absolute bottom-0">
                    <div className="banner-size-img">
                      <img
                        src="assets/images/thumbs/banner-two-img.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <span className="text-white mb-8 h6">
                      Wholesale and retail.
                    </span>
                    <h2 className="banner-item-two__title bounce text-white">
                      The best prices on electronics for everyone
                    </h2>
                    <Link
                      to="/shop"
                      className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                    >
                      Shop Now
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-shopping-cart-simple" />
                      </span>
                    </Link>
                  </div>
                  <div className="banner-item-two__thumb position-absolute bottom-0">
                    <img
                      src="assets/images/thumbs/banner-two-img2.png"
                      alt=""
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
