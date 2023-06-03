import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductSectionOne from "@/components/Products/ProductSectionOne";
import ProductSectionTwo from "@/components/Products/ProductSectionTwo";
import React from "react";
const productsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Средства защиты"
        description="разработанные ООО 'ИТБ'"
      />
      <section id="products" className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <ProductSectionOne />
          <ProductSectionTwo />
        </div>
      </section>
    </>
  );
};

export default productsPage;
