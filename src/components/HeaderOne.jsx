import React, { useEffect, useState } from "react";
import query from "jquery";
import { Link, NavLink } from "react-router-dom";

const HeaderOne = () => {
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

      {/* ======================= Middle Top Start ========================= */}
      <div className="header-top bg-main-700 flex-between">
        <div className="container container-lg">
          <div className="flex-between flex-wrap gap-8">
            <ul className="flex-align flex-wrap d-none d-md-flex">
              <li className="border-right-item">
                <Link
                  to="#"
                  className="text-white text-sm hover-text-decoration-underline"
                >
                  Become A Seller
                </Link>
              </li>
              <li className="border-right-item">
                <Link
                  to="#"
                  className="text-white text-sm hover-text-decoration-underline"
                >
                  About us
                </Link>
              </li>
              <li className="border-right-item">
                <Link
                  to="#"
                  className="text-white text-sm hover-text-decoration-underline"
                >
                  Free Delivery
                </Link>
              </li>
              <li className="border-right-item">
                <Link
                  to="#"
                  className="text-white text-sm hover-text-decoration-underline"
                >
                  Returns Policy
                </Link>
              </li>
            </ul>
            <ul className="header-top__right flex-align flex-wrap">
              <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                <Link to="#" className="text-white text-sm py-8">
                  Help Center
                </Link>
                <ul className="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                  <li className="nav-submenu__item">
                    <Link
                      to="#"
                      className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                    >
                      <span className="text-sm d-flex">
                        <i className="ph ph-headset" />
                      </span>
                      Call Center
                    </Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link
                      to="#"
                      className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                    >
                      <span className="text-sm d-flex">
                        <i className="ph ph-chat-circle-dots" />
                      </span>
                      Live Chat
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                {/* Display the selected language here */}
                <Link to="#" className="selected-text text-white text-sm py-8">
                  {selectedLanguage}
                </Link>
                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleLanguageChange("English")}
                    >
                      <img
                        src="assets/images/thumbs/flag1.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      English
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleLanguageChange("Japan")}
                    >
                      <img
                        src="assets/images/thumbs/flag2.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      Japan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleLanguageChange("French")}
                    >
                      <img
                        src="assets/images/thumbs/flag3.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      French
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleLanguageChange("Germany")}
                    >
                      <img
                        src="assets/images/thumbs/flag4.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      Germany
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleLanguageChange("Bangladesh")}
                    >
                      <img
                        src="assets/images/thumbs/flag6.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      Bangladesh
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleLanguageChange("South Korea")}
                    >
                      <img
                        src="assets/images/thumbs/flag5.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      South Korea
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                {/* Display the selected currency */}
                <Link to="#" className="selected-text text-white text-sm py-8">
                  {selectedCurrency}
                </Link>
                <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleCurrencyChange("USD")}
                    >
                      <img
                        src="assets/images/thumbs/flag1.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      USD
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleCurrencyChange("Yen")}
                    >
                      <img
                        src="assets/images/thumbs/flag2.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      Yen
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleCurrencyChange("Franc")}
                    >
                      <img
                        src="assets/images/thumbs/flag3.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      Franc
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleCurrencyChange("EURO")}
                    >
                      <img
                        src="assets/images/thumbs/flag4.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      EURO
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleCurrencyChange("BDT")}
                    >
                      <img
                        src="assets/images/thumbs/flag6.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      BDT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                      onClick={() => handleCurrencyChange("WON")}
                    >
                      <img
                        src="assets/images/thumbs/flag5.png"
                        alt=""
                        className="w-16 h-12 rounded-4 border border-gray-100"
                      />
                      WON
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="border-right-item">
                <Link
                  to="/account"
                  className="text-white text-sm py-8 flex-align gap-6"
                >
                  <span className="icon text-md d-flex">
                    {" "}
                    <i className="ph ph-user-circle" />{" "}
                  </span>
                  <span className="hover-text-decoration-underline">
                    My Account
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ======================= Middle Top End ========================= */}
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
            <img src="assets/images/logo/logo.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            {/* Nav Menu Start */}
            <ul className="nav-menu flex-align nav-menu--mobile">
              {/* Home Menu */}
              <li
                onClick={() => handleMenuClick(0)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 0 ? "d-block" : ""
                }`}
              >
                <Link to="#" className="nav-menu__link">
                  Home
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 0 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Electronics Page
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Home Electronics
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Shop Menu */}
              <li
                onClick={() => handleMenuClick(1)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 1 ? "d-block" : ""
                }`}
              >
                <Link to="#" className="nav-menu__link">
                  Shop
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 1 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/shop"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Shop
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/product-details"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Shop Details
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/product-details-two"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Shop Details Two
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Pages Menu */}
              <li
                onClick={() => handleMenuClick(2)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 2 ? "d-block" : ""
                }`}
              >
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
                      to="/cart"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Cart
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/wishlist"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/checkout"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Checkout{" "}
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/become-seller"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      Become Seller
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/account"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Account
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Vendors Menu */}
              <li
                onClick={() => handleMenuClick(3)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 3 ? "d-block" : ""
                }`}
              >
                <Link to="#" className="nav-menu__link">
                  Vendors
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 3 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/vendor"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      Vendors
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/vendor-details"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      Vendor Details
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/vendor-two"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      Vendors Two
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/vendor-two-details"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      Vendors Two Details
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Blog Menu */}
              <li
                onClick={() => handleMenuClick(4)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 4 ? "d-block" : ""
                }`}
              >
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
                      to="/blog"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Blog
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      to="/blog-details"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                      onClick={() => setActiveIndex(null)}
                    >
                      {" "}
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Contact Us Menu */}
              <li className="nav-menu__item">
                <Link
                  to="/contact"
                  className="nav-menu__link"
                  onClick={() => setActiveIndex(null)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
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
            {/* Category Dropdown Start Up Header*/}
            <div className="category on-hover-item">
              <button
                onClick={handleCategoryToggle}
                type="button"
                className="category__button flex-align gap-8 fw-medium p-16  text-heading_categories"
              >
                <span className="icon text-2xl d-xs-flex d-none">
                  <i className="ph ph-dots-nine" />
                </span>
                <span className="d-sm-flex d-none">Categories</span>
                <span className="arrow-icon text-xl d-flex">
                  <i className="ph ph-caret-down" />
                </span>
              </button>
              <div
                className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${
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
                  <i className="ph ph-x" />
                </button>
                {/* Logo Start */}
                <div className="logo px-16 d-lg-none d-block">
                  <Link to="/" className="link">
                    <img src="assets/images/logo/logo.png" alt="Logo" />
                  </Link>
                </div>
                {/* Logo End */}
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
            {/* Category Dropdown End  */}
            {/* form Category Start */}
            <div className="flex-align gap-16 d-sm-none">
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

      {/* ======================= Middle Header Start ========================= */}

      {/* ======================= Middle Header End ========================= */}
      {/* ==================== Header Start Here ==================== */}

      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default HeaderOne;
