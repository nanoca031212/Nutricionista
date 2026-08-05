"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  MessageCircle,
  Apple,
  ClipboardCheck,
  GlassWater,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import CtaButton from "./CtaButton";

const benefits = [
  {
    icon: Monitor,
    title: "Sessões individuais",
    description: "Consultas individuais quinzenais ou semanais, focadas no seu objetivo.",
  },
  {
    icon: MessageCircle,
    title: "Acompanhamento",
    description: "Acompanhamento contínuo pelo WhatsApp para tirar dúvidas e ajustar a rota.",
  },
  {
    icon: Apple,
    title: "Correção e ajustes",
    description: "Correção e ajustes do plano alimentar conforme sua evolução.",
  },
  {
    icon: ClipboardCheck,
    title: "Protocolo personalizado",
    description:
      "Protocolo de emagrecimento, reeducação alimentar ou hipertrofia, feito sob medida.",
  },
  {
    icon: GlassWater,
    title: "Estratégia de suplementação",
    description:
      "Indicação de suplementação baseada em exames, quando clinicamente necessário.",
  },
  {
    icon: BookOpen,
    title: "Materiais de apoio",
    description: "Materiais de apoio, cardápios e receitas práticas para o dia a dia.",
  },
];

export default function Benefits() {
  return (
    <section id="jornada" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        {/* Top Decoration */}
        <div className="flex justify-center gap-2 text-primary/40 mb-12">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
            Ao entrar na{" "}
            <span className="text-primary italic">consultoria individual</span>,
            você não recebe apenas um plano alimentar.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Você inicia um processo de transformação real do seu corpo,
            seja para emagrecer, ganhar massa magra ou reeducar sua
            alimentação, com suporte, orientação e clareza ao longo dos 90
            dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col relative overflow-hidden h-full"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 w-12 h-1.5 bg-primary/80 rounded-b-full group-hover:w-full group-hover:left-0 group-hover:rounded-none transition-all duration-300" />

              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-text-main mb-3">
                {benefit.title}
              </h3>

              <p className="text-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto space-y-12">
          <p className="text-xl font-bold text-text-main">
            E, acima de tudo, você terá o suporte de uma nutricionista que
            entende cada etapa desse processo e caminha junto com você.
          </p>
        </div>
      </div>
    </section>
  );
}
