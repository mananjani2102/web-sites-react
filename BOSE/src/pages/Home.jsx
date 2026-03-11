import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const recommendedProducts = [
  {
    name: "Soundlink Flex (2nd Gen)",
    price: "₹16,900",
    image: "https://www.boseindia.com/cdn/shop/files/SLFLXII_Black_Front_RGB_result.webp?v=1745485782",
    link: "/speaker",
    colors: [
      { name: "Black", hex: "#000" },
      { name: "Blue Steel", hex: "#5a7a9a" },
      { name: "Yellow", hex: "#f5e6b3" },
    ]
  },
  {
    name: "Bose QuietComfort Ultra Earbuds",
    price: "₹25,900",
    image: "https://www.boseindia.com/cdn/shop/files/SF_QCUEB_black_gallery_1_816x612_x2_43bfe95e-7681-4203-81b5-335694519a63.png?v=1746359549",
    link: "/earbuds",
    colors: [
      { name: "Black", hex: "#000" },
      { name: "Beige", hex: "#d4c4b0" },
      { name: "Navy", hex: "#2e4057" },
      { name: "Gray", hex: "#a09d9d" },
      { name: "Light Gray", hex: "#c8d0d8" },
    ]
  },
  {
    name: "Bose QuietComfort Ultra Headphones",
    price: "₹35,900",
    image: "https://www.boseindia.com/cdn/shop/files/QCUH_SF_PDP_Gallery_WhiteSmoke_x2_1_1.png?v=1747822521",
    link: "#",
    colors: [
      { name: "White Smoke", hex: "#fff" },
      { name: "Dark Gray", hex: "#1a1a1a" },
      { name: "Midnight Blue", hex: "#1e3a5f" },
      { name: "Silver", hex: "#c0c0c0" },
      { name: "Burgundy", hex: "#8b4667" },
    ]
  },
  {
    name: "Bose Soundlink Max Portable Speaker",
    price: "₹41,900",
    image: "https://www.boseindia.com/cdn/shop/files/CREA-1040_SLMPS-SLMPS_RopeHandle_CarbonBlue_result.webp?v=1745782940",
    link: "#",
    colors: [
      { name: "Black", hex: "#000" },
      { name: "Blue Steel", hex: "#5a7a9a" },
      { name: "Yellow", hex: "#f5e6b3" },
    ]
  }
];

const features = [
  {
    title: "100% Genuine Bose Products",
    description: "Shop confidently knowing every Bose product is original and directly sourced, with full authenticity guaranteed.",
    icon: "https://www.boseindia.com/cdn/shop/files/original.png?v=1745992994"
  },
  {
    title: "Officially Authorized Reseller",
    description: "Nexxbase is an officially authorized reseller of Bose, ensuring genuine products and full warranty eligibility.",
    icon: "https://www.boseindia.com/cdn/shop/files/authorized_reseller.png?v=1745993012"
  },
  {
    title: "Fast & Secure Shipping",
    description: "Receive your Bose products quickly and safely with our fast, tracked delivery service, ensuring they arrive in perfect condition every time.",
    icon: "https://www.boseindia.com/cdn/shop/files/SSB_DTC_Complimentary_Shipping_Icon_x2_74c0ce2c-72a3-400c-882d-14d8df0bc675.png?v=1747304554"
  },
  {
    title: "Order Support",
    description: "Get reliable support on your order status, tracking, and queries right up to your delivery.",
    icon: "https://www.boseindia.com/cdn/shop/files/order_support.png?v=1745993040"
  }
];

const Home = () => {
  return (
    <div id="home-page" className="w-full">
      <section id="hero-banner" className="w-full h-[80vh] relative overflow-hidden">
        <img 
          src="https://www.boseindia.com/cdn/shop/files/QCH24-WhiteSmoke_Holiday25_HolidayHarder_01.jpg?v=1761562058" 
          className="hero-image block w-full h-full absolute top-0 left-0 object-cover object-center" 
          alt="Hero" 
        />
        <div id="hero-text-box" className="absolute left-5 md:left-[40px] bottom-[100px] md:bottom-[150px] text-white">
          <h1 className="hero-title text-[40px] md:text-[60px] font-extrabold leading-[1.1] text-white my-0">Celebrate with Sick Beats!</h1>
          <p className="hero-subtitle mt-[10px] text-[18px] md:text-[20px] font-medium">Quiet Comfort Headphones</p>
          <button className="hero-button mt-[25px] flex items-center justify-center p-[17px_20px] text-[16px] border-none bg-white text-black cursor-pointer rounded-[4px] w-[128px] h-[50px] font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      <div id="recommended-products-container" className="px-5 md:px-[40px] py-[60px] mx-auto max-w-[1600px]">
        <h1 className="section-heading text-[32px] md:text-[48px] font-black mb-[30px] md:mb-[60px] text-black text-center md:text-left">Recommended</h1>
        
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] justify-items-center">
          {recommendedProducts.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>

      <div id="promo-images-container" className="max-w-[1600px] mx-auto mb-20 flex flex-col items-center">
        
        <div id="promo-card-1" className="promo-box relative w-full flex justify-center mb-10 overflow-hidden group">
          <img src="https://www.boseindia.com/cdn/shop/files/QCHLE26-MoonlightGrey_Lifestyle_002.jpg?v=1758198679" alt="Moonlight Grey" className="promo-image w-full h-auto object-contain transition-transform duration-700 md:group-hover:scale-[1.02]" />
          <div className="overlay-box absolute inset-0 flex flex-col justify-end items-center md:items-end text-white p-5 md:p-20 text-center md:text-right pb-10">
            <p className="promo-text-small text-[16px] md:text-[26px] mb-1 md:mb-3">Exclusive Color Drop</p>
            <h2 className="promo-title text-[28px] md:text-[70px] font-bold mb-1 md:mb-3">Moonlight Grey</h2>
            <p className="promo-description text-[14px] md:text-[40px] mb-3 md:mb-8 font-light">Limited Edition Quiet Comfort Headphones</p>
            <button className="shop-button w-[110px] h-[40px] md:w-[130px] md:h-[50px] text-[14px] md:text-[16px] bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">Shop Now</button>
          </div>
        </div>

        <div id="promo-card-2" className="promo-box relative w-full flex justify-center mb-10 overflow-hidden group">
          <img src="https://www.boseindia.com/cdn/shop/files/CREA-1040_SLMPS_Black_3509.png?v=1758909899" alt="Soundlink Speakers" className="promo-image w-full h-auto object-contain transition-transform duration-700 md:group-hover:scale-[1.02]" />
          <div className="overlay-box absolute inset-0 flex flex-col justify-end items-center md:items-start text-white p-5 md:p-20 text-center md:text-left pb-10">
            <h2 className="promo-title text-[28px] md:text-[70px] font-bold mb-1 md:mb-3 leading-tight">Hits Different. Powerful,<br />Portable.</h2>
            <p className="promo-description text-[14px] md:text-[40px] mb-3 md:mb-8 font-light">Bose Soundlink Speakers</p>
            <button className="shop-button w-[110px] h-[40px] md:w-[130px] md:h-[50px] text-[14px] md:text-[16px] bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">Shop Now</button>
          </div>
        </div>

        <div id="promo-card-3" className="promo-box relative w-full flex justify-center overflow-hidden group">
          <img src="https://www.boseindia.com/cdn/shop/files/QCUH24_Expressive_White_LowAngle.png?v=1758911433" alt="White Smoke" className="promo-image w-full h-auto object-contain transition-transform duration-700 md:group-hover:scale-[1.02]" />
          <div className="overlay-box absolute inset-0 flex flex-col justify-end items-center md:items-start text-white p-5 md:p-20 text-center md:text-left pb-10">
            <p className="promo-text-small text-[#AEEDFF] text-[16px] md:text-[26px] mb-1 md:mb-3 tracking-widest font-semibold uppercase">LIMITED EDITION</p>
            <h2 className="promo-title text-[#AEEDFF] text-[28px] md:text-[70px] font-bold mb-1 md:mb-3">Level up in White Smoke</h2>
            <p className="promo-description text-[#AEEDFF] text-[14px] md:text-[40px] mb-3 md:mb-8 font-light">Surrender to the feel with QuietComfort Ultra<br className="hidden md:block"/> Headphones in a dreamy colour.</p>
            <button className="shop-button w-[110px] h-[40px] md:w-[130px] md:h-[50px] text-[14px] md:text-[16px] bg-[#AEEDFF] text-black font-semibold rounded hover:bg-white transition-colors">Shop Now</button>
          </div>
        </div>

      </div>

      <div id="features-container" className="max-w-[1200px] mx-auto px-5 md:px-[40px] mb-20 text-center md:text-left">
        <h1 className="features-heading text-[32px] md:text-[48px] font-black mb-[40px] md:mb-[80px] text-black">Why Buy from Nexxbase</h1>

        <div className="features-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          {features.map((f, i) => (
            <div key={i} className="feature-item flex flex-col items-center md:items-start text-center md:text-left">
              <div className="feature-icon-box w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-[#e8e8e8] rounded-full flex items-center justify-center mb-[20px] md:mb-[30px] transition-transform duration-300 hover:scale-110">
                <img src={f.icon} alt={f.title} className="icon-image w-[50px] h-[50px] md:w-[65px] md:h-[65px] object-contain" />
              </div>
              <h3 className="feature-title text-[20px] md:text-[24px] font-bold mb-[15px] md:mb-[20px] text-black leading-[1.3]">{f.title}</h3>
              <p className="feature-desc text-[15px] md:text-[16px] leading-[1.6] text-[#666]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="sound-is-power-container" className="max-w-[1600px] mx-auto px-5 md:px-[40px] mb-20">
        <div className="sound-header mb-[30px] md:mb-[50px] text-center md:text-left">
          <h1 className="sound-heading text-[36px] md:text-[56px] font-black mb-[10px] md:mb-[15px] text-black">Sound is Power</h1>
          <p className="sound-subheading text-[16px] md:text-[20px] text-[#666]">Looks good. Sounds amazing. Your life, your soundtrack, your Bose.</p>
        </div>

        <div className="sound-grid grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-[20px] h-auto md:h-[600px]">
          <div className="sound-image-box relative overflow-hidden rounded-lg cursor-pointer group row-span-1 md:row-span-2 col-span-1 md:col-span-1 h-[300px] md:h-[600px]">
             <img src="https://www.boseindia.com/cdn/shop/files/sf_pdp_SLMPS_soundfeature_576x432_x2-2_be41612a-942b-4a93-8187-3e38eeeda2c9.png?v=1747375930" alt="Sound Feature" className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105" />
             <div className="sound-overlay absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-black/40 pointer-events-none" />
          </div>

          <div className="sound-image-box relative overflow-hidden rounded-lg cursor-pointer group h-[300px] md:h-full">
            <img src="https://www.boseindia.com/cdn/shop/files/sf_pdp_SLMPS_portability_carousel_1176x968_x2-1_1ef3e3ac-0cd2-4231-bbf6-56f809feaa03.png?v=1747375931" alt="Portability" className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105" />
            <div className="sound-overlay absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-black/40 pointer-events-none" />
          </div>

          <div className="sound-image-box relative overflow-hidden rounded-lg cursor-pointer group h-[300px] md:h-full">
            <img src="https://www.boseindia.com/cdn/shop/files/PHS_Black_00046_RGB_square_18da2e4e-0b98-4131-a883-d87cddfcad5b.jpg?v=1747375930" alt="Speaker" className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105" />
            <div className="sound-overlay absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-black/40 pointer-events-none" />
          </div>

          <div className="sound-image-box relative overflow-hidden rounded-lg cursor-pointer group h-[300px] md:h-full">
            <img src="https://www.boseindia.com/cdn/shop/files/SF_QCUEB_NoiseCancelling_456x456_x2_141e21b5-a3a4-483e-843b-1f7c8d485c53.png?v=1747375930" alt="Noise Cancelling" className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105" />
            <div className="sound-overlay absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-black/40 pointer-events-none" />
          </div>

          <div className="sound-image-box relative overflow-hidden rounded-lg cursor-pointer group h-[300px] md:h-full">
            <img src="https://www.boseindia.com/cdn/shop/files/portable_home_speaker_product_page_say_it_2x1_2910a0d9-1842-4fca-a88a-49303d7c0ff8.jpg?v=1747375929" alt="Portable Speaker" className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105" />
            <div className="sound-overlay absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-black/40 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
