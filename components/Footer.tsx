"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-accent text-white py-20">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
            Pronta para sua <span className="text-primary italic">melhor versão?</span>
          </h2>
          <button className="bg-white text-dark-accent px-10 py-5 rounded-full text-xl font-bold hover:bg-primary hover:text-white transition-all shadow-2xl active:scale-95">
            Agendar minha consulta agora
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-serif font-bold tracking-tight mb-6 block">
              Nutri<span className="text-primary">Equilíbrio</span>
            </span>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Transformando vidas através da nutrição consciente e humanizada. Sua jornada para uma saúde plena começa aqui.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#sobre" className="hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link href="#metodologia" className="hover:text-primary transition-colors">Metodologia</Link></li>
              <li><Link href="#planos" className="hover:text-primary transition-colors">Planos</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-white/60">
              <li>contato@nutriequilibrio.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-white/30">
          <p>© 2024 NutriEquilíbrio. Todos os direitos reservados. Desenvolvido com ❤️</p>
        </div>
      </div>
    </footer>
  );
}
