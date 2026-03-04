import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ChevronRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* --- VÍDEO DE FUNDO --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Camada de brilho/escurecimento para manter o contraste do texto */}
      <div className="absolute inset-0 bg-slate-950/70 z-10" />
      
      {/* Brilhos radiais (mantidos para dar profundidade ao vídeo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-3xl z-10" />
      
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium tracking-widest uppercase">Divisão de Suporte Aéreo</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-6">
            <span className="block">ASD</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-slate-400 mt-3 tracking-[0.2em]">
              AIR SUPPORT DIVISION
            </span>
          </h1>

          {/* Slogan */}
          <p className="text-lg md:text-xl text-amber-400/90 font-medium tracking-wide mb-4 italic">
            "Dominando os céus. Protegendo o solo."
          </p>
          
          <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            A ASD é a divisão aérea de elite responsável pelo patrulhamento, apoio tático, 
            monitoramento estratégico e operações de resgate. Somos a linha de defesa que 
            opera acima de tudo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={createPageUrl('ApplicationForm')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-all duration-300 text-sm tracking-widest uppercase shadow-lg shadow-amber-500/20"
            >
              Ingressar na ASD
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl('Manuals')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded-lg transition-all duration-300 text-sm tracking-widest uppercase backdrop-blur-md"
            >
              Acessar Manuais
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade - Transição suave para o resto da página */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-20" />
    </section>
  );
}