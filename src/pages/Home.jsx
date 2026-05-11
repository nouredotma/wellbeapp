import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../components/Layout/Layout";
import { Option } from "../components/home/Option";
import { Parle } from "../components/home/Parle";
import { Search } from "../components/home/Search";
import { Service } from "../components/home/Service";
import { Articles } from "../components/home/articles";
import ImageComponent from "../components/home/ImageComponent";
import "../styles/App.css";
import BookingSection from "../components/home/BookingSection";

const Home = () => {
  return (
    <Layout>
      <Search />
      <BookingSection />
      <section className="py-12 bg-gray-50">
        <div className="container p-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002366]">
              <span className="relative inline-block">
                Nos prestations
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#002366]/30 rounded-full"></span>
              </span>
            </h2>
            <p className="mt-4 text-gray-600 sm:text-lg max-w-2xl mx-auto">
              Découvrez le meilleur pour votre bien-être.
            </p>
          </div>
          <Service />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container p-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002366]">
              <span className="relative inline-block">
                Les incontournables de la semaine
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#002366]/30 rounded-full"></span>
              </span>
            </h2>
            <p className="mt-4 text-gray-600 sm:text-lg max-w-2xl mx-auto">
              Offres limitées, expériences inoubliables - ne passez pas à côté !
            </p>
          </div>
          <ImageComponent />
        </div>
      </section>

      <Option />
      <Articles />
      <Parle />
    </Layout>
  );
};

export default Home;