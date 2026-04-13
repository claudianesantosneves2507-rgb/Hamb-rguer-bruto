/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  Clock, 
  Utensils,
  Beer,
  Flame,
  Star,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  X,
  ExternalLink,
  MapPin,
  Phone
} from "lucide-react";

const WHATSAPP_NUMBER_1 = "5566999294748";
const WHATSAPP_NUMBER_2 = "5566996923803";
const INSTAGRAM_URL = "https://www.instagram.com/brutohamburgueria/";
const YOOGA_URL = "https://delivery.yooga.app/bruto-hamburgueria/tabs/home";
const GOOGLE_MAPS_REVIEW_URL = "https://www.google.com/maps/place//data=!4m3!3m2!1s0x9379a32258ccac4d:0xe2e170fc8fe331db!12e1?source=g.page.m.dd._&laa=lu-desktop-reviews-dialog-review-solicitation";

interface MenuItem {
  name: string;
  price: number;
  image: string;
}

const MENU: Record<string, MenuItem[]> = {
  hamburgueres: [
    { name: "Bruto", price: 30.00, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" },
    { name: "Bacon Chili", price: 31.90, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop" },
    { name: "Original Memo", price: 25.00, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop" },
    { name: "Laçado", price: 29.00, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop" },
    { name: "American Blend", price: 31.90, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop" },
    { name: "Brutão", price: 38.00, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop" },
    { name: "Trajado", price: 30.00, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" },
    { name: "Frango Bruto", price: 30.00, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop" },
    { name: "Bruto Memo", price: 29.00, image: "https://images.unsplash.com/photo-1547584385-8cdbb1f77e29?q=80&w=800&auto=format&fit=crop" },
  ],
  combos: [
    { name: "Combo Bruto", price: 46.00, image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?q=80&w=800&auto=format&fit=crop" },
    { name: "Combo Bacon Chili", price: 47.90, image: "https://images.unsplash.com/photo-1513185158878-8d8c196b7f81?q=80&w=800&auto=format&fit=crop" },
    { name: "Combo Original Memo", price: 41.00, image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=800&auto=format&fit=crop" },
    { name: "Combo Laçado", price: 45.00, image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop" },
    { name: "Combo American Blend", price: 47.90, image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=800&auto=format&fit=crop" },
    { name: "Combo Brutão", price: 54.00, image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop" },
    { name: "Combo Trajado", price: 46.00, image: "https://images.unsplash.com/photo-1550317144-b3bfc503d87c?q=80&w=800&auto=format&fit=crop" },
    { name: "Combo Bruto Memo", price: 45.00, image: "https://images.unsplash.com/photo-1536510233921-8e5043fce771?q=80&w=800&auto=format&fit=crop" },
  ],
  acompanhamentos: [
    { name: "Batata Sure Crispy", price: 14.00, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop" },
    { name: "Batata Rústica", price: 14.00, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop" },
    { name: "Batata Smile", price: 14.00, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800&auto=format&fit=crop" },
    { name: "Batata com Cheddar e Bacon", price: 22.90, image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop" },
    { name: "Empanado de Queijo Gouda", price: 21.90, image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop" },
    { name: "Anéis de Cebola", price: 21.90, image: "https://images.unsplash.com/photo-1639024471283-03518883511d?q=80&w=800&auto=format&fit=crop" },
  ],
  bebidas: [
    { name: "Refrigerantes lata", price: 6.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop" },
    { name: "H2O Limão", price: 10.00, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop" },
    { name: "Sucos Prats", price: 10.00, image: "https://images.unsplash.com/photo-1613478223719-2ab80260f423?q=80&w=800&auto=format&fit=crop" },
    { name: "Suco Del Valle", price: 6.00, image: "https://images.unsplash.com/photo-1600271886399-0e7dc5819556?q=80&w=800&auto=format&fit=crop" },
    { name: "Red Bull", price: 15.00, image: "https://images.unsplash.com/photo-1622543925917-763c34d15384?q=80&w=800&auto=format&fit=crop" },
    { name: "Monster", price: 15.00, image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=800&auto=format&fit=crop" },
    { name: "Água com gás", price: 4.00, image: "https://images.unsplash.com/photo-1559839914-17aae19cea1e?q=80&w=800&auto=format&fit=crop" },
    { name: "Água sem gás", price: 3.00, image: "https://images.unsplash.com/photo-1523362628744-0c10015029c0?q=80&w=800&auto=format&fit=crop" },
    { name: "Coca-Cola 2L", price: 15.00, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=800&auto=format&fit=crop" },
  ]
};

const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

interface CartItem extends MenuItem {
  quantity: number;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === name);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.name === name ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.name !== name);
    });
  };

  const clearCart = () => setCart([]);

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    const itemsList = cart.map(i => `• ${i.quantity}x ${i.name} (${formatPrice(i.price * i.quantity)})`).join("\n");
    const message = encodeURIComponent(`Olá! Gostaria de fazer um pedido:\n\n${itemsList}\n\n*Total: ${formatPrice(cartTotal)}*`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER_1}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen selection:bg-bruto-red selection:text-white bg-bruto-black text-white">
      {/* Header */}
      <header className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
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
          <p className="text-zinc-400 text-xs md:text-sm mb-2 uppercase tracking-widest font-semibold">
            Versão demo – modelo criado por Clauh
          </p>
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
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-bruto-red text-white font-black text-lg py-4 px-8 rounded-2xl flex items-center gap-3 hover:bg-bruto-orange transition-all hover:scale-105 active:scale-95 shadow-xl shadow-bruto-red/20"
            >
              <ShoppingCart size={24} />
              VER CARDÁPIO
            </button>
            <a 
              href={YOOGA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 text-white font-bold py-4 px-8 rounded-2xl flex items-center gap-3 hover:bg-zinc-700 transition-all"
            >
              <ExternalLink size={24} />
              Pedir no App Delivery
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
      <main id="menu" className="max-w-6xl mx-auto px-4 py-20 space-y-24">
        
        {Object.entries(MENU).map(([category, items]) => (
          <section key={category}>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-zinc-800" />
              <h2 className="font-display text-4xl md:text-5xl uppercase text-bruto-red flex items-center gap-3">
                {category === 'hamburgueres' && <Flame className="text-bruto-orange" />}
                {category === 'combos' && <Star className="text-bruto-orange" />}
                {category === 'acompanhamentos' && <Utensils className="text-bruto-orange" />}
                {category === 'bebidas' && <Beer className="text-bruto-orange" />}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-bruto-red transition-all group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-bruto-red text-white font-black px-3 py-1 rounded-full text-sm shadow-lg">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-display text-2xl uppercase tracking-wide group-hover:text-bruto-orange transition-colors">{item.name}</h3>
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full bg-white text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-bruto-red hover:text-white transition-all active:scale-95"
                    >
                      <Plus size={18} />
                      Adicionar ao Pedido
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

      </main>

      {/* Google Maps Section */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-display text-4xl uppercase text-bruto-red">Gostou do nosso Bruto?</h2>
          <p className="text-zinc-400 text-lg">Sua avaliação é muito importante para nós! Clique no botão abaixo para nos avaliar no Google.</p>
          <a 
            href={GOOGLE_MAPS_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black font-black py-4 px-8 rounded-2xl hover:bg-bruto-orange transition-all hover:scale-105"
          >
            <MapPin size={24} className="text-bruto-red" />
            AVALIAR NO GOOGLE MAPS
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bruto-black border-t border-zinc-900 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h2 className="font-display text-4xl uppercase tracking-tighter">
              Bruto <span className="text-bruto-red">Hamburgueria</span>
            </h2>
            <p className="text-zinc-500 max-w-xs mx-auto md:mx-0">O hambúrguer mais bruto da cidade, feito artesanalmente pra quem tem fome de verdade!</p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-display text-xl uppercase text-bruto-orange">Fale Conosco</h3>
            <div className="space-y-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER_1}`}
                className="flex items-center justify-center md:justify-start gap-3 text-zinc-300 hover:text-bruto-red transition-colors"
              >
                <Phone size={18} className="text-bruto-red" />
                Opção 1: (66) 99929-4748
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER_2}`}
                className="flex items-center justify-center md:justify-start gap-3 text-zinc-300 hover:text-bruto-red transition-colors"
              >
                <Phone size={18} className="text-bruto-red" />
                Opção 2: (66) 99692-3803
              </a>
              <a 
                href={INSTAGRAM_URL}
                className="flex items-center justify-center md:justify-start gap-3 text-zinc-300 hover:text-bruto-red transition-colors"
              >
                <Instagram size={18} className="text-bruto-red" />
                @brutohamburgueria
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-xl uppercase text-bruto-orange">Horário</h3>
            <div className="space-y-2 text-zinc-300">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Clock size={16} className="text-bruto-red" />
                Seg, Qua, Qui, Sex, Sab, Dom
              </p>
              <p className="font-bold text-white">18:00 às 22:30</p>
              <div className="mt-4 inline-block bg-bruto-red text-white font-black py-1 px-4 rounded-full text-xs uppercase animate-pulse">
                Pedidos por tempo limitado!
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} Bruto Hamburgueria. Todos os direitos reservados.
        </div>
      </footer>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-zinc-900 flex items-center justify-between">
                <h2 className="font-display text-2xl uppercase flex items-center gap-3">
                  <ShoppingCart className="text-bruto-red" />
                  Seu Pedido
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-zinc-900 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-4">
                    <Utensils size={64} strokeWidth={1} />
                    <p>Seu carrinho está vazio.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="text-bruto-red font-bold hover:underline"
                    >
                      Ver cardápio
                    </button>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center bg-zinc-900/50 p-4 rounded-2xl border border-zinc-900">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" referrerPolicy="no-referrer" />
                      <div className="flex-1">
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-bruto-red font-bold">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button onClick={() => removeFromCart(item.name)} className="p-1 bg-zinc-800 rounded-md hover:bg-zinc-700">
                            <Minus size={14} />
                          </button>
                          <span className="font-bold">{item.quantity}</span>
                          <button onClick={() => addToCart(item)} className="p-1 bg-zinc-800 rounded-md hover:bg-zinc-700">
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.name)} className="text-zinc-600 hover:text-red-500">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-zinc-900 bg-zinc-950 space-y-4">
                  <div className="flex items-center justify-between text-xl font-black">
                    <span>TOTAL</span>
                    <span className="text-bruto-orange">{formatPrice(cartTotal)}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <button 
                      onClick={handleWhatsAppOrder}
                      className="w-full bg-[#25D366] text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all active:scale-95"
                    >
                      <MessageCircle size={24} />
                      FINALIZAR NO WHATSAPP
                    </button>
                    <a 
                      href={YOOGA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-bruto-red text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all active:scale-95"
                    >
                      <ExternalLink size={24} />
                      PEDIR NO APP DELIVERY
                    </a>
                  </div>
                  <button 
                    onClick={clearCart}
                    className="w-full text-zinc-500 text-sm hover:text-white transition-colors"
                  >
                    Limpar carrinho
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Cart Button */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-bruto-red text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-110 transition-transform active:scale-95 group"
      >
        <div className="relative">
          <ShoppingCart size={28} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-bruto-red text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {cartCount}
            </span>
          )}
        </div>
        <span className="font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          Ver Pedido ({formatPrice(cartTotal)})
        </span>
      </button>
    </div>
  );
}

