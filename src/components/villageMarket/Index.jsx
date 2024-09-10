import log from '../../assets/tent-2.jpg'

export default function VillageMarket() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">UMKM Desa Kami</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Temukan berbagai usaha mikro, kecil, dan menengah di desa kami. Dukung mereka dengan membeli produk lokal yang unik dan berkualitas!
          </p>
        </div>

        {/* Grid Layout dengan Kartu Variatif */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-64">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={log} alt="UMKM 1" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">UMKM 1</h3>
              <p className="mt-1 text-sm">Produk makanan ringan khas desa yang lezat dan sehat.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-64">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={log} alt="UMKM 2" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">UMKM 2</h3>
              <p className="mt-1 text-sm">Kerajinan tangan unik dengan sentuhan lokal yang autentik.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-64">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={log} alt="UMKM 3" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">UMKM 3</h3>
              <p className="mt-1 text-sm">Produk fashion tradisional yang nyaman dan stylish.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-64">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={log} alt="UMKM 4" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">UMKM 4</h3>
              <p className="mt-1 text-sm">Aneka produk lokal berkualitas dari desa kami.</p>
            </div>
          </div>
        </div>

        {/* Grid Layout untuk 3 Card di Bawah */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Card 5 */}
          <div className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-64">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={log} alt="UMKM 5" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">UMKM 5</h3>
              <p className="mt-1 text-sm">Produk lokal yang inovatif dan menarik dari desa kami.</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-64">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={log} alt="UMKM 6" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">UMKM 6</h3>
              <p className="mt-1 text-sm">Produk kerajinan tangan yang mempesona dan berkualitas.</p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-64">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={log} alt="UMKM 7" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">UMKM 7</h3>
              <p className="mt-1 text-sm">Aneka produk lokal dengan desain yang menarik dan berkualitas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
