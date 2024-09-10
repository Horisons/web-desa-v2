// Header.js
import header from '../../assets/tent-1.jpg';
import log from '../../assets/tent-2.jpg';

export default function Header() {
  return (
    <div className="container h-screen pt-28 bg-gradient-to-r from-[#1e3a5f] via-[#2c4a77] to-[#3b5a8c]">
      <div className="outer-container flex">
        {/* Right Section */}
        <div className="container__right min-w-[900px] flex-2 bg-gradient-to-r from-[#2c4a77] via-[#3b5a8c] to-[#5a7ea5] p-8 flex ml-8 rounded-lg shadow-xl animate-openFromCenter">
          
          {/* Konten Card - delay pada konten untuk muncul setelah card terbuka */}
          <div className="content flex-1 text-left space-y-4 pr-8 opacity-0 animate-fadeInText">
            <h4 className="text-lg font-semibold text-[#f4c430] uppercase tracking-wide">
              Lampung
            </h4>
            <h2 className="text-4xl font-extrabold text-[#ffffff] leading-tight relative">
              Labuan Ratu 7
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#f4c430]"></span>
            </h2>
            <h3 className="text-xl font-medium text-[#e5e7eb] mb-2">
              Desa Labuan Ratu 7
            </h3>
            <p className="leading-relaxed text-[#e5e7eb] max-w-md text-justify">
              Labuhan Ratu VII adalah sebuah desa di Kecamatan Labuhan Ratu, Kabupaten Lampung Timur, Provinsi Lampung, Indonesia. Desa ini memiliki pemandangan alam yang indah dan budaya lokal yang kaya.
            </p>
          </div>

          <div className="images relative flex items-center justify-center h-[400px] opacity-0 animate-fadeInImages">
            <img
              src={header}
              alt="tent-1"
              className="tent-1 absolute top-1/2 transform -translate-y-1/2 translate-x-12 max-w-[350px] rounded-lg shadow-2xl border border-[#f4c430] transition-transform duration-300 hover:scale-105"
            />
            <img
              src={log}
              alt="tent-2"
              className="tent-2 absolute top-1/2 transform translate-y-1/2 translate-x-1/2 max-w-[180px] rounded-lg shadow-lg border border-[#f4c430] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
