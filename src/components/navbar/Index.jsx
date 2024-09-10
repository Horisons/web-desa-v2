import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <nav className="bg-[#1e3a5f] text-white p-4 shadow-md fixed top-0 left-0 w-full z-50 animate-fadeIn">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#">
              <img src="path/to/your-logo.png" alt="Logo Instansi Desa" className="h-10" />
            </a>
          </div>
  
          {/* Navbar Links for Desktop */}
          <ul className="hidden md:flex space-x-6 px-10">
            <li>
              <a href="#" className="hover:text-[#f4c430] transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f4c430] transition-colors duration-300">
                Aparat Desa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f4c430] transition-colors duration-300">
                Berita Desa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f4c430] transition-colors duration-300">
                UMKM Desa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f4c430] transition-colors duration-300">
                Kegiatan Desa
              </a>
            </li>
          </ul>
  
          {/* Hamburger Button for Mobile View */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl text-[#f4c430]">
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 space-y-2 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="block py-2 px-4 bg-[#2c4a77] text-white rounded hover:bg-[#3b5a8c] transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 bg-[#2c4a77] text-white rounded hover:bg-[#3b5a8c] transition-colors duration-300">
                Aparat Desa
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 bg-[#2c4a77] text-white rounded hover:bg-[#3b5a8c] transition-colors duration-300">
                Berita Desa
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 bg-[#2c4a77] text-white rounded hover:bg-[#3b5a8c] transition-colors duration-300">
                Produk UMKM
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 bg-[#2c4a77] text-white rounded hover:bg-[#3b5a8c] transition-colors duration-300">
                Kegiatan Desa
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  