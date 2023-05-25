import Breadcrumb from "@/components/Common/Breadcrumb";
import ServicesPageComponent from "@/components/Services/ServicesPageComponent";
import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import settings from "./carouselSettings";

const ServicesPage = () => {
  return (
    <section id="services">
      <Breadcrumb
        pageName="Услуги"
        description="На этой странице вы сможете получить информацию о предаставляемых нами услугах."
      />
      <ServicesPageComponent />
      <div className="container relative ">
        <Carousel></Carousel>
      </div>
    </section>
  );
};

export default ServicesPage;
