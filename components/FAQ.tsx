"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona o acompanhamento psicológico?",
    a: "As sessões têm 50 minutos e acontecem semanalmente ou quinzenalmente, conforme sua necessidade. O ritmo e a abordagem são ajustados ao longo do processo, de acordo com o que você traz em cada encontro."
  },
  {
    q: "Você atende ansiedade, depressão, síndrome do pânico e burnout?",
    a: "Sim. O atendimento é voltado a pacientes que enfrentam esses quadros, sempre com escuta acolhedora e cuidado individualizado."
  },
  {
    q: "As sessões são sigilosas?",
    a: "Sim. Tudo o que é conversado durante o acompanhamento é tratado com ética profissional e total confidencialidade."
  },
  {
    q: "Atende online ou presencial?",
    a: "Os atendimentos são realizados por videochamada, o que permite receber pacientes de qualquer lugar com o mesmo cuidado do presencial."
  },
  {
    q: "Como faço para agendar minha primeira sessão?",
    a: "Basta chamar no WhatsApp para conversarmos sobre o seu momento atual e encontrarmos o melhor horário para começar."
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
