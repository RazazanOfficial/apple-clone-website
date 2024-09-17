import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  //=-=-=||useStates||=-=-=//
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  //=-=-=||handels||=-=-=//
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) setVideoSrc(smallHeroVideo);
    else setVideoSrc(heroVideo);
  };

  //=-=-=||useEffect||=-=-=//
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => removeEventListener('resize', handleVideoSrcSet);
  }, []);

  //=-=-=||gsap||=-=-=//
  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to('#cta',{
      opacity: 1,
      delay:1.85,
      y: -25
    })
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            playsInline={true}
            autoPlay
            muted
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} />
          </video>
        </div>
        <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
          <a href="#highlights" className='btn'>Buy</a>
          <p className='font-normal text-xl'>From $199/ month or 999$</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
