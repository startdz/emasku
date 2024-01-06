import CarrouselHero from '@/components/Hero/Carousel';
import RootHeader from '@/containers/Layouts/Header';
import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <RootHeader title='Emasku'>
        <section className='mx-auto'>
          <CarrouselHero />
        </section>
      </RootHeader>
    </React.Fragment>
  );
};

export default Home;
