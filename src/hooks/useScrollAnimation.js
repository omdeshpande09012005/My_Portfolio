import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold, 
    triggerOnce,
    margin: "-100px 0px"  
  });

  return [ref, isInView];
};

export const useStaggeredScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold,
    triggerOnce: true,
    margin: "-50px 0px"
  });

  return [ref, isInView];
};

export default useScrollAnimation;
