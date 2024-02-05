import { useEffect, useState } from "react"

const useFadeScroll = (id) => {
  const [isFade, setisFade] = useState(false);
  let initialStyle= "transition-opacity duration-1000"

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition = document.getElementById(id).offsetTop;

      if (scrollPosition > elementPosition - window.innerHeight + 100) {
        setisFade(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]);

  const fadeScroll = () => {
    return isFade ? `${initialStyle} opacity-400 translate-y-0` : `${initialStyle} opacity-0 translate-y-2`
  }

  return fadeScroll
}

export { useFadeScroll };
