import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);

  return (
    <div className="bg-[#f8f7f6] p-[40px_30px] rounded-lg cursor-pointer w-full max-w-[400px] h-full flex flex-col group transition-transform duration-300">
      <Link to={product.link} className="flex-grow flex flex-col items-center mb-[30px] overflow-hidden">
        <div className="w-full h-[250px] flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.className} 
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        </div>
      </Link>
      
      <div className="text-[14px] mb-[15px] text-[#666]">
        Color: {selectedColor}
      </div>
      
      <div className="flex gap-[10px] mb-[20px]">
        {product.colors.map((color, idx) => (
          <button 
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              setSelectedColor(color.name);
            }}
            className={`w-[32px] h-[32px] rounded-full border-2 border-transparent cursor-pointer transition-all duration-200 relative hover:scale-110 ${
              selectedColor === color.name ? 'border-black ring-2 ring-white ring-offset-2 ring-offset-black' : ''
            }`}
            style={{ backgroundColor: color.hex }}
            aria-label={`Select ${color.name}`}
          />
        ))}
      </div>
      
      <div className="text-[18px] font-semibold mb-[15px] text-black min-h-[50px]">
        {product.name}
      </div>
      
      <div className="text-[20px] font-bold text-black mt-auto">
        {product.price}
      </div>
    </div>
  );
};

export default ProductCard;
