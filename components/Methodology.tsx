"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Methodology() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/healthy-food.png"
                alt="Comida saudável"
                width={500}
                height={600}
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Abstract shape */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
              A alimentação não deve ser uma <span className="text-primary italic">prisão</span>.
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Avaliação 360º",
                  text: "Análise completa do seu histórico, exames, sono e níveis de estresse para entender a causa raiz do seu peso."
                },
                {
                  title: "Planejamento sob medida",
                  text: "Nada de listas genéricas. Seu plano é montado com o que você gosta e o que sua rotina permite."
                },
                {
                  title: "Suporte diário",
                  text: "Dúvidas não esperam pela consulta. Temos um canal direto para ajustes e motivação constante."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-main mb-2">{item.title}</h3>
                    <p className="text-text-muted leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
