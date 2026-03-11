import { useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const speakerImages = [
  "https://www.boseindia.com/cdn/shop/files/SLFLXII_Black_Front_RGB_result.webp?v=1745485782",
  "https://www.boseindia.com/cdn/shop/files/SLFLXII_Black_Top_RGB_result.webp?v=1745485782",
  "https://www.boseindia.com/cdn/shop/files/SLFLXII_Black_Right_RGB_result.webp?v=1745485782",
  "https://www.boseindia.com/cdn/shop/files/SLFLXII_Black_Left_RGB_result.webp?v=1745485782",
  "https://www.boseindia.com/cdn/shop/files/SLFLXII_Black_Back_RGB_result.webp?v=1745485782"
];

const colors = [
  { name: 'Black', hex: '#000' },
  { name: 'Blue', hex: '#2e4758' },
  { name: 'Yellow', hex: '#f3e58f' },
  { name: 'Teal', hex: '#4a6a73' },
  { name: 'Gray', hex: '#b3b3ad' },
  { name: 'Pink', hex: '#e8d7db' }
];

const SpeakerPage = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0].name);

  return (
    <div className="max-w-[1600px] mx-auto px-5 md:px-[80px] py-[40px] md:py-[60px] flex flex-col md:flex-row gap-[40px] md:gap-[70px]">
      
      {/* Left Column: Gallery */}
      <div className="flex-1 lg:flex-[1.3] relative">
        <p className="text-[14px] text-[#666] mb-[20px]">Speaker</p>
        <ImageGallery images={speakerImages} />
      </div>

      {/* Right Column: Details */}
      <div className="flex-1 mt-5 md:mt-0">
        <h1 className="text-[26px] md:text-[32px] font-bold mb-[15px] leading-tight text-black">
          Bose SoundLink Flex Portable Speaker (2nd Gen)
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#555] leading-relaxed mb-1">
          Meet the updated SoundLink Flex Speaker. Surprisingly big, bold sound in a super-packable
          size — perfect for sharing tunes and adventures anywhere you go.
        </p>
        <a href="#" className="flex text-[#0071e3] no-underline mt-[5px] hover:underline mb-6 text-[15px]">Read More</a>

        <div className="mt-[25px]">
          <p className="text-[15px] text-[#666] mb-2 font-medium">Colour <span className="text-black font-semibold ml-1">{selectedColor}</span></p>
          <div className="flex flex-wrap gap-[10px]">
            {colors.map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(color.name)}
                className={`w-[35px] h-[35px] rounded-full border border-[#ccc] transition-all hover:scale-110 cursor-pointer ${
                  selectedColor === color.name ? 'ring-2 ring-black ring-offset-2 border-transparent' : ''
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select ${color.name}`}
              />
            ))}
          </div>
        </div>

        <p className="text-[22px] md:text-[28px] font-bold mt-[30px] text-black">₹16,900</p>
        
        <button className="bg-[#111] text-white border-none px-[30px] py-[12px] cursor-pointer text-[15px] mt-[20px] h-[60px] w-full max-w-[300px] font-bold rounded hover:bg-black transition-colors shadow-lg">
          ADD TO CART
        </button>

        <div className="mt-[40px] bg-gray-50 p-6 rounded-lg border border-gray-100">
          <p className="font-semibold text-black mb-4">Benefits of buying with Nexxbase</p>
          <ul className="list-none leading-[1.8] space-y-3">
            <li className="flex items-center text-[#555]">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 20 20" fill="none" className="mr-3 shrink-0">
                <path d="M10 19.3751C4.8225 19.3751 0.625 15.1776 0.625 10.0001C0.625 4.82256 4.8225 0.62506 10 0.62506C12.0806 0.61756 14.1025 1.31381 15.7375 2.60006L15 3.58756C13.5762 2.46569 11.8125 1.86194 10 1.87506C5.5125 1.87506 1.875 5.51256 1.875 10.0001C1.875 14.4876 5.5125 18.1251 10 18.1251C14.4875 18.1251 18.125 14.4876 18.125 10.0001C18.1256 9.01069 17.9437 8.02944 17.5875 7.10631L18.75 6.65631C19.1631 7.72256 19.375 8.85631 19.375 10.0001C19.375 15.1776 15.1775 19.3751 10 19.3751ZM19.8187 2.94381L18.9312 2.05631L10 10.9938L6.06875 7.06256L5.1875 7.94381L10 12.7563L19.8187 2.94381Z" fill="#00C28F"></path>
              </svg>
              Genuine products
            </li>
            <li className="flex items-center text-[#555]">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 20 20" fill="none" className="mr-3 shrink-0">
                <path d="M10 19.3751C4.8225 19.3751 0.625 15.1776 0.625 10.0001C0.625 4.82256 4.8225 0.62506 10 0.62506C12.0806 0.61756 14.1025 1.31381 15.7375 2.60006L15 3.58756C13.5762 2.46569 11.8125 1.86194 10 1.87506C5.5125 1.87506 1.875 5.51256 1.875 10.0001C1.875 14.4876 5.5125 18.1251 10 18.1251C14.4875 18.1251 18.125 14.4876 18.125 10.0001C18.1256 9.01069 17.9437 8.02944 17.5875 7.10631L18.75 6.65631C19.1631 7.72256 19.375 8.85631 19.375 10.0001C19.375 15.1776 15.1775 19.3751 10 19.3751ZM19.8187 2.94381L18.9312 2.05631L10 10.9938L6.06875 7.06256L5.1875 7.94381L10 12.7563L19.8187 2.94381Z" fill="#00C28F"></path>
              </svg>
              Authorised reseller
            </li>
            <li className="flex items-center text-[#555]">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 20 20" fill="none" className="mr-3 shrink-0">
                <path d="M10 19.3751C4.8225 19.3751 0.625 15.1776 0.625 10.0001C0.625 4.82256 4.8225 0.62506 10 0.62506C12.0806 0.61756 14.1025 1.31381 15.7375 2.60006L15 3.58756C13.5762 2.46569 11.8125 1.86194 10 1.87506C5.5125 1.87506 1.875 5.51256 1.875 10.0001C1.875 14.4876 5.5125 18.1251 10 18.1251C14.4875 18.1251 18.125 14.4876 18.125 10.0001C18.1256 9.01069 17.9437 8.02944 17.5875 7.10631L18.75 6.65631C19.1631 7.72256 19.375 8.85631 19.375 10.0001C19.375 15.1776 15.1775 19.3751 10 19.3751ZM19.8187 2.94381L18.9312 2.05631L10 10.9938L6.06875 7.06256L5.1875 7.94381L10 12.7563L19.8187 2.94381Z" fill="#00C28F"></path>
              </svg>
              Priority shipping
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default SpeakerPage;
