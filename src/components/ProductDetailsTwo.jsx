import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getCountdown } from "../helper/Countdown";
import { settingsThumbs } from "../helper/Setting";
import Map from "./Map";

const ProductDetailsTwo = ({ laptop }) => {
  const [timeLeft, setTimeLeft] = useState(getCountdown());
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState();

  // increment & decrement
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () =>
    setQuantity(quantity > 1 ? quantity - 1 : quantity);

  useEffect(() => {
    if (laptop?.specifications?.spec_images?.length > 0) {
      setMainImage(laptop.specifications.spec_images[0]);
    }
  }, [laptop]);

  useEffect(() => {
    setTotalPrice(laptop?.price * quantity);
  }, [quantity, laptop?.price]);

  return (
    <section className="product-details py-80">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xl-9">
            <div className="row gy-4">
              <div className="col-xl-6">
                <div className="product-details__left">
                  <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                    <div className="">
                      <div className="product-details__thumb flex-center h-100">
                        <img src={mainImage} alt="Main Product" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-24">
                    <div className="product-details__images-slider">
                      <Slider {...settingsThumbs}>
                        {laptop?.specifications?.spec_images.map(
                          (image, index) => (
                            <div
                              className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8"
                              key={index}
                              onClick={() => setMainImage(image)}
                            >
                              <img
                                className="thum"
                                src={image}
                                alt={`Thumbnail ${index}`}
                              />
                            </div>
                          )
                        )}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="product-details__content">
                  <h5 className="mb-12">{laptop.title}</h5>
                  <div className="flex-align flex-wrap gap-12">
                    <div className="flex-align gap-12 flex-wrap">
                      <div className="flex-align gap-8">
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        {/* <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span> */}
                      </div>
                      <span className="text-sm fw-medium text-neutral-600">
                        {laptop.rating} Star Rating
                      </span>
                      <span className="text-sm fw-medium text-gray-500">
                        ({laptop.reviewCount} reviews)
                      </span>
                    </div>
                    <span className="text-sm fw-medium text-gray-500">|</span>
                    <span className="text-gray-900">
                      <span className="text-gray-400">SKU: </span>
                      {laptop.sku || "No SKU"}
                    </span>
                  </div>
                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                  <p className="text-gray-700">
                    {laptop.description || "No description"}
                  </p>
                  <div className="my-32 flex-align gap-16 flex-wrap">
                    <div className="flex-align gap-8">
                      <div className="flex-align gap-8 text-main-two-600">
                        <i className="ph-fill ph-seal-percent text-xl" />
                        -10%
                      </div>
                      <h6 className="mb-0"> {laptop.new_price}</h6>
                    </div>
                    <div className="flex-align gap-8">
                      <span className="text-gray-700">Regular Price</span>
                      <h6 className="text-xl text-gray-400 mb-0 fw-medium">
                        {laptop.old_price}
                      </h6>
                    </div>
                  </div>
                  <div className="my-32 flex-align flex-wrap gap-12">
                    <Link
                      to="#"
                      className="px-12 py-8 text-sm rounded-8 flex-align gap-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                    >
                      Shipping Charge
                      <i className="ph ph-caret-right" />
                    </Link>
                    <Link
                      to="#"
                      className="px-12 py-8 text-sm rounded-8 flex-align gap-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                    >
                      Security &amp; Privacy
                      <i className="ph ph-caret-right" />
                    </Link>
                  </div>
                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                  <div className="mt-32">
                    <h6 className="mb-16">Quick Overview</h6>
                    <div className="flex-between align-items-start flex-wrap gap-16">
                      <div>
                        <span className="text-gray-900 d-block mb-12">
                          Colors:
                          {/* <span className="fw-medium">Mineral Silver</span> */}
                        </span>
                        <div className="color-list flex-align gap-8">
                          {laptop?.colors?.map((color) => (
                            <button
                              type="button"
                              className={`color-list__button w-20 h-20 border border-2 border-gray-50 rounded-circle ${
                                color ? color : "bg-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-900 d-block mb-12">
                          Pattern Name:
                          {/* <span className="fw-medium">with offer</span> */}
                        </span>
                        <div className="flex-align gap-8 flex-wrap">
                          <Link
                            to="#"
                            className="px-12 py-8 text-sm rounded-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                          >
                            with offer
                          </Link>
                          <Link
                            to="#"
                            className="px-12 py-8 text-sm rounded-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                          >
                            12th Gen Laptop
                          </Link>
                          <Link
                            to="#"
                            className="px-12 py-8 text-sm rounded-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                          >
                            without offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                  <Link
                    to="https://wa.me/971569440264"
                    className="btn btn-black flex-center gap-8 rounded-8 py-16"
                  >
                    <i className="ph ph-whatsapp-logo text-lg" />
                    Request More
                  </Link>
                  <div className="mt-32">
                    <span className="fw-medium text-gray-900">
                      100% Guarantee Safe Checkout
                    </span>
                    <div className="mt-10">
                      <img src="assets/images/thumbs/gateway-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="product-details__sidebar py-40 px-32 border border-gray-100 rounded-16">
              <div className="mb-32">
                <label
                  htmlFor="delivery"
                  className="h6 activePage mb-8 text-heading fw-semibold d-block"
                >
                  Delivery
                </label>
                <div className="flex-align border border-gray-100 rounded-4 px-16">
                  <span className="text-xl d-flex text-main-600">
                    <i className="ph ph-map-pin" />
                  </span>
                  <select
                    defaultValue={1}
                    className="common-input border-0 px-8 rounded-4"
                    id="delivery"
                  >
                    <option value={1}>Saudi Arabia</option>
                    <option value={1}>Dubai</option>
                    <option value={1}>Abu Dhabi</option>
                    <option value={1}>Iran</option>
                    <option value={1}>United States</option>
                  </select>
                </div>
              </div>
              <div className="mb-32">
                <label
                  htmlFor="stock"
                  className="text-lg mb-8 text-heading fw-semibold d-block"
                >
                  Total Stock: {laptop.total_stock}
                </label>
                <span className="text-xl d-flex">
                  <i className="ph ph-location" />
                </span>
                <div className="d-flex rounded-4 overflow-hidden">
                  <button
                    onClick={decrementQuantity}
                    type="button"
                    className="quantity__minus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                  >
                    <i className="ph ph-minus" />
                  </button>
                  <input
                    type="number"
                    className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-16"
                    id="stock"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={incrementQuantity}
                    type="button"
                    className="quantity__plus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                  >
                    <i className="ph ph-plus" />
                  </button>
                </div>
              </div>
              <div className="mb-32">
                <div className="flex-between flex-wrap gap-8 border-bottom border-gray-100 pb-16 mb-16">
                  <span className="text-gray-500">Price</span>
                  <h6 className="text-lg mb-0">{totalPrice}$</h6>
                </div>
                <div className="flex-between flex-wrap gap-8">
                  <span className="text-gray-500">Shipping</span>
                  <h6 className="text-lg mb-0">Free all over the Dubai</h6>
                </div>
              </div>
              <Link
                to="#"
                className="btn btn-main flex-center gap-8 rounded-8 py-16 fw-normal mt-48"
              >
                <i className="ph ph-shopping-cart-simple text-lg" />
                Buy Now
              </Link>
              {/* <Link
                to="#"
                className="btn btn-outline-main rounded-8 py-16 fw-normal mt-16 w-100"
              >
                Buy Now
              </Link> */}
              <div className="mt-32">
                <div className="px-16 py-8 bg-main-50 rounded-8 flex-between gap-24 mb-14">
                  <span className="w-32 h-32 bg-white text-main-600 rounded-circle flex-center text-xl flex-shrink-0">
                    <i className="ph-fill ph-truck" />
                  </span>
                  <span className="text-sm text-neutral-600">
                    Ship from <span className="fw-semibold">Easypost</span>
                  </span>
                </div>
                <div className="px-16 py-8 bg-main-50 rounded-8 flex-between gap-24 mb-0">
                  <span className="w-32 h-32 bg-white text-main-600 rounded-circle flex-center text-xl flex-shrink-0">
                    <i className="ph-fill ph-storefront" />
                  </span>
                  <span className="text-sm text-neutral-600">
                    Sold by:{" "}
                    <span className="fw-semibold">{laptop.shop_name}</span>
                  </span>
                </div>
              </div>
              <div className="mt-32">
                <div className="px-32 py-16 rounded-8 border border-gray-100 flex-between gap-8">
                  <Link to="#" className="d-flex text-main-600 text-28">
                    <i className="ph-fill ph-chats-teardrop" />
                  </Link>
                  <span className="h-26 border border-gray-100" />
                  <div className="dropdown on-hover-item">
                    <button
                      className="d-flex text-main-600 text-28"
                      type="button"
                    >
                      <i className="ph-fill ph-share-network" />
                    </button>
                    <div className="on-hover-dropdown common-dropdown border-0 inset-inline-start-auto inset-inline-end-0">
                      <ul className="flex-align gap-16">
                        <li>
                          <Link
                            to="/https://www.facebook.com"
                            className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                          >
                            <i className="ph-fill ph-facebook-logo" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/https://www.twitter.com"
                            className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                          >
                            <i className="ph-fill ph-twitter-logo" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/https://www.linkedin.com"
                            className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                          >
                            <i className="ph-fill ph-instagram-logo" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/https://www.pinterest.com"
                            className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                          >
                            <i className="ph-fill ph-linkedin-logo" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </section>
  );
};

export default ProductDetailsTwo;
