export default function Stastistic() {
    return (
        <section className="flex flex-col items-center p-24 space-y-8">
            <div className="flex gap-8 items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-4xl font-semibold text-primary-color mb-2">80+</h4>
                    <p className="text-xl text-dark">Berita dan Informasi</p>
                </div>
                <div className="border-l border-gray-300 h-24"></div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-4xl font-semibold text-primary-color mb-2">200+</h4>
                    <p className="text-xl text-dark">UMKM Desa</p>
                </div>
                <div className="border-l border-gray-300 h-24"></div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-4xl font-semibold text-primary-color mb-2">99+</h4>
                    <p className="text-xl text-dark">Kegiatan dan Acara</p>
                </div>
            </div>
        </section>
    )
}