import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      <div className="relative bg-[#f5f5f7] rounded-[15px] h-[300px] md:h-[460px] flex items-center justify-center mb-[25px]">
        <button 
          onClick={prevImage}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white border border-[#ccc] w-[45px] h-[45px] rounded-full flex items-center justify-center cursor-pointer shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronLeft className="text-gray-600" />
        </button>
        
        <img 
          src={images[currentIndex]} 
          alt="Product View" 
          className="w-full max-w-[500px] h-auto max-h-[90%] object-contain transition-all duration-400 ease-in-out" 
        />
        
        <button 
          onClick={nextImage}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white border border-[#ccc] w-[45px] h-[45px] rounded-full flex items-center justify-center cursor-pointer shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronRight className="text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center md:justify-start gap-[15px] overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            className={`w-[75px] h-[55px] object-contain bg-[#f5f5f7] border rounded-[5px] cursor-pointer transition-all duration-300 md:flex-shrink-0 ${
              currentIndex === idx ? 'border-[#0071e3] scale-105 shadow-sm' : 'border-[#ccc] hover:border-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
