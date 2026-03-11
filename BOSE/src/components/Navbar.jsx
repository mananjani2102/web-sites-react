import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full h-[75px] flex justify-between items-center px-10 bg-white z-[99] border-b border-[#ececec] sticky top-0">
      <Link to="/">
        <img src="https://www.boseindia.com/cdn/shop/files/logo.svg?v=1747735890" className="w-[170px] h-[20px]" alt="Bose Logo" />
      </Link>

      <ul className="hidden md:flex gap-[35px] list-none">
        <li><Link to="#" className="no-underline text-black font-semibold text-sm hover:text-gray-600 transition-colors">SHOP</Link></li>
        <li><Link to="#" className="no-underline text-black font-semibold text-sm hover:text-gray-600 transition-colors">EXPLORE</Link></li>
        <li><Link to="#" className="no-underline text-black font-semibold text-sm hover:text-gray-600 transition-colors">CONTACT US</Link></li>
      </ul>

      <div className="flex items-center gap-5">
        <div className="hidden md:flex items-center border border-[#ddd] px-2 py-1 rounded-full">
          <input type="text" placeholder="Search" className="border-none outline-none text-sm px-2 w-[150px] bg-transparent" />
          <button className="border-none bg-none cursor-pointer text-gray-800 hover:text-black hover:bg-transparent">
            <Search size={18} />
          </button>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="32.5" height="32.5" viewBox="0 0 32 32" fill="none" className="cursor-pointer hover:opacity-75 transition-opacity">
          <g clipPath="url(#clip0_119_81)">
              <path d="M16.0671 5.33331C10.1757 5.33331 5.40039 10.1086 5.40039 16C5.40039 21.8913 10.1757 26.6666 16.0671 26.6666C21.9584 26.6666 26.7337 21.8913 26.7337 16C26.7337 10.1086 21.9584 5.33331 16.0671 5.33331ZM10.3871 23.3933C10.9304 20.676 13.2964 18.7073 16.0671 18.6666C18.8377 18.7073 21.2037 20.676 21.7471 23.3933C18.4097 25.9726 13.7511 25.9726 10.4137 23.3933H10.3871ZM13.4004 14.6666C13.4004 13.194 14.5944 12 16.0671 12C17.5397 12 18.7337 13.194 18.7337 14.6666C18.7337 16.1393 17.5397 17.3333 16.0671 17.3333C14.5944 17.3333 13.4004 16.1393 13.4004 14.6666ZM22.8471 22.3933C22.1864 20.2886 20.6077 18.5973 18.5537 17.7933C20.2824 16.418 20.5697 13.902 19.1944 12.1726C17.8191 10.4433 15.3031 10.1566 13.5737 11.532C11.8444 12.9073 11.5577 15.4233 12.9331 17.1526C13.1217 17.39 13.3364 17.6046 13.5737 17.7933C11.5197 18.5973 9.94106 20.2886 9.28039 22.3933C5.73972 18.6473 5.90639 12.74 9.65306 9.19931C13.3997 5.65865 19.3064 5.82531 22.8471 9.57198C26.2471 13.1693 26.2471 18.796 22.8471 22.3933Z" fill="#131317"></path>
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="32.5" height="32.5" viewBox="0 0 32 32" fill="none" className="cursor-pointer hover:opacity-75 transition-opacity">
          <g clipPath="url(#clip0_8_59)">
              <path d="M9.89815 9.31734L9.30642 7.30005H5.43994V8.64491H8.29777L11.3035 18.8659C11.5147 19.582 12.171 20.0742 12.9174 20.0762H22.7819C23.5774 20.0708 24.2613 19.51 24.4226 18.7314L26.4399 9.31734H9.89815ZM23.1114 18.4624C23.0791 18.6191 22.942 18.7314 22.7819 18.7314H12.9174C12.7681 18.7314 12.6363 18.6325 12.5946 18.4893L10.2949 10.6622H24.779L23.1114 18.4624ZM14.854 23.1022C14.854 24.0308 14.1015 24.7832 13.1729 24.7832C12.2443 24.7832 11.4918 24.0308 11.4918 23.1022C11.4918 22.1735 12.2443 21.4211 13.1729 21.4211C14.1015 21.4211 14.854 22.1735 14.854 23.1022ZM24.268 23.1022C24.268 24.0308 23.5155 24.7832 22.5869 24.7832C21.6583 24.7832 20.9058 24.0308 20.9058 23.1022C20.9058 22.1735 21.6583 21.4211 22.5869 21.4211C23.5155 21.4211 24.268 22.1735 24.268 23.1022Z" fill="#131317"></path>
          </g>
        </svg>
        <img src="https://www.boseindia.com/cdn/shop/files/1._line_dots_1_1.png?v=1747200244" className="w-[141.8px] h-[32.5px] cursor-pointer hover:opacity-75 transition-opacity" alt="Menu" />
      </div>
    </header>
  );
};

export default Navbar;
