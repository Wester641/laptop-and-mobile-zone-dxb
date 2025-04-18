import React from 'react'
import { Link } from 'react-router-dom'
const trendingLaptops = [
    {
        id: 1,
        stock_state: "Sold",
        rating: "4.8",
        reviewCount: "19k",
        title: "HP Chromebook 14-inch Laptop",
        shop_name: "By Laptop Shop",
        old_price: "$149.99",
        new_price: "$119.99",
        detail_link: "/product-details-two",
        image: "assets/images/thumbs/hp.png",
        delivered_by: "Aug 02",
        discount: "19%OFF",
    },
    {
        id: 2,
        stock_state: "Sold",
        rating: "4.8",
        reviewCount: "19k",
        title: "HP Chromebook 14-inch Laptop",
        shop_name: "By Laptop Shop",
        old_price: "$149.99",
        new_price: "$119.99",
        detail_link: "/product-details-two",
        image: "assets/images/thumbs/hp.png",
        delivered_by: "Aug 02",
        discount: "19%OFF",
    },
    {
        id: 3,
        stock_state: "Sold",
        rating: "4.8",
        reviewCount: "19k",
        title: "HP Chromebook 14-inch Laptop",
        shop_name: "By Laptop Shop",
        old_price: "$149.99",
        new_price: "$119.99",
        detail_link: "/product-details-two",
        image: "assets/images/thumbs/hp.png",
        delivered_by: "Aug 02",
        discount: "19%OFF",
    },
    {
        id: 4,
        stock_state: "Sold",
        rating: "4.8",
        reviewCount: "19k",
        title: "HP Chromebook 14-inch Laptop",
        shop_name: "By Laptop Shop",
        old_price: "$149.99",
        new_price: "$119.99",
        detail_link: "/product-details-two",
        image: "assets/images/thumbs/hp.png",
        delivered_by: "Aug 02",
        discount: "19%OFF",
    },
    {
        id: 6,
        stock_state: "Sold",
        rating: "4.8",
        reviewCount: "19k",
        title: "HP Chromebook 14-inch Laptop",
        shop_name: "By Laptop Shop",
        old_price: "$149.99",
        new_price: "$119.99",
        detail_link: "/product-details-two",
        image: "assets/images/thumbs/hp.png",
        delivered_by: "Aug 02",
        discount: "19%OFF",
    },
    {
        id: 7,
        stock_state: "Sold",
        rating: "4.8",
        reviewCount: "19k",
        title: "HP Chromebook 14-inch Laptop",
        shop_name: "By Laptop Shop",
        old_price: "$149.99",
        new_price: "$119.99",
        detail_link: "/product-details-two",
        image: "assets/images/thumbs/hp.png",
        delivered_by: "Aug 02",
        discount: "19%OFF",
    },

]

function FilterAll() {
    return (
        <div className="row g-12">
            {trendingLaptops.map((laptop) => (
                <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6">
                    <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                        <Link
                            to={laptop.detail_link}
                            className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                        >
                            <span className="product-card__badge bg-tertiary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                {laptop.stock_state}
                            </span>
                            <img
                                src={laptop.image}
                                alt=""
                                className="w-auto  max-width" />
                        </Link>
                        <div className="product-card__content mt-16">
                            <span className="text-success-600 bg-success-50 text-sm fw-medium py-4 px-8">
                                {laptop.discount}
                            </span>
                            <h6 className="title text-lg fw-semibold my-16">
                                <Link
                                    to="/product-details-two"
                                    className="link text-line-2"
                                    tabIndex={0}
                                >
                                    {laptop.title}
                                </Link>
                            </h6>
                            <div className="flex-align gap-6">
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
                                    <span className="text-15 fw-medium text-warning-600 d-flex">
                                        <i className="ph-fill ph-star" />
                                    </span>
                                </div>
                                <span className="text-xs fw-medium text-gray-500">
                                    {laptop.rating}
                                </span>
                                <span className="text-xs fw-medium text-gray-500">
                                    {laptop.reviewCount}
                                </span>
                            </div>
                            <span className="py-2 px-8 text-xs rounded-pill text-main-two-600 bg-main-two-50 mt-16">
                                {laptop.shop_name}
                            </span>
                            <div className="product-card__price mt-16 mb-30">
                                <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                    {laptop.old_price}
                                </span>
                                <span className="text-heading text-md fw-semibold ">
                                    {laptop.new_price}
                                    <span className="text-gray-500 fw-normal">/Qty</span>
                                </span>
                            </div>
                            <span className="text-neutral-600">
                                Delivered by <span className="text-main-600">{laptop.delivered_by}</span>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FilterAll