import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch your data from data.json or your API endpoint
    fetch("Data.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full">
      <div className="slider-container relative w-full h-52 md:h-[400px]">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`slide absolute md:h-[400px] w-full h-40 transition-transform duration-300 transform translate-x-${100 * (index - currentIndex)} ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image.photo} alt={image.brand} className="object-cover w-full   px-4 h-40  md:h-full opacity-85 " />
          </div>
          
        ))}
      </div>
      <div>
       
      </div>
      <div className="flex justify-center md:mt-5 mt-4">
        <button onClick={goToPrevious} className="btn btn-primary mr-4">
          Previous
        </button>
        <button onClick={goToNext} className="btn btn-secondary">
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
