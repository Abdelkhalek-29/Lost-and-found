import React from 'react';
import './FeatureSection.css';
import useIntersectionObserver from './useIntersectionObserver';

function FeatureSection() {
  const [isVisible, elementRef] = useIntersectionObserver();

  return (
    <div className="FeatureSection" ref={elementRef}>
      <div className={`FeatureSection-content ${isVisible ? 'active' : ''}`}>
        <h2>
          Unlimited access to 10M+ Peoples<span className='dot'>.</span>
        </h2>
      </div>
    </div>
  );
}

export default FeatureSection;
