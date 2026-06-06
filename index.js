import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Paintbrush, 
  Layers, 
  Grid, 
  Hammer, 
  Home, 
  X, 
  Menu,
  Facebook,
  MessageCircle,
  Send,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const WHATSAPP_1 = "254757373025";
  const WHATSAPP_2 = "254715257929";
  const FB_LINK = "https://www.facebook.com/profile.php?id=100091783191705";
  const TIKTOK_LINK = "https://tiktok.com/@briankanyangala";

  const services = [
    { title: 'Skimming & Wall Finishing', icon: <Paintbrush className="w-6 h-6" /> },
    { title: 'Painting Services', icon: <Paintbrush className="w-6 h-6" /> },
    { title: 'Wallmaster Installations', icon: <Layers className="w-6 h-6" /> },
    { title: 'Gypsum Installation', icon: <Grid className="w-6 h-6" /> },
    { title: 'Tile Installation', icon: <Grid className="w-6 h-6" /> },
    { title: 'SPC Flooring', icon: <Layers className="w-6 h-6" /> },
    { title: 'Kitchen Cabinet Design', icon: <Hammer className="w-6 h-6" /> },
    { title: 'Wardrobes', icon: <Home className="w-6 h-6" /> },
    { title: 'Wainscoting & Panels', icon: <Layers className="w-6 h-6" /> }
  ];

  const portfolio = [
    { src: 'WhatsApp Image 2026-06-05 at 21.27.18.jpeg', alt: 'Modern Exterior' },
    { src: 'WhatsApp Image 2026-06-05 at 21.27.19.jpeg', alt: 'Side Elevation' },
    { src: 'WhatsApp Image 2026-06-05 at 21.27.22.jpeg', alt: 'Grand Elevation' },
    { src: 'WhatsApp Image 2026-06-05 at 21.27.23.jpeg', alt: 'Ceiling Prep' },
    { src: 'WhatsApp Image 2026-06-05 at 21.27.24 (1).jpeg', alt: 'Wainscoting Wall' },
    { src: 'WhatsApp Image 2026-06-05 at 21.27.24.jpeg', alt: 'Floating Stairs' },
    { src: 'WhatsApp Image 2026-06-05 at 21.27.27.jpeg', alt: 'Staircase Lighting' },
    { src: 'WhatsApp Image 2026-06-05 at 21.27.28 (1).jpeg', alt: 'Wainscoting Assembly' },
    { src: 'WhatsApp Image 2026-06-05 at 21.27.28.jpeg', alt: 'SPC Flooring' },
    { src: 'WhatsApp Image 2026-06-05 at 21.27.29 (1).jpeg', alt: 'Gypsum Ceiling' }
  ];

  const handleImageError = (e) => {
    const currentSrc = e.target.src;
    if (currentSrc.endsWith('.jpeg')) {
      e.target.src = currentSrc.replace(/\.jpeg$/, '.jpg');
    } else if (currentSrc.endsWith('.jpg')) {
      e.target.src = currentSrc.replace(/\.jpg$/, '.jpeg');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Kanya Interior, I'm ${formData.name}. %0A%0AMy Phone: ${formData.phone}%0A%0A${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_1}?text=${text}`, '_blank');
  };

  return (
    <div className="font-sans text-[#2C1A38] bg-white scroll-smooth selection:bg-[#FFBFA3] selection:text-[#2C1A38]">
      
      <a href={`https://wa.me/${WHATSAPP_1}`} className="fixed bottom-24 sm:bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center" target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-8 h-8" />
      </a>

      <div className="sm:hidden fixed bottom-0 left-0 w-full z-40 bg-[#2C1A38] text-white flex">
        <a href={`tel:${WHATSAPP_1}`} className="flex-1 py-4 flex justify-center items-center gap-2 font-bold bg-[#FFBFA3] text-[#2C1A38]">
          <Phone className="w-5 h-5" /> Call Now
        </a>
      </div>

      <nav className="fixed w-full z-40 bg-white/95 backdrop-blur-md border-b border-[#F2EBF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a href="#" className="text-2xl font-black tracking-tighter text-[#2C1A38]">KANYA <span className="text-[#FFBFA3] drop-shadow-sm">INTERIOR</span></a>
            <div className="hidden md:flex gap-8 font-medium text-sm tracking-widest uppercase">
              <a href="#about" className="hover:text-[#FFBFA3] transition">About</a>
              <a href="#services" className="hover:text-[#FFBFA3] transition">Services</a>
              <a href="#gallery" className="hover:text-[#FFBFA3] transition">Gallery</a>
              <a href="#contact" className="hover:text-[#FFBFA3] transition">Contact</a>
            </div>
            <div className="md:hidden text-[#2C1A38]">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#F2EBF4] px-4 py-4 space-y-4 font-bold text-center text-[#2C1A38]">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2">About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2">Services</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block py-2">Gallery</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2">Contact</a>
          </div>
        )}
      </nav>

      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={portfolio[0].src} alt="Hero Background" className="w-full h-full object-cover" onError={handleImageError} />
          <div className="absolute inset-0 bg-[#2C1A38]/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase leading-none drop-shadow-lg">Kanya <br className="md:hidden"/> Interior</h1>
          <p className="text-lg md:text-2xl text-[#FFBFA3] font-light max-w-2xl mx-auto drop-shadow-md">Delivering the desired interior transformation for your space</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a href={`tel:${WHATSAPP_1}`} className="bg-[#FFBFA3] text-[#2C1A38] px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#FFD1BE] transition flex justify-center items-center gap-2 shadow-lg">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_1}`} target="_blank" rel="noopener noreferrer" className="bg-white text-[#2C1A38] px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition flex justify-center items-center gap-2 shadow-lg">
              <MessageCircle className="w-5 h-5 text-[#25D366]" /> Get Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-[#F9F6FA]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF9E79]">About Us</h2>
          <p className="text-3xl md:text-4xl font-black text-[#2C1A38] leading-tight">Kanya Interior delivers the desired vision for every client.</p>
          <div className="w-16 h-1 bg-[#FFBFA3] mx-auto"></div>
          <p className="text-[#594B66] text-lg leading-relaxed">We are a premium mobile interior design and finishing company based in Nairobi, proudly serving all of Kenya. We specialize in modern, clean, high-quality finishes without the overhead of a physical office—bringing expert craftsmanship directly to your doorstep.</p>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 bg-[#F9F6FA] hover:bg-[#2C1A38] hover:text-white transition-colors duration-300 group border border-[#F2EBF4] rounded-xl">
                <div className="text-[#FF9E79] mb-6 bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-sm group-hover:bg-[#FFBFA3] group-hover:text-[#2C1A38] transition-colors">{service.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-tight">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF9E79] mb-2">Get in touch</h2>
              <p className="text-4xl font-black text-[#2C1A38]">Ready to Transform Your Space?</p>
            </div>
            <div className="flex gap-4">
              <a href={FB_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#F9F6FA] text-[#2C1A38] p-4 rounded-full hover:bg-[#2C1A38] hover:text-[#FFBFA3] transition">
                <Facebook className="w-8 h-8" />
              </a>
              <a href={`https://${TIKTOK_LINK}`} target="_blank" rel="noopener noreferrer" className="bg-[#F9F6FA] text-[#2C1A38] p-4 rounded-full hover:bg-[#2C1A38] hover:text-[#FFBFA3] transition">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.13 4.48-2.91 5.81-1.78 1.34-4.22 1.79-6.4 1.25-2.19-.53-4.08-1.95-5.11-3.95-1.03-2-1.2-4.39-.46-6.49.74-2.11 2.45-3.85 4.58-4.63 2.13-.78 4.54-.62 6.57.45v4.24c-1.74-1.04-4.04-1.1-5.74-.16-1.7.94-2.73 2.89-2.51 4.84.22 1.95 1.63 3.59 3.51 4.07 1.88.48 3.98-.12 5.25-1.54 1.27-1.42 1.84-3.41 1.72-5.35V2.71c-.01-.9-.02-1.8-.02-2.69z"/></svg>
              </a>
            </div>
          </div>
          <div className="bg-[#F9F6FA] p-8 sm:p-10 border border-[#F2EBF4] rounded-2xl">
            <h3 className="text-2xl font-black mb-6 text-[#2C1A38]">Send a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" required value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} className="w-full bg-white border border-[#F2EBF4] px-4 py-3 rounded-lg" placeholder="Your Full Name" />
              <input type="tel" required value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} className="w-full bg-white border border-[#F2EBF4] px-4 py-3 rounded-lg" placeholder="Phone Number" />
              <textarea rows="4" required value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} className="w-full bg-white border border-[#F2EBF4] px-4 py-3 rounded-lg" placeholder="Tell us about your project..."></textarea>
              <button type="submit" className="w-full bg-[#25D366] text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-[#1da851] transition flex items-center justify-center gap-2 shadow-md">
                Submit Inquiry <MessageCircle className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C1A38] text-white py-12 pb-24 sm:pb-12 border-t-4 border-[#FFBFA3]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <span className="text-2xl font-black tracking-tighter">KANYA <span className="text-[#FFBFA3]">INTERIOR</span></span>
          <p className="text-[#A294A9] text-sm">© Kanya Interior. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}