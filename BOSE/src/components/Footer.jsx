const Footer = () => {
  return (
    <footer className="mt-12 px-5 md:px-10 py-[60px] pb-10 bg-white border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-[#666] text-sm mb-[60px]">
          Home / Products
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[100px] mb-[80px]">
          <div>
            <h3 className="text-base font-semibold mb-6 text-black">Customer Care</h3>
            <ul className="list-none p-0">
              <li className="mb-[18px]"><a href="#" className="no-underline text-[#666] text-[15px] hover:text-black transition-colors">Order Tracking</a></li>
              <li className="mb-[18px]"><a href="#" className="no-underline text-[#666] text-[15px] hover:text-black transition-colors">Contact Us</a></li>
              <li className="mb-[18px]"><a href="#" className="no-underline text-[#666] text-[15px] hover:text-black transition-colors">Download Invoice</a></li>
              <li className="mb-[18px]"><a href="#" className="no-underline text-[#666] text-[15px] hover:text-black transition-colors">Business Inquires</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-6 text-black">Our Company</h3>
            <ul className="list-none p-0">
              <li className="mb-[18px]"><a href="#" className="no-underline text-[#666] text-[15px] hover:text-black transition-colors">About Us</a></li>
              <li className="mb-[18px]"><a href="#" className="no-underline text-[#666] text-[15px] hover:text-black transition-colors">Privacy Policy</a></li>
              <li className="mb-[18px]"><a href="#" className="no-underline text-[#666] text-[15px] hover:text-black transition-colors">Return & Replacement Policy</a></li>
              <li className="mb-[18px]"><a href="#" className="no-underline text-[#666] text-[15px] hover:text-black transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-10 border-t border-[#ddd] gap-5 md:gap-0">
          <div className="text-[#666] text-sm">
            Nexxbase Marketing Private Limited
          </div>

          <div className="flex items-center">
            <img 
              src="https://cdn.shopify.com/s/files/1/0904/2873/5761/files/Nxxbase_final_logo-04-cropped.svg?v=1748603594" 
              alt="Bose Authorised Distributor - Nexxbase" 
              className="h-[36px] w-auto max-w-[329px] object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
