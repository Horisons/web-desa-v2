import header from '../../assets/tent-1.jpg'
import log from '../../assets/tent-2.jpg'


export default function VillageActivities() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Kegiatan Desa Kami</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ikuti berbagai kegiatan seru dan bermanfaat yang diselenggarakan di desa kami. Bergabunglah dan menjadi bagian dari komunitas kami!
          </p>
        </div>

        {/* Grid Layout untuk Kegiatan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-tl-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
            <img className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" src={header} alt="Kegiatan 1" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">Gotong Royong Bersih Desa</h3>
              <p className="mt-1 text-sm">Bersama-sama membersihkan lingkungan desa untuk menjaga kebersihan dan kenyamanan.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
            <img className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" src={header} alt="Kegiatan 2" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">Pelatihan Keterampilan</h3>
              <p className="mt-1 text-sm">Mengembangkan keterampilan warga melalui pelatihan dan workshop.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-tr-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
            <img className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" src={header} alt="Kegiatan 3" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">Pasar Malam Desa</h3>
              <p className="mt-1 text-sm">Nikmati suasana pasar malam dengan berbagai kuliner dan hiburan.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group overflow-hidden rounded-bl-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
            <img className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" src={header} alt="Kegiatan 4" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">Senam Pagi Bersama</h3>
              <p className="mt-1 text-sm">Aktivitas olahraga bersama untuk kesehatan dan kebersamaan warga.</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
            <img className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" src={header} alt="Kegiatan 5" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">Festival Budaya Desa</h3>
              <p className="mt-1 text-sm">Merayakan budaya lokal dengan pertunjukan seni dan makanan tradisional.</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative group overflow-hidden rounded-br-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
            <img className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" src={header} alt="Kegiatan 6" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold">Pertandingan Olahraga Desa</h3>
              <p className="mt-1 text-sm">Kompetisi olahraga untuk memupuk semangat sportivitas antarwarga.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

