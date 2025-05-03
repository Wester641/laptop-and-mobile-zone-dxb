import React from "react";
import FilterMobiles from "./filter-components/FilterMobiles";
import FilterHeadphones from "./filter-components/FilterHeadphones";
import FilterUsb from "./filter-components/FilterUsb";
import FilterCamera from "./filter-components/FilterCamera";
import FilterAccessories from "./filter-components/FilterAccessories";
import FilterLaptop from "./filter-components/FilterLaptop";
import FilterAll from "./filter-components/FilterAll";

const TrendingOne = () => {
  return (
    <section className="trending-productss pt-80">
      <div className="container container-lg relative ">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading mb-24">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Trending Products12123</h5>
              <ul
                className="nav common-tab style-two nav-pills"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-all-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all"
                    type="button"
                    role="tab"
                    aria-controls="pills-all"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-mobile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-mobile"
                    type="button"
                    role="tab"
                    aria-controls="pills-mobile"
                    aria-selected="false"
                  >
                    Mobile
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-headphone-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-headphone"
                    type="button"
                    role="tab"
                    aria-controls="pills-headphone"
                    aria-selected="false"
                  >
                    Headphone
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-usb-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-usb"
                    type="button"
                    role="tab"
                    aria-controls="pills-usb"
                    aria-selected="false"
                  >
                    USB
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-camera-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-camera"
                    type="button"
                    role="tab"
                    aria-controls="pills-camera"
                    aria-selected="false"
                  >
                    Camera
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-laptop-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-laptop"
                    type="button"
                    role="tab"
                    aria-controls="pills-laptop"
                    aria-selected="false"
                  >
                    Laptop
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-accessories-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-accessories"
                    type="button"
                    role="tab"
                    aria-controls="pills-accessories"
                    aria-selected="false"
                  >
                    Accessories
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="trending-products-box rounded-16 overflow-hidden flex-between position-relative mb-24">
            <div className="d-md-block d-none ps-xxl-5 ps-md-4">
              <img
                src="assets/images/thumbs/trending-products-img1.png"
                alt=""
              />
            </div>
            <div className="trending-products-box__content px-4 d-block w-100 text-center py-32">
              <h6 className="mb-0 trending-products-box__title">
                Laptop Pro <span className="h4 mb-0 fw-semibold">20%</span> off
                All Time On Order Now $980
              </h6>
            </div>
            <div className="d-md-block d-none pe-xxl-5 me-xxl-5 pe-md-4">
              <img
                src="assets/images/thumbs/trending-products-img2.png"
                alt=""
              />
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
              tabIndex={0}
            >
              <FilterAll />
            </div>
            <FilterMobiles />
            <FilterHeadphones />
            <FilterUsb />
            <FilterCamera />
            <FilterLaptop />
            <FilterAccessories />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingOne;
