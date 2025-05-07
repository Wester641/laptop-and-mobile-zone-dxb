import React from "react";
import Preloader from "../helper/Preloader";
import BannerTwo from "../components/BannerTwo";
import PromotionalTwo from "../components/PromotionalTwo";
import DealsOne from "../components/DealsOne";
import ShippingTwo from "../components/ShippingTwo";
import NewsletterTwo from "../components/NewsletterTwo";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";

import HeaderOne from "../components/HeaderOne";

const HomePageTwo = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      {/* <HeaderTwo category={false} /> */}

      <HeaderOne />

      {/* BannerTwo */}
      <BannerTwo />

      {/* PromotionalTwo */}
      <PromotionalTwo />

      {/* DealsOne */}
      <DealsOne />

      {/* TrendingOne */}
      {/* <TrendingOne /> */}

      {/* DiscountOne */}
      {/* <DiscountOne /> */}

      {/* FeaturedOne */}
      {/* <FeaturedOne /> */}

      {/* BigDealOne */}
      {/* <BigDealOne /> */}

      {/* TopSellingTwo */}
      {/* <TopSellingTwo /> */}

      {/* PopularProductsOne */}
      {/* <PopularProductsOne /> */}

      {/* TopVendorsTwo */}
      {/* <TopVendorsTwo /> */}

      {/* DaySaleOne */}
      {/* <DaySaleOne /> */}

      {/* RecentlyViewedOne */}
      {/* <RecentlyViewedOne /> */}

      {/* BrandTwo */}
      {/* <BrandTwo /> */}

      {/* ShippingTwo */}
      <ShippingTwo />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* <UpdateFields /> */}

      {/* <GetFields /> */}

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default HomePageTwo;
