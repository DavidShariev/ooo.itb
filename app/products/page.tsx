import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductSectionOne from "@/components/Products/ProductSectionOne";
import ProductSectionTwo from "@/components/Products/ProductSectionTwo";
import React from "react";
const productsPage = () => {
  return (
    <section id="products">
      <div className="container">
        <Breadcrumb pageName="Средвства защиты" description="" />

        <ProductSectionOne />
        <ProductSectionTwo />
      </div>
    </section>
  );
};

export default productsPage;
