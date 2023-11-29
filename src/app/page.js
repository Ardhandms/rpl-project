import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Homepage from "@/components/layout/Homepage";
import SectionHeader from "@/components/layout/SectionHeader";


export default function Home() {
  return (
    <>
    <Hero />
    <Homepage />
    <section className="text-center my-16">
      <SectionHeader 
        subHeader={'Tentang'}
        mainHeader={'Kami'}
      />
      <div className="max-w-2xl mx-auto mt-4 text-gray-500">
      <p className="max-w-2xl mx-auto mt-4 text-gray-500">
        Sepatu anda kotor tapi malas nyuci? Mr, CleanSZ solusinya!!
      </p>
      <p>
      Mengubah sepatu kotor anda menjadi bintang bersinar! Lihatlah keajaiban luar biasa sebelum dan sesudah dari layanan pembersihan sepatu Mr. CleanSZ. Ucapkan selamat tinggal pada kotoran dan sambutlah sepatu berkilau yang mencuri perhatian!
      </p>
      </div>
    </section>

    <section className="text-center my-8">
      <SectionHeader 
        subHeader={'Jangan malu-malu'}
        mainHeader={'Hubungi Kami Sekarang'}
      />
      <a>
      <button
                    type="button"
                    className="relative w-full max-w-3xl px-10 py-4 text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-full mb-8 mt-4 ml-10"
                >
                    <img
                        src='/whatsapp.png'
                        alt="logo wa"
                        style={{
                            width: '70px',
                            height: 'auto',
                            position: 'absolute',
                            left: '15%',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    />
                    <span className="text-7xl font-bold block">WhatsApp</span>
                </button>
      </a>
    </section>
    </>
  )
}
