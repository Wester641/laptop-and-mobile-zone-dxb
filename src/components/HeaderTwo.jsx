import React, { useEffect, useState } from "react";
import query from "jquery";
import { Link, NavLink } from "react-router-dom";
const HeaderTwo = ({ category }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
    const selectElement = query(".js-example-basic-single");
    selectElement.select2();

    return () => {
      if (selectElement.data("select2")) {
        selectElement.select2("destroy");
      }
    };
  }, []);

  // Set the default language
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Set the default currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  return (
    <>
      <div className="overlay" />
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
      />
      {/* ==================== Search Box Start Here ==================== */}

      <form action="#" className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type="button"
          className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
        >
          <i className="ph ph-x" />
        </button>
        <div className="container">
          <div className="position-relative">
            <input
              type="text"
              className="form-control py-16 px-24 text-xl rounded-pill pe-64"
              placeholder="Search for a product or brand"
            />
            <button
              type="submit"
              className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
            >
              <i className="ph ph-magnifying-glass" />
            </button>
          </div>
        </div>
      </form>
      {/* ==================== Search Box End Here ==================== */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          menuActive && "active"
        }`}
      >
        <button
          onClick={() => {
            handleMenuToggle();
            setActiveIndex(null);
          }}
          type="button"
          className="close-button"
        >
          <i className="ph ph-x" />{" "}
        </button>
        <div className="mobile-menu__inner">
          <Link to="/" className="mobile-menu__logo">
            <img src="/assets/images/logo/logo.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            {/* Nav Menu Start */}
            <ul className="nav-menu flex-align nav-menu--mobile">
              <li
                onClick={() => handleMenuClick(0)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 0 ? "d-block" : ""
                }`}
              >
                <Link to="#" className="nav-menu__link">
                  Home
                </Link>
              </li>
              <li
                onClick={() => handleMenuClick(1)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 1 ? "d-block" : ""
                }`}
              >
                <Link to="/shop" className="nav-menu__link">
                  Shop
                </Link>
              </li>
              <li
                onClick={() => handleMenuClick(1)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 1 ? "d-block" : ""
                }`}
              >
                <Link to="/shop" className="nav-menu__link">
                  Shop
                </Link>
              </li>
              <li
                onClick={() => handleMenuClick(2)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 2 ? "d-block" : ""
                }`}
              >
                <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                  New
                </span>
                <Link to="#" className="nav-menu__link">
                  Pages
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 2 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/cart"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Cart
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/wishlist"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/checkout"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      Checkout
                    </Link>
                  </li>

                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/account"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      Account
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => handleMenuClick(4)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 4 ? "d-block" : ""
                }`}
              >
                <span className="badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4">
                  New
                </span>
                <Link to="#" className="nav-menu__link">
                  Blog
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 4 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/blog"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Blog
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/blog-details"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item">
                <Link to="/contact" className="nav-menu__link">
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Header Two Start ========================= */}
      <header className="header-middle style-two bg-color-neutral">
        <div className="container container-lg">
          <nav className="header-inner flex-between">
            {/* Logo Start */}
            <div className="logo">
              <Link to="/" className="link">
                <img src="/assets/images/logo/logo-two.png" alt="Logo" />
              </Link>
            </div>
            {/* Logo End  */}
            {/* form Category Start */}
            <div className="flex-align gap-16">
              <div className="select-dropdown-for-home-two d-lg-none d-block">
                <i className="ph ph-laptop" />
              </div>
              <form
                action="#"
                className="flex-align flex-wrap form-location-wrapper"
              >
                <div className="search-category style-two d-flex h-48 search-form d-sm-flex d-none">
                  <select
                    defaultValue={1}
                    className="js-example-basic-single border border-gray-200 border-end-0 rounded-0 border-0"
                    name="state"
                  >
                    <option value="all">All Categories</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="tablets">Tablets</option>
                    <option value="accessories">Accessories</option>
                    <option value="headphones">Headphones & Earbuds</option>
                    <option value="smartwatches">Smartwatches</option>
                    <option value="gaming">Gaming Consoles</option>
                    <option value="monitors">Monitors & Displays</option>
                    <option value="cameras">Cameras</option>
                    <option value="printers">Printers & Scanners</option>
                  </select>
                  <div className="search-form__wrapper position-relative">
                    <input
                      type="text"
                      className="search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0"
                      placeholder="Search for a product or brand"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none"
                  >
                    <i className="ph ph-magnifying-glass" />
                  </button>
                </div>
              </form>
            </div>
            {/* form Category start */}
            {/* Header Middle Right start */}
            <div className="header-right flex-align d-lg-block d-none">
              <div className="header-two-activities flex-align flex-wrap gap-32">
                <button
                  type="button"
                  className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                    <i className="ph ph-magnifying-glass" />
                  </span>
                </button>
                <Link
                  to="/wishlist"
                  className="flex-align flex-column gap-8 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-heart" />
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Wishlist
                  </span>
                </Link>
                <Link
                  to="/cart"
                  className="flex-align flex-column gap-8 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-shopping-cart-simple" />
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                  <span className="text-md text-white item-hover__text d-none d-lg-flex">
                    Cart
                  </span>
                </Link>
              </div>
            </div>
            {/* Header Middle Right End  */}
          </nav>
        </div>
      </header>
      {/* ======================= Middle Header Two End ========================= */}
      {/* ==================== Header Two Start Here ==================== */}
      <header
        className={`header bg-white border-bottom border-gray-100 ${
          scroll && "fixed-header"
        }`}
      >
        <div className="container container-lg">
          <nav className="header-inner d-flex justify-content-between gap-8">
            <div className="flex-align menu-category-wrapper">
              {/* Category Dropdown Start */}
              <div
                className={`category-two ${
                  category === false ? "d-block" : "d-none"
                } `}
              >
                <button
                  onClick={handleCategoryToggle}
                  type="button"
                  className="category__button flex-align gap-8 fw-medium bg-main-two-600 p-16 text-white"
                >
                  <span className="icon text-2xl d-xs-flex d-none">
                    <i className="ph ph-dots-nine" />
                  </span>
                  <span className="d-sm-flex d-none">All</span> Categories
                  <span className="arrow-icon text-xl d-flex">
                    <i className="ph ph-caret-down" />
                  </span>
                </button>
                <div
                  className={`responsive-dropdown cat common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 ${
                    activeCategory && "active"
                  }`}
                >
                  <button
                    onClick={() => {
                      handleCategoryToggle();
                      setActiveIndexCat(null);
                    }}
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
                  <ul className="scroll-sm p-0 py-8 overflow-y-auto">
                    <li
                      onClick={() => handleCatClick(0)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 0 ? "active" : ""
                      }`}
                    >
                      <Link
                        onClick={() => setActiveIndexCat(null)}
                        to="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Laptops</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 0 ? "open" : ""
                        }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Laptops
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link to="/shop">MacBooks & Laptops</Link>
                          </li>
                          <li>
                            <Link to="/shop">HP & Dell Laptops</Link>
                          </li>
                          <li>
                            <Link to="/shop">Gaming Laptops</Link>
                          </li>
                          <li>
                            <Link to="/shop">Tablets & iPads</Link>
                          </li>
                          <li>
                            <Link to="/shop">Accessories & Chargers</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(1)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 1 ? "active" : ""
                      }`}
                    >
                      <Link
                        to="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Tablet PCs</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 1 ? "open" : ""
                        }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Tablet PCs
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link to="/shop">Tablets & iPads</Link>
                          </li>
                          <li>
                            <Link to="/shop">Accessories & Chargers</Link>
                          </li>
                          <li>
                            <Link to="/shop">Smart Watches & Wearables</Link>
                          </li>
                          <li>
                            <Link to="/shop">Headphones & Audio</Link>
                          </li>
                          <li>
                            <Link to="/shop">Monitors & Keyboards</Link>
                          </li>
                          <li>
                            <Link to="/shop">iPhones & Apple Devices</Link>
                          </li>
                          <li>
                            <Link to="/shop">Samsung Smartphones</Link>
                          </li>
                          <li>
                            <Link to="/shop">MacBooks & Laptops</Link>
                          </li>
                          <li>
                            <Link to="/shop">HP & Dell Laptops</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(2)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 2 ? "active" : ""
                      }`}
                    >
                      <Link
                        to="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Apple Products</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 2 ? "open" : ""
                        }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Apple Products
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link to="/shop">iPhone</Link>
                          </li>
                          <li>
                            <Link to="/shop">Macbook</Link>
                          </li>
                          <li>
                            <Link to="/shop">iMac</Link>
                          </li>
                          <li>
                            <Link to="/shop">Mac Mini</Link>
                          </li>
                          <li>
                            <Link to="/shop">iPad</Link>
                          </li>
                          <li>
                            <Link to="/shop">Airpods</Link>
                          </li>
                          <li>
                            <Link to="/shop">Airpods Pro</Link>
                          </li>
                          <li>
                            <Link to="/shop">Apple Watch</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(3)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 3 ? "active" : ""
                      }`}
                    >
                      <Link
                        to="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Google Pixels</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 3 ? "open" : ""
                        }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Google Pixels
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link to="/shop">Google Pixels 1</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 2</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 3</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 4</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 5</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 6</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 7</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(4)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 4 ? "active" : ""
                      }`}
                    >
                      <Link
                        to="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span>Used Devices</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 4 ? "open" : ""
                        }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Used Devices
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link to="/shop">HP & Dell Laptops</Link>
                          </li>
                          <li>
                            <Link to="/shop">Nothing Phones</Link>
                          </li>
                          <li>
                            <Link to="/shop">iPhones & Apple Devices</Link>
                          </li>
                          <li>
                            <Link to="/shop">Samsung Smartphones</Link>
                          </li>
                          <li>
                            <Link to="/shop">MacBooks & Laptops</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`category main  on-hover-item bg-main-600 text-white ${
                  category === true ? "d-block" : "d-none"
                }`}
                // dropdown all
              >
                <button
                  type="button"
                  className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-white"
                >
                  <span className="icon text-2xl d-xs-flex d-none">
                    <i className="ph ph-dots-nine" />
                  </span>
                  <span className="d-sm-flex d-none">All</span> Categories
                  <span className="arrow-icon text-xl d-flex">
                    <i className="ph ph-caret-down" />
                  </span>
                </button>
                <div className="responsive-dropdown on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper">
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
                  <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                    <li className="has-submenus-submenu">
                      <Link
                        to="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span className="text-xl d-flex">
                          <i className="ph ph-laptop" />
                        </span>
                        <span>Laptops</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Laptops
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link to="/shop">MacBooks & Laptops</Link>
                          </li>
                          <li>
                            <Link to="/shop">HP & Dell Laptops</Link>
                          </li>
                          <li>
                            <Link to="/shop">Gaming Laptops</Link>
                          </li>
                          <li>
                            <Link to="/shop">Tablets & iPads</Link>
                          </li>
                          <li>
                            <Link to="/shop">Accessories & Chargers</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        to="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span className="text-xl d-flex">
                          <i className="ph ph-devices" />
                        </span>
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
                            <Link to="/shop">Tablets & iPads</Link>
                          </li>
                          <li>
                            <Link to="/shop">Accessories & Chargers</Link>
                          </li>
                          <li>
                            <Link to="/shop">Smart Watches & Wearables</Link>
                          </li>
                          <li>
                            <Link to="/shop">Headphones & Audio</Link>
                          </li>
                          <li>
                            <Link to="/shop">Monitors & Keyboards</Link>
                          </li>
                          <li>
                            <Link to="/shop">iPhones & Apple Devices</Link>
                          </li>
                          <li>
                            <Link to="/shop">Samsung Smartphones</Link>
                          </li>
                          <li>
                            <Link to="/shop">MacBooks & Laptops</Link>
                          </li>
                          <li>
                            <Link to="/shop">HP & Dell Laptops</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        to="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span className="text-xl d-flex">
                          <i className="ph ph-apple-logo" />
                        </span>
                        <span>Apple Products</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Apple Products
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link to="/shop">iPhone</Link>
                          </li>
                          <li>
                            <Link to="/shop">Macbook</Link>
                          </li>
                          <li>
                            <Link to="/shop">iMac</Link>
                          </li>
                          <li>
                            <Link to="/shop">Mac Mini</Link>
                          </li>
                          <li>
                            <Link to="/shop">iPad</Link>
                          </li>
                          <li>
                            <Link to="/shop">Airpods</Link>
                          </li>
                          <li>
                            <Link to="/shop">Airpods Pro</Link>
                          </li>
                          <li>
                            <Link to="/shop">Apple Watch</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        to="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span className="text-xl d-flex">
                          <i className="ph ph-google-logo" />
                        </span>
                        <span>Google Pixels</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Google Pixels
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link to="/shop">Google Pixels 1</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 2</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 3</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 4</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 5</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 6</Link>
                          </li>
                          <li>
                            <Link to="/shop">Google Pixels 7</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-submenus-submenu">
                      <Link
                        to="#"
                        className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                      >
                        <span className="text-xl d-flex">
                          <i className="ph ph-device-mobile" />
                        </span>
                        <span>Used Devices</span>
                        <span className="icon text-md d-flex ms-auto">
                          <i className="ph ph-caret-right" />
                        </span>
                      </Link>
                      <div className="submenus-submenu py-16">
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          Used Devices
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          <li>
                            <Link to="/shop">HP & Dell Laptops</Link>
                          </li>
                          <li>
                            <Link to="/shop">Nothing Phones</Link>
                          </li>
                          <li>
                            <Link to="/shop">iPhones & Apple Devices</Link>
                          </li>
                          <li>
                            <Link to="/shop">Samsung Smartphones</Link>
                          </li>
                          <li>
                            <Link to="/shop">MacBooks & Laptops</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Category Dropdown End  */}
              {/* Menu Start  */}
              <div className="header-menu d-lg-block d-none">
                {/* Nav Menu Start */}
                <ul className="nav-menu flex-align ">
                  <li className="on-hover-item nav-menu__item">
                    <Link to="/" className="nav-menu__link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-menu__item">
                    <NavLink
                      to="/shop"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li className="on-hover-item nav-menu__item has-submenu">
                    <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                      New
                    </span>
                    <Link to="#" className="nav-menu__link">
                      Pages
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/cart"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          Cart
                        </NavLink>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/wishlist"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          Wishlist
                        </NavLink>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/checkout"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          Checkout
                        </NavLink>
                      </li>

                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/account"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          Account
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="on-hover-item nav-menu__item has-submenu">
                    <span className="badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4">
                      New
                    </span>
                    <Link to="#" className="nav-menu__link">
                      Blog Page
                    </Link>
                    <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/blog"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li className="common-dropdown__item nav-submenu__item">
                        <NavLink
                          to="/blog-details"
                          className={(navData) =>
                            navData.isActive
                              ? "common-dropdown__link nav-submenu__link hover-bg-neutral-100 activePage"
                              : "common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                          }
                        >
                          {" "}
                          Blog Details
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-menu__item">
                    <NavLink
                      to="/contact"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              {/* Menu End  */}
            </div>
            {/* Header Right start */}

            {/* Header Right End  */}
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default HeaderTwo;
