/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ChevronRight,
  Utensils,
  Beer,
  Flame,
  Star
} from "lucide-react";

const WHATSAPP_NUMBER = "5566999294748";
const INSTAGRAM_URL = "https://www.instagram.com/brutohamburgueria/";

const MENU = {
  hamburgueres: [
    { name: "Bruto", price: 30.00 },
    { name: "Bacon Chili", price: 31.90 },
    { name: "Original Memo", price: 25.00 },
    { name: "Laçado", price: 29.00 },
    { name: "American Blend", price: 31.90 },
    { name: "Brutão", price: 38.00 },
    { name: "Trajado", price: 30.00 },
    { name: "Frango Bruto", price: 30.00 },
    { name: "Bruto Memo", price: 29.00 },
  ],
  combos: [
    { name: "Combo Bruto", price: 46.00 },
    { name: "Combo Bacon Chili", price: 47.90 },
    { name: "Combo Original Memo", price: 41.00 },
    { name: "Combo Laçado", price: 45.00 },
    { name: "Combo American Blend", price: 47.90 },
    { name: "Combo Brutão", price: 54.00 },
    { name: "Combo Trajado", price: 46.00 },
    { name: "Combo Bruto Memo", price: 45.00 },
  ],
  acompanhamentos: [
    { name: "Batata Sure Crispy", price: 14.00 },
    { name: "Batata Rústica", price: 14.00 },
    { name: "Batata Smile", price: 14.00 },
    { name: "Batata com Cheddar e Bacon", price: 22.90 },
    { name: "Empanado de Queijo Gouda", price: 21.90 },
    { name: "Anéis de Cebola", price: 21.90 },
  ],
  bebidas: [
    { name: "Refrigerantes lata", price: 6.00 },
    { name: "H2O Limão", price: 10.00 },
    { name: "Sucos Prats", price: 10.00 },
    { name: "Suco Del Valle", price: 6.00 },
    { name: "Red Bull", price: 15.00 },
    { name: "Monster", price: 15.00 },
    { name: "Água com gás", price: 4.00 },
    { name: "Água sem gás", price: 3.00 },
    { name: "Coca-Cola 2L", price: 15.00 },
  ]
};

const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const getWhatsAppLink = (productName: string) => {
  const message = encodeURIComponent(`Olá, quero pedir ${productName}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const ProductCard = ({ name, price }: { name: string, price: number, key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between hover:border-bruto-red transition-colors group"
  >
    <div>
      <h3 className="font-display text-xl uppercase tracking-wide group-hover:text-bruto-orange transition-colors">{name}</h3>
      <p className="text-bruto-red font-bold text-lg mt-1">{formatPrice(price)}</p>
    </div>
    <a 
      href={getWhatsAppLink(name)}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 bg-white text-black font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-bruto-red hover:text-white transition-all active:scale-95"
    >
      <MessageCircle size={18} />
      Pedir no WhatsApp
    </a>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-bruto-red selection:text-white">
      {/* Header */}
      <header className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=2070&auto=format&fit=crop" 
            alt="Burger Background" 
            className="w-full h-full object-cover opacity-40 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bruto-black/80 to-bruto-black" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="font-display text-7xl md:text-9xl uppercase leading-none tracking-tighter text-shadow-strong">
            Bruto <span className="text-bruto-red">Hamburgueria</span>
          </h1>
          <p className="text-xl md:text-2xl mt-4 font-semibold text-bruto-orange flex items-center justify-center gap-2">
            <Utensils size={24} />
            Hamburgueria artesanal
          </p>
          
          <div className="mt-6 flex flex-col items-center gap-2 text-zinc-400">
            <div className="flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800">
              <Clock size={18} className="text-bruto-red" />
              <span>Seg, Qua, Qui, Sex, Sab, Dom – 18:00 às 22:30</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bruto-red text-white font-black text-lg py-4 px-8 rounded-2xl flex items-center gap-3 hover:bg-bruto-orange transition-all hover:scale-105 active:scale-95 shadow-xl shadow-bruto-red/20"
            >
              <MessageCircle size={24} />
              FAZER PEDIDO NO WHATSAPP
            </a>
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 text-white font-bold py-4 px-8 rounded-2xl flex items-center gap-3 hover:bg-zinc-700 transition-all"
            >
              <Instagram size={24} />
              Ver Instagram
            </a>
          </div>
        </motion.div>
      </header>

      {/* Feature Section */}
      <section className="py-12 bg-bruto-red/10 border-y border-bruto-red/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-4xl font-display uppercase italic tracking-wider text-bruto-orange"
          >
            "O hambúrguer mais bruto da cidade, feito artesanalmente pra quem tem fome de verdade!"
          </motion.h2>
        </div>
      </section>

      {/* Menu */}
      <main className="max-w-6xl mx-auto px-4 py-20 space-y-24">
        
        {/* Hamburgueres */}
        <section id="hamburgueres">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-zinc-800" />
            <h2 className="font-display text-4xl md:text-5xl uppercase text-bruto-red flex items-center gap-3">
              <Flame className="text-bruto-orange" />
              Hambúrgueres
            </h2>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU.hamburgueres.map((item, idx) => (
              <ProductCard key={idx} name={item.name} price={item.price} />
            ))}
          </div>
        </section>

        {/* Combos */}
        <section id="combos">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-zinc-800" />
            <h2 className="font-display text-4xl md:text-5xl uppercase text-bruto-red flex items-center gap-3">
              <Star className="text-bruto-orange" />
              Combos
            </h2>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU.combos.map((item, idx) => (
              <ProductCard key={idx} name={item.name} price={item.price} />
            ))}
          </div>
        </section>

        {/* Acompanhamentos */}
        <section id="acompanhamentos">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-zinc-800" />
            <h2 className="font-display text-4xl md:text-5xl uppercase text-bruto-red flex items-center gap-3">
              <Utensils className="text-bruto-orange" />
              Acompanhamentos
            </h2>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU.acompanhamentos.map((item, idx) => (
              <ProductCard key={idx} name={item.name} price={item.price} />
            ))}
          </div>
        </section>

        {/* Bebidas */}
        <section id="bebidas">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-zinc-800" />
            <h2 className="font-display text-4xl md:text-5xl uppercase text-bruto-red flex items-center gap-3">
              <Beer className="text-bruto-orange" />
              Bebidas
            </h2>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU.bebidas.map((item, idx) => (
              <ProductCard key={idx} name={item.name} price={item.price} />
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
          <h2 className="font-display text-4xl uppercase tracking-tighter">
            Bruto <span className="text-bruto-red">Hamburgueria</span>
          </h2>
          
          <div className="space-y-2 text-zinc-400">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="text-2xl font-bold text-white hover:text-bruto-red transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} className="text-bruto-red" />
              (66) 99929-4748
            </a>
            <p className="flex items-center justify-center gap-2">
              <Clock size={16} />
              Seg, Qua, Qui, Sex, Sab, Dom – 18:00 às 22:30
            </p>
          </div>

          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-bruto-red text-white font-black py-2 px-6 rounded-full text-sm uppercase tracking-widest"
          >
            Atenção: pedidos por tempo limitado!
          </motion.div>

          <div className="pt-8 border-t border-zinc-900 w-full text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Bruto Hamburgueria. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageCircle size={28} />
        <span className="font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          Pedir agora
        </span>
      </a>
    </div>
  );
}

