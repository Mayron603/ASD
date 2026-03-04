import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ChevronRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* --- VÍDEO DE FUNDO --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 scale-105"
      >
        <source src="/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* --- OVERLAYS CINEMATOGRÁFICOS --- */}
      {/* Overlay de cor base */}
      <div className="absolute inset-0 bg-slate-950/40 z-10" />
      
      {/* Gradiente Radial (Escurece as bordas para focar no centro) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge com Glassmorphism e Animação de Pulso */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-amber-500/20 bg-white/5 backdrop-blur-xl mb-10 shadow-2xl">
            <Shield className="w-4 h-4 text-amber-500 animate-pulse" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase">
              Divisão de Suporte Aéreo
            </span>
          </div>

          {/* Title - Estilo Moderno/Militar */}
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-4">
            ASD
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-light text-slate-400 tracking-[0.6em] uppercase mb-12">
            Air Support Division
          </p>

          {/* Slogan com destaque em itálico */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-amber-400/90 font-medium tracking-wide mb-12 italic"
          >
            "Dominando os céus. Protegendo o solo."
          </motion.p>

          {/* CTA Buttons com efeitos de Hover */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to={createPageUrl('ApplicationForm')}
              className="group relative px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-sm transition-all duration-300 uppercase tracking-widest overflow-hidden hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ingressar na ASD
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to={createPageUrl('Manuals')}
              className="px-10 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold rounded-sm hover:bg-white/10 transition-all duration-300 uppercase tracking-widest hover:border-white/40"
            >
              Acessar Manuais
            </Link>
          </div>
        </motion.div>
      </div>

      {/* --- INDICADOR DE SCROLL ANIMADO --- */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-40 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white tracking-[0.3em] uppercase rotate-90 mb-8">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent" />
      </motion.div>

      {/* Gradiente de transição para a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-20" />
    </section>
  );
}