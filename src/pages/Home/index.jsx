import React from "react";
import HomeBanner from "../../components/banner";
import dataLogements from "../../data/logements.json";
import LocationCard from "../../components/LocationCard";
import homeImg from "../../assets/hBanner.png";
import './_index.scss';

function Home() {
  return (
    <div className="container">
      <HomeBanner classes={{container: 'banner', img: 'banner__img'}} image={homeImg} text={'Chez vous, partout et ailleurs'} />
      <section className='location__container'>
        {dataLogements.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </section>
    </div>
  );
}

export default Home;
