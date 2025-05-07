import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetailsTwo from "../components/ProductDetailsTwo";
// import NewArrivalTwo from "../components/NewArrivalTwo";
import ShippingOne from "../components/ShippingOne";
// import NewsletterOne from "../components/NewsletterOne";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import { useParams } from "react-router-dom";
import { newMacbooks } from "../data/macbooks";
import HeaderOne from "../components/HeaderOne";

const ProductDetailsPageTwo = () => {
  const { id } = useParams();
  const project = newMacbooks.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Product not found in newMacbooks</p>;
  }

  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      {/* <HeaderTwo category={true} /> */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Product Details"} />

      {/* ProductDetailsTwo */}
      <ProductDetailsTwo laptop={project} />

      {/* NewArrivalTwo */}
      {/* <NewArrivalTwo /> */}

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      {/* <NewsletterOne /> */}

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ProductDetailsPageTwo;
