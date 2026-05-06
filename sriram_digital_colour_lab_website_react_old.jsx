export default function SriramDigitalColourLabWebsite() {
  const services = [
    'Photo Printing',
    'Album Designing',
    'Wedding Albums',
    'Frames & Lamination',
    'Flex Printing',
    'Sticker Printing',
    'LED Frames',
    'Sublimation Printing',
  ];

  const gallery = [
    'Wedding Album',
    'Photo Frame',
    'Flex Banner',
    'LED Frame',
    'PVC Sheet',
    'Sticker Print',
    'Photo Print',
    'Custom Design',
  ];

  const works = [
    {
      title: 'Wedding Albums',
      items: [
        'Traditional Albums',
        'Premium Albums',
        'Mini Albums',
        'Matte Finish Albums',
      ],
    },
    {
      title: 'Photo Printing',
      items: [
        'Glossy Prints',
        'Matte Prints',
        'Passport Photos',
        'Large Size Prints',
      ],
    },
    {
      title: 'Frames & Lamination',
      items: [
        'LED Frames',
        'Wall Frames',
        'PVC Frames',
        'Glass Lamination',
      ],
    },
    {
      title: 'Flex & Banner Printing',
      items: [
        'Shop Banners',
        'Birthday Flex',
        'Wedding Flex',
        'Political Flex',
      ],
    },
    {
      title: 'Sticker Printing',
      items: [
        'Custom Stickers',
        'Transparent Stickers',
        'Labels',
        'Logo Stickers',
      ],
    },
    {
      title: 'Design Services',
      items: [
        'Invitation Cards',
        'Photo Editing',
        'Album Designing',
        'Custom Graphics',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Sriram Digital Colour Lab
            </h1>
            <p className="text-sm md:text-base mt-1">
              Above More Main Road, Narsipatnam
            </p>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0 flex-wrap">
            <a
              href="#services"
              className="bg-white text-red-500 px-5 py-2 rounded-xl font-semibold shadow-lg"
            >
              Services
            </a>

            <a
              href="https://wa.me/918330944999"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 transition px-5 py-2 rounded-xl font-semibold text-white shadow-lg"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              Professional Printing Services
            </div>

            <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
              High Quality Photo Printing & Album Designing
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Wedding albums, frames, photo prints, flex banners, stickers,
              sublimation printing and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#works"
                className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded-2xl font-semibold shadow-lg"
              >
                Explore Our Works
              </a>

              <a
                href="https://wa.me/918330944999"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 transition px-6 py-3 rounded-2xl font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl p-8 text-white h-48 flex items-center justify-center text-2xl font-bold shadow-2xl">
              Wedding Albums
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white h-48 flex items-center justify-center text-2xl font-bold shadow-2xl">
              Photo Frames
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white h-48 flex items-center justify-center text-2xl font-bold shadow-2xl">
              Flex Printing
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl p-8 text-white h-48 flex items-center justify-center text-2xl font-bold shadow-2xl">
              Sticker Prints
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-600 mt-3">
            Complete digital printing solutions for all your needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300 text-center"
            >
              <div className="text-5xl mb-4">🖼️</div>
              <h3 className="font-bold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Work Showcase */}
      <section
        id="works"
        className="bg-gradient-to-r from-indigo-600 to-purple-700 py-20 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold">All Available Works</h2>
            <p className="mt-4 text-xl text-white/80">
              Explore all services and products available at Sriram Digital Colour Lab.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {works.map((category, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300"
              >
                <h3 className="text-3xl font-bold mb-6 text-yellow-300">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/10 rounded-xl px-4 py-3 text-lg"
                    >
                      ✔ {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Gallery</h2>
          <p className="text-gray-600 mt-3">
            Some of our premium quality work samples.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-700 to-black text-white rounded-3xl h-56 shadow-2xl flex items-center justify-center text-center text-xl font-bold p-4 hover:scale-105 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="mt-4 text-gray-400">
              Reach us for all printing and design requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-3xl p-8 text-center backdrop-blur-lg">
              <div className="text-5xl">📍</div>
              <h3 className="mt-5 text-2xl font-bold">Location</h3>
              <p className="mt-3 text-gray-300">
                Above More Main Road, Narsipatnam
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 text-center backdrop-blur-lg">
              <div className="text-5xl">📞</div>
              <h3 className="mt-5 text-2xl font-bold">Call Us</h3>
              <p className="mt-3 text-gray-300">8330944999</p>
              <p className="text-gray-300">8330944488</p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 text-center backdrop-blur-lg">
              <div className="text-5xl">✉️</div>
              <h3 className="mt-5 text-2xl font-bold">Email</h3>
              <p className="mt-3 text-gray-300 break-all">
                sriramphotolab@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-bold shadow-lg"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918330944999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl text-3xl z-50"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        © 2026 Sriram Digital Colour Lab. All rights reserved.
      </footer>
    </div>
  );
}
