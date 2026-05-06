function ModernUI() {
  const services = [
    {
      icon: '📸',
      title: 'Wedding Albums',
      desc: 'Premium cinematic wedding album designs and printing.',
    },
    {
      icon: '🖼️',
      title: 'Photo Printing',
      desc: 'Glossy, matte and large-size high quality prints.',
    },
    {
      icon: '✨',
      title: 'Frames & Lamination',
      desc: 'LED frames, wall frames and premium lamination.',
    },
    {
      icon: '🖨️',
      title: 'Flex Printing',
      desc: 'Birthday flex, banners and sticker printing.',
    },
  ];

  const works = [
    'Traditional Wedding Albums',
    'Premium Photo Frames',
    'Passport Photos',
    'Flex Printing',
    'Custom Stickers',
    'PVC Photo Frames',
    'Invitation Cards',
    'Photo Editing',
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-black via-zinc-900 to-red-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div>
              <h1 className="text-4xl md:text-6xl font-black">
                SRIRAM DIGITAL
              </h1>
              <p className="text-red-500 text-xl mt-2">
                COLOUR LAB
              </p>
            </div>

            <a
              href="https://wa.me/918330944999"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-bold"
            >
              WhatsApp Now
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                PRINT YOUR
                <span className="block text-red-500">MEMORIES</span>
              </h2>

              <p className="mt-8 text-xl text-zinc-300 leading-relaxed">
                High-quality wedding albums, photo printing, LED frames,
                flex printing and premium photo services.
              </p>

              <div className="flex gap-5 mt-10 flex-wrap">
                <a
                  href="#services"
                  className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-bold"
                >
                  Explore Services
                </a>

                <a
                  href="#works"
                  className="border border-white/20 px-8 py-4 rounded-2xl font-bold"
                >
                  View Works
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-8 h-72 flex flex-col justify-between">
                <div className="text-6xl">📸</div>
                <h3 className="text-3xl font-black">Wedding Albums</h3>
              </div>

              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 h-72 mt-10 flex flex-col justify-between">
                <div className="text-6xl">🖼️</div>
                <h3 className="text-3xl font-black">Photo Frames</h3>
              </div>

              <div className="bg-gradient-to-br from-emerald-500 to-green-700 rounded-3xl p-8 h-72 -mt-8 flex flex-col justify-between">
                <div className="text-6xl">🖨️</div>
                <h3 className="text-3xl font-black">Flex Printing</h3>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 h-72 flex flex-col justify-between">
                <div className="text-6xl">✨</div>
                <h3 className="text-3xl font-black">Photo Printing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-red-500 uppercase tracking-[0.3em] font-bold">
              Our Services
            </p>
            <h2 className="text-5xl font-black mt-4">
              Professional Printing Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-red-500 transition duration-500"
              >
                <div className="text-6xl">{service.icon}</div>
                <h3 className="mt-6 text-2xl font-black">
                  {service.title}
                </h3>
                <p className="mt-4 text-zinc-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-red-500 uppercase tracking-[0.3em] font-bold">
              Available Works
            </p>
            <h2 className="text-5xl font-black mt-4">
              Everything We Create
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {works.map((work, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-8"
              >
                <div className="text-5xl">✔️</div>
                <h3 className="mt-6 text-2xl font-bold">
                  {work}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-28 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-[3rem] p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-14">
              <div>
                <p className="uppercase tracking-[0.3em] text-red-100 font-bold">
                  Contact Us
                </p>

                <h2 className="mt-5 text-5xl font-black leading-tight">
                  Let's Create Something Beautiful
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-red-100">Phone</p>
                  <h3 className="text-2xl font-bold mt-2">
                    +91-8330944999
                  </h3>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-red-100">Location</p>
                  <h3 className="text-xl font-bold mt-2">
                    SRIRAM COLOR LAB, Kotak Bank Opp.
					Narsipatnam Main Road
                  </h3>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-red-100">Email</p>
                  <h3 className="text-xl font-bold mt-2 break-all">
                    sriramphotolab@gmail.com
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/918330944999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
      >
        💬
      </a>
    </div>
  )
}

function ClassicUI() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-10 text-center shadow-xl">
        <h1 className="text-5xl font-extrabold">
          Sriram Digital Colour Lab
        </h1>
        <p className="mt-4 text-xl">
          Above More Main Road, Narsipatnam
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/918330944999"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-bold"
          >
            WhatsApp
          </a>

          <a
            href="#services"
            className="bg-white text-red-500 px-6 py-3 rounded-2xl font-bold"
          >
            View Services
          </a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Our Services</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Professional printing and photo services.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            'Wedding Albums',
            'Photo Printing',
            'Frames & Lamination',
            'Flex Printing',
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition"
            >
              <div className="text-6xl mb-5">🖼️</div>
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Available Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Wedding Albums',
              'LED Frames',
              'Photo Prints',
              'Birthday Flex',
              'Custom Stickers',
              'Invitation Cards',
            ].map((work, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-3xl p-10 text-center shadow-2xl"
              >
                <div className="text-6xl mb-5">✨</div>
                <h3 className="text-3xl font-bold">{work}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-8">
        <p>© 2026 Sriram Digital Colour Lab</p>
      </footer>
    </div>
  )
}

export default function App() {
  const useOldUI = false

  return useOldUI ? <ClassicUI /> : <ModernUI />
}
