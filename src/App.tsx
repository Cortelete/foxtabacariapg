import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, MapPin, MessageCircle, Star, Phone, CheckSquare, Square } from 'lucide-react';
import { Modal } from './components/Modal';
import { LinkButton } from './components/LinkButton';

export default function App() {
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  // Form states
  const [contactName, setContactName] = useState('');
  const [contactItems, setContactItems] = useState<string[]>([]);
  const [reviewScore, setReviewScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [developerName, setDeveloperName] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const itemsText = contactItems.length > 0 ? ` Procuro por: ${contactItems.join(', ')}.` : '';
    const msg = `Olá, meu nome é ${contactName}.${itemsText} Gostaria de mais informações!`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5542999080012?text=${encoded}`, '_blank');
    setIsContactModalOpen(false);
  };

  const handleItemToggle = (item: string) => {
    setContactItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleReviewSelect = (score: number) => {
    setReviewScore(score);
    if (score === 5) {
      window.open('https://search.google.com/local/writereview?placeid=ChIJ82Ho1hMb6JQRhhl1MwlDtdw', '_blank');
      setIsReviewModalOpen(false);
    } else {
      setIsReviewModalOpen(false);
      setIsFeedbackModalOpen(true);
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Using FormSubmit pattern as requested
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/your-email@example.com';
    form.target = '_blank';
    
    const inputMsg = document.createElement('input');
    inputMsg.type = 'hidden';
    inputMsg.name = 'Feedback';
    inputMsg.value = feedback;
    form.appendChild(inputMsg);
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    setIsFeedbackModalOpen(false);
    setFeedback('');
  };

  const handleDeveloperContact = () => {
    const msg = `Olá, vi o link da Fox Tabacaria PG e quero um site igual! Meu nome é ${developerName}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5541988710303?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-zinc-950 font-sans">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-zinc-900 to-[#1a0c00] animate-gradient" />
      
      {/* Subtle glowing orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-[100dvh] w-full flex-col items-center justify-center px-4 py-4 sm:px-8 sm:py-12">
        <div className="w-full max-w-[400px] max-h-[95dvh] overflow-y-auto sm:max-h-none sm:overflow-visible bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800/80 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col items-center relative">
          
          {/* Inner card glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange-600/10 rounded-full blur-[60px] pointer-events-none" />

          {/* Profile Section */}
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col items-center text-center"
        >
          {/* Spinny Coin Logo */}
          <motion.div
            className="mb-3 sm:mb-6 cursor-pointer relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotateY: 360 }}
            transition={{ rotateY: { duration: 0.5, ease: "easeInOut" } }}
            onClick={() => setIsLogoModalOpen(true)}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 opacity-20 blur-xl"></div>
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 mx-auto drop-shadow-2xl">
              <img 
                src="/logo.png" 
                alt="Fox Tabacaria PG Logo" 
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Title & Subtitle */}
          <h1 className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
            Fox Tabacaria PG
          </h1>
          <p className="mt-1 sm:mt-2 text-[11px] sm:text-[13px] font-medium text-orange-500/90 tracking-wide uppercase">
            🦊 + de 1k Itens de Tabacaria & Headshop
          </p>
          <div className="mt-2.5 mb-5 sm:mt-4 sm:mb-8 flex items-center justify-center rounded-full bg-red-950/30 px-3 py-1 sm:px-4 sm:py-1.5 border border-red-900/50">
            <span className="text-[10px] sm:text-xs font-semibold text-red-500 leading-tight">🔞 Venda proibida para menores de 18</span>
          </div>
        </motion.div>

        {/* Link Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-col gap-2.5 sm:gap-4 mb-5 sm:mb-12"
        >
          <LinkButton 
            href="https://www.instagram.com/foxtabacariapg/"
            icon={<Instagram size={18} className="sm:w-5 sm:h-5" />}
            label="Instagram Oficial"
          />
          <LinkButton 
            onClick={() => setIsContactModalOpen(true)}
            icon={<MessageCircle size={18} className="sm:w-5 sm:h-5" />}
            label="Contato e Orçamentos"
          />
          <LinkButton 
            onClick={() => setIsMapModalOpen(true)}
            icon={<MapPin size={18} className="sm:w-5 sm:h-5" />}
            label="Nossa Localização"
          />
          <LinkButton 
            onClick={() => setIsReviewModalOpen(true)}
            icon={<Star size={18} className="sm:w-5 sm:h-5" />}
            label="Como foi sua experiência?"
          />
        </motion.div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-1 mt-auto"
        >
          <button 
            onClick={() => setIsCreditsModalOpen(true)}
            className="text-[9px] sm:text-[11px] font-mono text-zinc-500 hover:text-orange-500 transition-colors"
          >
            Desenvolvido por InteligenciArte.IA ✨
          </button>
        </motion.footer>

        </div>
      </main>

      {/* --- Modals --- */}
      
      {/* 1. Quem Somos Modal */}
      <Modal isOpen={isLogoModalOpen} onClose={() => setIsLogoModalOpen(false)} title="Quem Somos">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-24 w-24 drop-shadow-xl mb-2">
             <img src="/logo.png" alt="Fox Tabacaria PG" className="h-full w-full object-contain" />
          </div>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Fox Tabacaria PG</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Bem-vindo à tabacaria mais exclusiva e premium de Ponta Grossa. 
            Oferecemos mais de 1000 itens de tabacaria e headshop para garantir 
            a melhor experiência, sempre com sofisticação e qualidade.
          </p>
        </div>
      </Modal>

      {/* 2. Contato Modal */}
      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title="Faça seu pedido">
        <form onSubmit={handleContactSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Seu Nome</label>
            <input 
              required
              type="text" 
              value={contactName}
              onChange={e => setContactName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
              placeholder="Como podemos te chamar?"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-3 ml-1">O que você procura? (Opcional)</label>
            <div className="flex flex-col gap-2.5">
              {['Sedas', 'Piteiras', 'Bongs', 'Tabacos', 'Itens Headshop'].map(item => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleItemToggle(item)}
                  className="flex items-center gap-3 text-left w-full group outline-none"
                >
                  <div className={`p-0.5 rounded-md transition-colors ${contactItems.includes(item) ? 'bg-orange-500 text-zinc-900' : 'bg-zinc-800 text-zinc-500 group-hover:bg-zinc-700'}`}>
                    {contactItems.includes(item) ? <CheckSquare size={16} /> : <Square size={16} />}
                  </div>
                  <span className={`text-sm transition-colors ${contactItems.includes(item) ? 'text-zinc-200' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-black font-semibold rounded-xl px-4 py-3.5 text-sm transition-all shadow-[0_0_15px_rgba(234,88,12,0.2)] hover:shadow-[0_0_25px_rgba(234,88,12,0.4)] mt-2"
          >
            Enviar para WhatsApp
          </button>
        </form>
      </Modal>

      {/* 3. Localização Modal */}
      <Modal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} title="Onde estamos">
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden border border-zinc-800 mb-4 h-48 bg-zinc-950 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.233063117158!2d-50.163208999999995!3d-25.0939708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81b13d6e861f3%3A0xdcb5430933751986!2sFox%20tabacaria!5e0!3m2!1spt-BR!2sbr!4v1782228727359!5m2!1spt-BR!2sbr" 
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 mix-blend-lighten"
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
          <div className="flex items-start gap-3 bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
            <MapPin className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
            <div>
              <h4 className="text-sm font-medium text-zinc-200">Endereço</h4>
              <p className="text-xs text-zinc-400 mt-1">R. Balduíno Taques, 676 - Centro</p>
              <p className="text-xs text-zinc-500">Ponta Grossa - PR</p>
            </div>
          </div>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=R.+Balduíno+Taques,+676+-+Centro,+Ponta+Grossa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl px-4 py-3 text-sm transition-colors mt-2"
          >
            <MapPin size={16} /> Abrir no Mapa
          </a>
        </div>
      </Modal>

      {/* 4. Avaliação Modal */}
      <Modal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} title="Avalie nosso serviço">
        <div className="flex flex-col items-center py-4">
          <p className="text-sm text-zinc-400 text-center mb-6">Como foi sua experiência com a <strong className="text-zinc-200 font-medium">Fox Tabacaria PG</strong>?</p>
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="group relative outline-none"
                onClick={() => handleReviewSelect(star)}
              >
                <Star 
                  size={36} 
                  className={`transition-all duration-300 ${
                    reviewScore >= star 
                      ? 'fill-orange-500 text-orange-500 scale-110 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]' 
                      : 'text-zinc-700 group-hover:text-zinc-500'
                  }`} 
                />
              </button>
            ))}
          </div>
        </div>
      </Modal>

      {/* 5. Feedback Modal (For 4 stars or less) */}
      <Modal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} title="Podemos melhorar?">
        <form onSubmit={handleFeedbackSubmit} className="space-y-4">
           <p className="text-sm text-zinc-400 mb-2">Poxa, vimos que sua experiência não foi perfeita. O que aconteceu e como podemos melhorar?</p>
           <textarea 
             required
             value={feedback}
             onChange={e => setFeedback(e.target.value)}
             rows={4}
             className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 transition-all resize-none"
             placeholder="Deixe seu feedback aqui..."
           />
           <button 
            type="submit"
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl px-4 py-3.5 text-sm transition-colors mt-2"
          >
            Enviar Feedback
          </button>
        </form>
      </Modal>

      {/* 6. Créditos (Developer) Modal */}
      <Modal isOpen={isCreditsModalOpen} onClose={() => setIsCreditsModalOpen(false)} title="InteligenciArte.IA">
        <div className="space-y-6">
          <div className="flex flex-col space-y-3">
             <h4 className="text-sm font-medium text-zinc-300">Desenvolvedor</h4>
             <a 
               href="https://instagram.com/inteligenciarte.ia" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800/50 hover:bg-zinc-900 transition-colors"
             >
               <Instagram className="text-pink-500" size={20} />
               <span className="text-sm text-zinc-200">@inteligenciarte.ia</span>
             </a>
          </div>
          <hr className="border-zinc-800/50" />
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-zinc-300">Quer um site incrível como esse?</h4>
            <input 
                type="text" 
                value={developerName}
                onChange={e => setDeveloperName(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 transition-all"
                placeholder="Seu nome"
              />
            <button 
              onClick={handleDeveloperContact}
              disabled={!developerName.trim()}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-xl px-4 py-3.5 text-sm transition-all"
            >
              <Phone size={18} /> Fale comigo! 🚀
            </button>
          </div>
        </div>
      </Modal>

    </div>
  );
}
