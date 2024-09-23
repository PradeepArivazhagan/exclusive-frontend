import { useState, useEffect } from 'react';

const CarouselComponent = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="relative">
      <div className="flex items-center justify-center h-screen">
        <div className="relative w-screen">
          <div
            className="absolute top-0 left-0 w-screen h-screen bg-gray-900"
            style={{ zIndex: -1 }}
          />
          <div className="relative flex w-screen h-screen overflow-hidden">
            <div
              className="absolute top-0 left-0 w-screen h-screen transform translate-x-full"
              style={{ zIndex: 1 }}
            >
              <div className="w-screen h-screen">{items[currentIndex]}</div>
            </div>
            <div
              className="absolute top-0 left-0 w-screen h-screen transform translate-x-0"
              style={{ zIndex: 1 }}
            >
              <div className="w-screen h-screen">{items[(currentIndex + 1) % items.length]}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <button
          className="px-4 py-2 bg-gray-900 text-white rounded-l"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-gray-900 text-white rounded-r"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)}
          disabled={currentIndex === items.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;