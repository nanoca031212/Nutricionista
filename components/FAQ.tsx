"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a mentoria individual?",
    a: "A mentoria é um acompanhamento próximo de 3 meses, com consultas quinzenais e suporte diário via WhatsApp para ajustes e dúvidas."
  },
  {
    q: "Preciso comprar suplementos caros?",
    a: "Não. Focamos 100% em comida de verdade. Suplementação é apenas um complemento caso haja necessidade clínica comprovada por exames."
  },
  {
    q: "Posso comer fora e socializar?",
    a: "Com certeza! O plano ensina você a fazer escolhas inteligentes em qualquer ambiente, sem precisar levar marmita para festas."
  },
  {
    q: "Atende online ou presencial?",
    a: "Atualmente os atendimentos são 100% online, permitindo que eu atenda pacientes de todo o Brasil e do exterior com a mesma qualidade."
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
