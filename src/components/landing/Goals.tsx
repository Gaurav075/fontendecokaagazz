import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const Goals: React.FC = () => {
  const stats: Stat[] = [
    {
      value: 50,
      label: 'Trees Saved',
      suffix: 'K+',
    },
    {
      value: 200,
      label: 'Tons of Waste Recycled',
      suffix: 'T+',
    },
    {
      value: 10000,
      label: 'Local Jobs Created',
      suffix: '+',
    },
    {
      value: 150,
      label: 'Business Partners',
      suffix: '+',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const [animatedValues, setAnimatedValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let currentValue = 0;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          currentValue = Math.min(currentValue + increment, stat.value);

          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = Math.round(currentValue);
            return newValues;
          });

          if (currentStep >= steps) {
            clearInterval(interval);
          }
        }, duration / steps);

        return () => clearInterval(interval);
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={statsSectionRef}
      style={{ backgroundColor: '#4c3c34' }}
      className="py-16"
    >
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">Our Impact Goals</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                {stat.prefix || ''}
                {animatedValues[index].toLocaleString()}
                {stat.suffix || ''}
              </div>
              <div className="text-lg text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
