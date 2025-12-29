"use client"
import React from 'react';
import { Cpu, Palette, Clock, Smile, LayoutTemplate, MessageCircle, Target } from "lucide-react";
import { motion } from "framer-motion";

const differentials = [
  {
    icon: Cpu,
    title: "Auxílio de Agentes de IA",
    description: "Tecnologia de ponta em Inteligência Artificial para gerar layouts inteligentes e otimizados."
  },
  {
    icon: Palette,
    title: "Refinamento UX",
    description: "Cada página é ajustada manualmente por designers especializados."
  },
  {
    icon: Clock,
    title: "Entrega em até 48h",
    description: "Velocidade sem comprometer a qualidade do resultado final."
  },
  {
    icon: Smile,
    title: "Processo Simples",
    description: "Sem complicações, burocracia ou termos técnicos confusos."
  },
  {
    icon: LayoutTemplate,
    title: "Modelos por Nicho",
    description: "Templates exclusivos para diferentes segmentos de mercado."
  },
  {
    icon: MessageCircle,
    title: "Suporte Humano",
    description: "Atendimento real via WhatsApp, não robôs impessoais."
  },
  {
    icon: Target,
    title: "Foco em Conversão",
    description: "Estrutura pensada para transformar visitantes em clientes."
  }
];

export default function Differentials() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Por que escolher a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              CraftIA?
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 h-full border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}