import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


// This is left to right Animation
const TextAnimation = ({ children, animationProps }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const variants = {
    hidden: { opacity: 0, x: '-10vw '},
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      className="custom-animation"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};

export default TextAnimation;
