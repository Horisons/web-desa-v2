import header from '../../assets/tent-1.jpg'
import log from '../../assets/tent-2.jpg'

const newsItems = [
  {
    id: 1,
    title: "Judul Berita 1",
    date: "1 September 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt, eros vel fringilla bibendum, nulla sapien fermentum odio.",
    imgSrc: log
  },
  {
    id: 2,
    title: "Judul Berita 2",
    date: "2 September 2024",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgSrc: log
  },
  {
    id: 3,
    title: "Judul Berita 3",
    date: "3 September 2024",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    imgSrc: log
  },
  {
    id: 4,
    title: "Judul Berita 4",
    date: "4 September 2024",
    description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a erat suscipit vehicula. Phasellus vel risus nec elit vulputate volutpat ut eget urna.",
    imgSrc: log
  },
  {
    id: 5,
    title: "Judul Berita 5",
    date: "5 September 2024",
    description: "Mauris sit amet massa at risus vehicula scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    imgSrc: log
  },
  {
    id: 6,
    title: "Judul Berita 6",
    date: "6 September 2024",
    description: "Suspendisse potenti. Integer ut nulla euismod, vehicula ipsum eu, faucibus erat. Sed auctor tincidunt lorem id luctus.",
    imgSrc: log
  }
];

export default function News () {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Berita Desa Terbaru</h2>
          <p className="text-lg text-gray-600">Ikuti perkembangan terbaru dan berita penting dari desa kami.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={item.imgSrc} alt={`Berita Desa ${item.id}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">Tanggal: {item.date}</p>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <a href="#" className="text-primary-color hover:underline">Baca Selengkapnya</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

