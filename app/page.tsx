'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, BellRing, Utensils, ChefHat, Info, Menu, X, Coffee, CakeSlice,Star, MessageSquareQuote, CreditCard, Landmark } from 'lucide-react';
import Image from 'next/image';
// ==========================================
// 1. CONFIGURACIÓN DEL RESTAURANTE
// ==========================================
const siteConfig = {
  name: "La Puerta Negra",
  slogan: "Sabor, Tradición y Elegancia",
  mapsLink: "https://maps.app.goo.gl/YDB3McdGdmAyKaiX6",
  schedule: "Lunes a Viernes de 1:00 PM a 5:00 PM",
  mapsrese:"https://search.google.com/local/writereview?placeid=ChIJ0bTaC2H50YURAGoiZ6Ld5V4",

  // Avisos (Lógica de 1 a 3 tarjetas)
  notices: [
    {
      title: "Guisado del Día",
      desc: "¡Pregunta a nuestros meseros por la especialidad del chef de hoy!",
      icon: <ChefHat size={24} />
    },
    {
      title: "Promoción Ejecutiva",
      desc: "En la compra de 5 menús, el envío corre por nuestra cuenta.",
      icon: <BellRing size={24} />
    }
  ],

  // Menú Ejecutivo (Comida Corrida)
  menuEjecutivo: {
    tiempo1: { title: "1. Para Empezar", items: ["Sopa del día", "Consomé caliente"] },
    tiempo2: { title: "2. Segundo Tiempo", items: ["Arroz de la casa", "Espagueti", "Ensalada verde fresca"] },
    tiempo3: {
      title: "3. Plato Fuerte (A Elegir)",
      items: [
        "Guisado del día", "Pechuga empanizada o a la plancha", "Milanesa de res",
        "Tacos dorados de pollo", "Costilla asada de res", "Mole poblano con pollo",
        "Filete de pescado empanizado o a la plancha", "Cecina adobada",
        "Ensalada verde con pollo o atún", "Hígado encebollado"
      ]
    },
    tiempo4: { title: "4. Guarniciones", items: ["Ensalada", "Nopales", "Verduras al vapor", "Frijoles"] }
  },

  // Nueva sección A la Carta
  menuALaCarta: {
    entradas: [
      { name: "Guacamole Tradicional", desc: "Acompañado con totopos recién hechos.", price: "$85" },
      { name: "Queso Fundido", desc: "Con champiñones o chorizo.", price: "$110" },
      { name: "Ensalada Fresca", desc: "Mix de lechugas, jitomate, pepino y aderezo de la casa.", price: "$75" }
    ],
    postres: [
      { name: "Flan Napolitano", desc: "Receta especial de la casa con caramelo.", price: "$45" },
      { name: "Pastel de Elote", desc: "Esponjoso y servido caliente.", price: "$55" },
      { name: "Fresas con Crema", desc: "Fresas frescas con nuestra crema dulce secreta.", price: "$60" }
    ],
    bebidas: [
      { name: "Jarra de Agua Fresca", desc: "Sabor del día (Horchata, Jamaica, Tamarindo).", price: "$70" },
      { name: "Café de Olla", desc: "Tradicional con canela y piloncillo.", price: "$35" },
      { name: "Refrescos de lata", desc: "Coca-Cola, Sidral, Sprite.", price: "$30" }
    ]
  }
};

// ==========================================
// 2. COMPONENTES DE LA PÁGINA
// ==========================================

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-serif font-bold tracking-widest text-[#E4007C]">
         LA PUERTA NEGRA
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider uppercase text-slate-700">
          <a href="#avisos" className="hover:text-amber-600 transition-colors">Avisos</a>
          <a href="#menu" className="hover:text-amber-600 transition-colors">Menú y Carta</a>
          <a href="#ubicacion" className="hover:text-amber-600 transition-colors">Ubicación</a>
          <a
            href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer"
            className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-all shadow-md"
          >
            Cómo Llegar
          </a>
        </nav>

        <button className="md:hidden text-emerald-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col py-4 px-6 shadow-xl">
          <a href="#avisos" onClick={() => setIsOpen(false)} className="py-3 text-slate-700 font-bold border-b border-gray-100 uppercase tracking-wider text-sm">Avisos y Promos</a>
          <a href="#menu" onClick={() => setIsOpen(false)} className="py-3 text-slate-700 font-bold border-b border-gray-100 uppercase tracking-wider text-sm">Menú y Carta</a>
          <a href="#ubicacion" onClick={() => setIsOpen(false)} className="py-3 text-slate-700 font-bold uppercase tracking-wider text-sm">Ubicación</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-stone-50">
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600 blur-[120px] rounded-full pointer-events-none" />
    </div>

    <div className="container mx-auto px-6 relative z-20 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        
        <div className="w-full flex justify-center ">
  <Image
    src="/puerta-negra-sinfondo.webp" /* Asegúrate de usar el mismo nombre de archivo que pusiste en el Navbar */
    alt="Logotipo La Puerta Negra"
    width={200}
    height={200}
    className="w-72 md:w-96 lg:w-50rem h-auto object-contain drop-shadow-xl"
    priority
  />
</div>
        <p className="text-slate-600 text-lg md:text-2xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          El equilibrio perfecto entre la <span className="text-terracotta-600 font-bold text-amber-700">comida casera tradicional</span> y un ambiente exclusivo para ti y tu familia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#menu" className="w-full sm:w-auto px-8 py-4 bg-[#E4007C] text-white rounded-full font-bold uppercase tracking-wider hover:bg-[#E4007C] transition-colors shadow-xl flex items-center justify-center gap-2">
            <Utensils size={18} /> Ver Carta y Menú
          </a>
          <div className="flex items-center gap-2 text-[#0400A3] text-sm font-bold px-6 py-4 bg-[#00CDE3] rounded-full shadow-md w-full sm:w-auto justify-center border border-gray-100">
            <Clock size={18} className="text-[#0400A3]" />
            {siteConfig.schedule}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const NoticesSection = () => {
  const noticesCount = siteConfig.notices.length;
  const gridClass = noticesCount === 1
    ? "md:grid-cols-1"
    : noticesCount === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3";

  return (
    <section id="avisos" className="py-20 bg-white relative z-10 -mt-10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-emerald-950 mb-4">Para Empezar el Día</h2>
          <div className="w-16 h-1.5 bg-[#E3C700] mx-auto rounded-full" />
        </motion.div>

        <div className={`grid grid-cols-1 ${gridClass} gap-6 max-w-6xl mx-auto`}>
          {siteConfig.notices.map((notice, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-md hover:shadow-xl hover:border-amber-300 transition-all group relative overflow-hidden ${noticesCount === 1 ? 'flex flex-col items-center text-center max-w-3xl mx-auto' : ''
                }`}
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                {notice.icon}
              </div>
              <h3 className="text-xl font-serif text-emerald-900 mb-3 font-bold">{notice.title}</h3>
              <p className={`text-slate-600 font-medium text-sm leading-relaxed ${noticesCount === 1 ? 'max-w-xl' : ''}`}>
                {notice.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => (
  <section id="menu" className="py-24 bg-stone-100 relative">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#E4007C] mb-4">Nuestra Carta</h2>
        <p className="text-slate-600 font-medium">Disfruta de nuestro menú 4 tiempos o elige tus favoritos a la carta.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">

        {/* COLUMNA IZQUIERDA: MENÚ EJECUTIVO (COMIDA CORRIDA) */}
        <div className="lg:w-1/2 space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-t-[#00CDE3]">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <Utensils className="text-amber-500" size={28} />
              <h3 className="text-2xl font-serif font-bold text-emerald-950">Menú 4 tiempos</h3>
            </div>

            <div className="space-y-8">
              {/* Tiempos 1 y 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-amber-700 mb-3">{siteConfig.menuEjecutivo.tiempo1.title}</h4>
                  <ul className="space-y-2">
                    {siteConfig.menuEjecutivo.tiempo1.items.map((item, i) => (
                      <li key={i} className="text-slate-700 text-sm font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-700 mb-3">{siteConfig.menuEjecutivo.tiempo2.title}</h4>
                  <ul className="space-y-2">
                    {siteConfig.menuEjecutivo.tiempo2.items.map((item, i) => (
                      <li key={i} className="text-slate-700 text-sm font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Plato Fuerte */}
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h4 className="font-bold text-emerald-900 mb-4 text-lg border-b border-stone-200 pb-2">
                  {siteConfig.menuEjecutivo.tiempo3.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {siteConfig.menuEjecutivo.tiempo3.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✦</span>
                      <span className="text-slate-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarniciones */}
              <div>
                <h4 className="font-bold text-amber-700 mb-3">{siteConfig.menuEjecutivo.tiempo4.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.menuEjecutivo.tiempo4.items.map((item, i) => (
                    <span key={i} className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: A LA CARTA */}
        <div className="lg:w-1/2 space-y-8">

          {/* Entradas */}
          <div className="bg-[#08E300] p-8 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-6 flex items-center gap-3">
              <span className="bg-amber-100 text-amber-700 p-2 rounded-lg"><Utensils size={20} /></span> Entradas
            </h3>
            <div className="space-y-4">
              {siteConfig.menuALaCarta.entradas.map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <div>
                    <h4 className="font-bold text-slate-800">{item.name}</h4>
                    <p className="text-white text-sm">{item.desc}</p>
                  </div>
                  <span className="font-bold text-white">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Postres */}
          <div className="bg-[#E4007C] p-8 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-rose-100 text-rose-700 p-2 rounded-lg"><CakeSlice size={20} /></span> Postres
            </h3>
            <div className="space-y-4">
              {siteConfig.menuALaCarta.postres.map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <p className="text-white text-sm">{item.desc}</p>
                  </div>
                  <span className="font-bold text-white">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bebidas */}
          <div className="bg-[#00CDE3] p-8 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-6 flex items-center gap-3">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-lg"><Coffee size={20} /></span> Bebidas
            </h3>
            <div className="space-y-4">
              {siteConfig.menuALaCarta.bebidas.map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <div>
                    <h4 className="font-bold text-slate-800">{item.name}</h4>
                    <p className="text-black text-sm">{item.desc}</p>
                  </div>
                  <span className="font-bold text-white">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);
const ExtraMealsSection = () => (
  <section id="comida-adicional" className="py-24 bg-linear-to-b from-stone-100 to-[#325F63] relative">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-[#E4007C] mb-4">Platillos Adicionales</h2>
        <div className="w-16 h-1.5 bg-amber-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-600 font-medium">Disfruta de nuestros platillos preparados al momento.</p>
      </div>

      <div className="bg-stone-50 p-8 md:p-12 rounded-3xl shadow-lg border border-stone-200">
        <ul className="space-y-6">
          {/* Item 1 */}
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-200 pb-6 last:border-0 last:pb-0">
            <div>
              <h4 className="font-bold text-emerald-900 text-lg">Pechuga Empanizada</h4>
              <p className="text-slate-500 text-sm mt-1">Acompañada de ensalada fresca y guarnición a elegir.</p>
            </div>
            <span className="font-bold text-amber-600 text-lg mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">$120.00</span>
          </li>
          
          {/* Item 2 */}
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-200 pb-6 last:border-0 last:pb-0">
            <div>
              <h4 className="font-bold text-emerald-900 text-lg">Milanesa de Res</h4>
              <p className="text-slate-500 text-sm mt-1">Dorada a la perfección, servida con frijoles y arroz.</p>
            </div>
            <span className="font-bold text-amber-600 text-lg mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">$130.00</span>
          </li>

          {/* Item 3 */}
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-200 pb-6 last:border-0 last:pb-0">
            <div>
              <h4 className="font-bold text-emerald-900 text-lg">Tacos Dorados de Pollo</h4>
              <p className="text-slate-500 text-sm mt-1">Orden de 4, bañados en crema, queso y lechuga fresca.</p>
            </div>
            <span className="font-bold text-amber-600 text-lg mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">$95.00</span>
          </li>

          {/* Item 4 */}
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-200 pb-6 last:border-0 last:pb-0">
            <div>
              <h4 className="font-bold text-emerald-900 text-lg">Costilla Asada de Res</h4>
              <p className="text-slate-500 text-sm mt-1">Corte jugoso acompañado de nopales asados y cebollitas.</p>
            </div>
            <span className="font-bold text-amber-600 text-lg mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">$145.00</span>
          </li>

          {/* Item 5 */}
          <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-200 pb-6 last:border-0 last:pb-0">
            <div>
              <h4 className="font-bold text-emerald-900 text-lg">Mole Poblano con Pollo</h4>
              <p className="text-slate-500 text-sm mt-1">Receta tradicional con un toque dulce, servido con arroz.</p>
            </div>
            <span className="font-bold text-amber-600 text-lg mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">$115.00</span>
          </li>
          
          {/* Puedes copiar y pegar el bloque <li>...</li> para agregar más platillos */}
        </ul>
      </div>
    </div>
  </section>
);

const ReviewsSection = () => {
  // Reseñas de ejemplo (puedes modificarlas o moverlas a siteConfig)
  const reviews = [
    {
      name: "Frida Cañedo",
      text: "Hace mas de 30 años, mis papás me traían a comer acá. Lo redescubrí hace poco y se ha convertido en mi lugar favorito para comer! Un sabor casero que me hace sentir como en casa. El hijo de los fundadores es el chef, y las hijas están también trabajando aquí. Es una verdadera tradición familiar.",
      rating: 5
    },
    {
      name: "Jhonn Eliot",
      text: "Los mejores chiles en nogada! La atención por parte del personal es muy agradable, tienen un sazón muy hogareño. También probé la picaña y estuvo riquísima, muy bien sazonada. Hicieron agua de guayaba con avena, muy buena y nada dulce. Definitivamente será uno mis lugares favoritos.",
      rating: 5
    },
    {
      name: "Jacqueline Argueta",
      text: "Servicio rápido, muy rico, limpio , tienen sanitario y para lavarte las manos, y en cantidades y precios me pareció excelente a diferencia de las cocinas de la zona",
      rating: 5
    }
  ];

  return (
    <section id="resenas" className="py-24 bg-stone-100 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-emerald-950 mb-4">Lo que dicen nuestros clientes</h2>
          <div className="w-16 h-1.5 bg-amber-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Cuadrícula de Reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative mt-4">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-emerald-900 text-amber-400 rounded-full flex items-center justify-center shadow-md">
                <MessageSquareQuote size={20} />
              </div>
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={index} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <h4 className="font-bold text-emerald-950 border-t border-gray-50 pt-4">{review.name}</h4>
            </div>
          ))}
        </div>

        {/* Botón para dejar reseña */}
        <div className="text-center">
          <a 
            href={siteConfig.mapsrese} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#E4007C] text-[#E4007C] font-bold uppercase tracking-wider rounded-full hover:bg-[#E4007C] hover:text-white transition-colors shadow-md"
          >
            <Star size={18} /> Dejar una reseña en Google
          </a>
        </div>
      </div>
    </section>
  );
};

const TransferInfoSection = () => (
  <section id="pagos" className="py-20 bg-[#325F63] relative overflow-hidden">
    {/* Decoración de fondo */}
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-600 blur-[100px] rounded-full pointer-events-none" />
    </div>

    <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Métodos de Pago</h2>
      <p className="text-emerald-200/80 mb-10 font-medium">Aceptamos efectivo, tarjetas y transferencias bancarias para tu comodidad.</p>

      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 text-left border-b-8 border-amber-500">
        <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center shrink-0 border border-stone-100 shadow-inner">
          <Landmark size={32} className="text-emerald-800" />
        </div>
        
        <div className="flex-1 w-full space-y-4">
          <h3 className="text-xl font-bold text-emerald-950 border-b border-gray-100 pb-3">Datos para Transferencia</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Banco</p>
              <p className="font-bold text-slate-800 flex items-center gap-2">
                <CreditCard size={16} className="text-amber-500" /> BBVA Bancomer
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Titular</p>
              <p className="font-bold text-slate-800">Restaurante La Puerta Negra</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Cuenta</p>
              <p className="font-medium text-slate-700">0123456789</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">CLABE Interbancaria</p>
              <p className="font-medium text-slate-700">012 345 67890 123456 7</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 italic bg-stone-50 p-3 rounded-lg border border-stone-200">
            * Por favor, envía tu comprobante de pago a nuestro personal o vía WhatsApp para confirmar tu orden.
          </p>
        </div>
      </div>
    </div>
  </section>
);
const LocationSection = () => (
  <section id="ubicacion" className="py-24 bg-linear-to-b from-[#325F63] to-[#E4007C] relative">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#00CDE3] mb-6">Visítanos</h2>
          <p className="text-white mb-8 font-medium leading-relaxed">
            Ven a disfrutar de un ambiente tranquilo, ideal para comidas de negocios o reuniones familiares, siempre con el mejor sabor casero.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                <MapPin className="text-amber-500" size={24} />
              </div>
              <div>
                <h4 className="text-emerald-950 font-bold uppercase text-sm mb-1">Ubicación</h4>
                <p className="text-slate-600 text-sm font-medium">Salvatierra 79, San Bartolo Atepehuacan, Gustavo A. Madero, 07730 Ciudad de México, CDMX</p>
                <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="text-amber-600 font-bold text-sm hover:underline mt-2 inline-block">
                  Abrir en Google Maps &rarr;
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-100">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                <Clock className="text-amber-500" size={24} />
              </div>
              <div>
                <h4 className="text-emerald-950 font-bold uppercase text-sm mb-1">Horario de Servicio</h4>
                <p className="text-slate-600 font-medium text-sm">{siteConfig.schedule}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa / Imagen */}
        <div className="h-80 md:h-[450px] w-full bg-stone-200 relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 bg-emerald-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <MapPin size={48} className="text-white mb-4" />
            <h3 className="text-white font-serif text-3xl mb-2">La Puerta Negra</h3>
            <a
              href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-amber-500 text-white font-bold text-sm uppercase rounded-full hover:bg-amber-400 transition-colors shadow-lg"
            >
              Ver Indicaciones
            </a>
          </div>
          {/* Fondo por defecto */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#E4007C] py-12 text-center text-emerald-50">
    <div className="container mx-auto px-6">
      <h3 className="text-7xl font-serif tracking-widest uppercase mb-2">La Puerta Negra</h3>
      <p className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-8">{siteConfig.slogan}</p>
      <div className="flex justify-center gap-6 mb-8 border-b border-emerald-800 pb-8 max-w-md mx-auto">
        <a href="#avisos" className="text-emerald-200 hover:text-white font-medium text-sm transition-colors">Avisos</a>
        <a href="#menu" className="text-emerald-200 hover:text-white font-medium text-sm transition-colors">Carta</a>
        <a href="#ubicacion" className="text-emerald-200 hover:text-white font-medium text-sm transition-colors">Ubicación</a>
      </div>
      <p className="text-white text-xs font-medium tracking-wider">
        ©2026 Restaurante La Puerta Negra. Todos los derechos reservados.<br />
        <span className="mt-2 block">Desarrollado por FYTRcode</span>
      </p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="bg-stone-50 min-h-screen font-sans selection:bg-amber-200 selection:text-emerald-950 scroll-smooth">
      <Navbar />
      <Hero />
      <NoticesSection />
      <MenuSection />
      <ExtraMealsSection />
      <ReviewsSection />
      <TransferInfoSection />
      <LocationSection />
      <Footer />
    </main>
  );
}