'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const mapsLink = 'https://maps.app.goo.gl/YDB3McdGdmAyKaiX6';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 shadow-md py-3">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-serif font-bold tracking-widest text-[#E4007C]">
          LA PUERTA NEGRA
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider uppercase text-slate-700">
          <a href="#avisos" className="hover:text-amber-600 transition-colors">Avisos</a>
          <a href="#menu" className="hover:text-amber-600 transition-colors">Menú y Carta</a>
          <a href="#ubicacion" className="hover:text-amber-600 transition-colors">Ubicación</a>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-all shadow-md">
            Cómo Llegar
          </a>
        </nav>
        <button aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isOpen} className="md:hidden text-emerald-900" onClick={() => setIsOpen(!isOpen)}>
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
}
