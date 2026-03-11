import { useState } from 'react';
import ImageGallery from '../components/ImageGallery';

const earbudsImages = [
  "https://www.boseindia.com/cdn/shop/files/SF_QCUEB_black_gallery_1_816x612_x2_43bfe95e-7681-4203-81b5-335694519a63.png?v=1746359549",
  "https://www.boseindia.com/cdn/shop/files/Bose_QuietComfort_Ultra_Earbuds_Black_at_JB_Hi-Fi_2-1.jpg?v=1753253950",
  "https://www.boseindia.com/cdn/shop/files/Bose_QuietComfort_Ultra_Earbuds_Black_at_JB_Hi-Fi_3-1.jpg?v=1753253949",
  "https://www.boseindia.com/cdn/shop/files/Bose_QuietComfort_Ultra_Earbuds_Black_at_JB_Hi-Fi_1.jpg?v=1753253908",
  "https://www.boseindia.com/cdn/shop/files/CREA-1001_QCUEB24_CaseClosed_Black_1M-Fx1_x2b_RGB.jpg?v=1753254838",
  "https://www.boseindia.com/cdn/shop/files/QCUEBII26-BoseBlack_CaseOpen_RGB.jpg?v=1753254838"
];

const colors = [
  { name: 'Black', hex: '#000' },
  { name: 'White Smoke', hex: '#eee8e5' },
  { name: 'Lunar Blue', hex: '#203449' },
  { name: 'Diamond 60th Edition', hex: '#d3d3d2' },
  { name: 'Moonstone Blue', hex: '#cbdaeb' }
];

const EarbudsPage = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0].name);

  return (
    <div className="max-w-[1600px] mx-auto px-5 md:px-[80px] py-[40px] md:py-[60px] flex flex-col md:flex-row gap-[40px] md:gap-[70px]">
      
      <div className="flex-1 lg:flex-[1.3] relative">
        <p className="text-[14px] text-[#666] mb-[20px]">Earbuds</p>
        <ImageGallery images={earbudsImages} />
      </div>

      <div className="flex-1 mt-5 md:mt-0">
        <h1 className="text-[26px] md:text-[32px] font-bold mb-[15px] leading-tight text-black">
          Bose QuietComfort Ultra Earbuds
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#555] leading-relaxed mb-1">
          Breakthrough spatialized audio for more immersive listening that makes your music feel realer than ever before — no matter the...
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

        <p className="text-[22px] md:text-[28px] font-bold mt-[30px] text-black">₹25,900</p>
        
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

export default EarbudsPage;
