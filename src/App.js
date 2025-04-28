import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageTwo from "./pages/HomePageTwo";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import PhosphorIconInit from "./helper/PhosphorIconInit";

import VendorTwoDetailsPage from "./pages/VendorTwoDetailsPage";
import WishlistPage from "./pages/WishlistPage";
function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />

      <Routes>
        <Route exact path="/" element={<HomePageTwo />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route
          exact
          path="/product-details"
          element={<ProductDetailsPageTwo />}
        />
        <Route
          exact
          path="/product-details-two"
          element={<ProductDetailsPageTwo />}
        />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/wishlist" element={<WishlistPage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route
          exact
          path="/vendor-two-details"
          element={<VendorTwoDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
