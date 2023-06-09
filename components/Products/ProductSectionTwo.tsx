import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const ProductSectionTwo = () => {
  return (
    <section className="my-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image src="/products/EMIAC.png" alt="about image" fill />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <SectionTitle
                  title="ОПЕРАЦИОННАЯ СИСТЕМА EMIAS OS 1.0"
                  paragraph="Операционная система EMIAS OS 1.0 автоматизированной информационной системы города Москвы «Единая медицинская информационно-аналитическая система города Москвы»."
                  mb="44px"
                />
                <Link
                  href="/products/emias"
                  className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSectionTwo;
