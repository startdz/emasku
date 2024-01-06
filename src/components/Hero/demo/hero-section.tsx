import React from 'react';
import gram1000 from '@/assets/1000 gr depan 1.png';
import rectangle from '@/assets/Rectangle 29 (1).png';
import serti1000gram from '@/assets/SERTI 1000 Gram 1.png';
import shadowLogo from '@/assets/shadow-logo.png';
import { ColorTemplates } from '@/constants/Resource';
import { Link } from 'react-router-dom';

const HeroSectionCarousel = () => {
  return (
    <React.Fragment>
      <section
        id='hero-section'
        className='w-ful mx-auto flex justify-between items-center'>
        {/* Brand Web text*/}
        <div
          id='text-paragrah'
          className='aspect-square ml-28 flex flex-col justify-around'>
          <div className='flex flex-col justify-center'>
            <h2
              className='text-[80px] uppercase'
              style={{ color: ColorTemplates.primary, fontWeight: '900' }}>
              Emasku
            </h2>
            <p
              className='tracking-widest text-2xl'
              style={{ fontWeight: '900' }}>
              KILOBAR
            </p>
            <p className='font-semibold text-xl'>with QR BullionProtect&reg;</p>
          </div>
          <div className='flex justify-start items-center'>
            <Link
              to={'/'}
              className='inline-block py-2 px-6 rounded-md shadow-xl'
              style={{ backgroundColor: ColorTemplates.primary }}>
              <p className='uppercase text-white font-extrabold tracking-tighter'>
                lihat fitur big gold bar
              </p>
            </Link>
          </div>
        </div>

        {/* Image Hero */}
        <div id='image-section-hero' className='relative'>
          <div id='image-hero' className='relative'>
            <img
              src={shadowLogo}
              alt='shadow-logo'
              className='absolute z-10 right-0'
              width={600}
              height={520}
            />
            <img
              src={rectangle}
              alt='product-emasku'
              className='w-[840px] h-[640px] relative'
            />
          </div>
          <img
            src={gram1000}
            alt='emas1000gram'
            className='absolute top-36 left-36 z-20'
            height={311}
            width={200}
          />
          <img
            src={serti1000gram}
            alt='sertifikat1000gram'
            className='absolute bottom-12 left-[265px] z-30'
            height={280}
            width={380}
          />
        </div>

        {/*  */}
      </section>
    </React.Fragment>
  );
};

export default HeroSectionCarousel;
