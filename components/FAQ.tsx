"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a consultoria individual?",
    a: "É um acompanhamento próximo de 3 meses, com consultas periódicas e suporte diário via WhatsApp para ajustes e dúvidas — seja seu objetivo emagrecimento, hipertrofia ou reeducação alimentar."
  },
  {
    q: "O plano funciona para quem treina e quer ganhar massa muscular?",
    a: "Sim. Além do emagrecimento, trabalho protocolos específicos para hipertrofia, ajustando calorias, proteína e timing de refeições de acordo com seu treino."
  },
  {
    q: "Preciso comprar suplementos caros?",
    a: "Não. O foco é 100% em comida de verdade. Suplementação é indicada apenas como complemento, quando há necessidade clínica comprovada por exames."
  },
  {
    q: "Posso comer fora e socializar?",
    a: "Com certeza! O plano ensina você a fazer escolhas inteligentes em qualquer ambiente, sem precisar levar marmita para festas."
  },
  {
    q: "Atende online ou presencial?",
    a: "Atualmente os atendimentos são 100% online, permitindo que eu atenda pacientes de todo o Brasil com a mesma qualidade e comodidade."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-12 text-center">
          Dúvidas frequentes.
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-zinc-100 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
              >
                <span className="text-xl font-bold text-text-main">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
