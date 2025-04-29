import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetailsTwo from "../components/ProductDetailsTwo";
import NewArrivalTwo from "../components/NewArrivalTwo";
import ShippingOne from "../components/ShippingOne";
import NewsletterOne from "../components/NewsletterOne";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import { useParams } from "react-router-dom";
import { dealLaptops } from "../data/otherLaptops";

const ProductDetailsPageTwo = () => {
  // const { id } = useParams();

  // const project = dealLaptops.find((p) => p.id === id);

  // if (!project) return <p>Project is not defined</p>;

  // console.log(project);

  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Product Details"} />

      {/* ProductDetailsTwo */}
      <ProductDetailsTwo />

      {/* NewArrivalTwo */}
      <NewArrivalTwo />

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ProductDetailsPageTwo;
