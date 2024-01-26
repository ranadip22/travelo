import React from "react";
import Hero from "../components/hero/Hero";
import Offers from "../components/offers/Offers"
import TourType from "../components/tour-type/TourType";
import MostPopular from "../components/most-popular/Most-popular";
import Reviews from "../components/reviews/Reviews";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

function Home() {
    return (
        <>
            <Hero />
            <Offers />
            <TourType />
            <MostPopular />
            <Reviews />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home