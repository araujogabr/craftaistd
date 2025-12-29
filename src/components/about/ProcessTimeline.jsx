"use client"
import React from 'react';
import { ClipboardList, Cpu, Palette, CheckCircle, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: ClipboardList,
    title: "Cliente preenche o formulário",
    description: "Informações básicas sobre o negócio e objetivos"
  },
  {
    icon: Cpu,
    title: "Criamos um layout inicial refinado com IA",
    description: "Estrutura otimizada otimizada para atrair clientes"
  },
  {
    icon: Palette,
    title: "Refinamento manual em UX",
    description: "Designers e Devs ajustam a identidade visual e a experiência"
  },
  {
    icon: CheckCircle,
    title: "Ajustes finais e publicação",
    description: "Revisão com o cliente e página vai ao ar"
  },
  {
    icon: Headphones,
    title: "Suporte pós-entrega",
    description: "Planos com até 30 dias de acompanhamento e ajustes"
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(41,92,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(41,92,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nosso Processo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Como{" "}
            <span className="text-blue-600">trabalhamos</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 hidden sm:block" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-20 sm:pl-0`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 inline-block">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="text-sm font-bold text-blue-600">0{index + 1}</span>
                      <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="absolute left-0 sm:left-8 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}