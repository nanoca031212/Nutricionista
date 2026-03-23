"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700">
              <Image
                src="/hero-nutri.png" /* Reusing the nutritionist image or could use another if generated */
                alt="Dra. Roberta Silva"
                width={500}
                height={600}
                className="w-full h-auto object-cover  transition-all duration-700"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Sua Nutricionista</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
              Olá, eu sou a <span className="text-primary italic">Dra. Roberta Silva</span>.
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Minha missão é transformar a vida de mulheres que buscam não apenas um corpo saudável, mas uma mente em paz com a comida.
              </p>
              <p>
                Com mais de 8 anos de experiência e milhares de vidas transformadas, desenvolvi um método que une a nutrição clínica avançada com o acolhimento humano que você merece.
              </p>
              <p className="font-medium text-text-main">
                Acredito que comer bem é um ato de amor próprio, e não uma punição.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">8+</p>
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider">Anos de experiência</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">5k+</p>
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider">Vidas transformadas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
