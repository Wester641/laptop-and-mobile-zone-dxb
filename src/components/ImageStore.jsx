import React from "react";
import { Link } from "react-router-dom";

const ImageStore = () => {
  return (
    <section className="day-sale">
      <div className="container container-lg">
        <div className="day-sale-box rounded-16 overflow-hidden flex-between position-relative mb-24 z-1">
          <img
            src="/assets/images/bg/day-sale-bg.png"
            alt=""
            className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 cover-img"
          />
          <div className="d-md-block d-none pe-xxl-5 pe-md-4">
            <img src="assets/images/thumbs/day-sale-img2.png" alt="" />
          </div>
          <div className="day-sale-box__content d-block w-100 text-start py-32 ps-lg-0">
            <h5 className="text-white fw-medium mb-24">
              Welcome to our store!
            </h5>
            <h6 className="text-white fw-medium mb-0">
              Great deals are already in-store!
            </h6>
            <Link
              to="/contact"
              className="btn btn-outline-white flex-align d-inline-flex rounded-pill gap-8 mt-28"
              tabIndex={0}
            >
              <i className="ph ph-laptop text-xl d-flex" /> Learn more
            </Link>
          </div>
          <div className="d-xl-block d-none">
            <img className="p-20" src="/assets/images/store-image.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageStore;
