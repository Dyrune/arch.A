import { useEffect, useRef } from 'react';

export const useInViewObserver = () => {
  const elementsRef = useRef([]); // Store references to observed elements

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    }, observerOptions);

    elementsRef.current.forEach((el, index) => {
      if (el) {
        el.style.transitionDelay = `${index * 0.5}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return elementsRef;
};
