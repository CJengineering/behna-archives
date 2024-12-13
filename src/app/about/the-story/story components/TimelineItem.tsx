import React, { useRef, useEffect, useState } from 'react';

interface TimelineItemProps {
  year: number;
  events: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, events }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const yearElement = yearRef.current;
    if (!container || !yearElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(false);
        } else {
          const rect = container.getBoundingClientRect();
          setIsSticky(rect.top < 0);
        }
      },
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex relative">
      <div className="w-1/4">
        <div
          ref={yearRef}
          className={`text-2xl font-bold py-2 ${
            isSticky
              ? 'fixed top-0 bg-gray-100 z-10'
              : 'relative'
          }`}
          style={{
            width: '25%', // Match the width of the parent div
            maxWidth: '25%' // Ensure it doesn't exceed the width of the parent
          }}
        >
          {year}
        </div>
      </div>
      <div className="w-3/4 border-l-2 border-gray-200 pl-4 pb-8">
        {events.map((event, index) => (
          <div key={index} className="mb-4">
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;

