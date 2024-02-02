import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Typewriter from 'typewriter-effect/dist/core';

const Hero = () => {

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 }
  });

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      // strings: ['Jerald Malacaste Batal', 'React Js Web Developer.', 'Frontend Web Developer.'],
      autoStart: true,
      changeDelay: 2000,
      loop: true,
      pauseFor: 0
    });

    typewriter
      .typeString('Jerald Malacaste <br/> Batal.')
      .deleteChars(40)
      .typeString('React Js <br/> Web Developer.')
      .deleteChars(40)
      .typeString('Frontend <br/> Web Developer.')
      .deleteChars(40)
      .start();
  }, [])

  return (
    <div className="p-10 flex items-center justify-center h-screen bg-[url(./public/images/hero-background.jpg)]" id="hero">
      <animated.div style={props}>
        <h1 className=" text-white text-[50px] md:text-[70px]">
          {"I'm"} <span id="typewriter"></span>
        </h1>
      </animated.div>
    </div>
  )
}

export default Hero