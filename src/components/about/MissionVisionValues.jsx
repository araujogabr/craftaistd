"use client"
import React from 'react';
import { Rocket, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Rocket,
    title: "Missão",
    description: "Criar páginas inteligentes que impulsionam negócios reais, com velocidade e acessibilidade para todos os empreendedores.",
    gradient: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50"
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser a maior referência do Brasil em landing pages rápidas, modernas e de alta conversão para pequenas empresas.",
    gradient: "from-indigo-500 to-indigo-600",
    bgLight: "bg-indigo-50"
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Clareza, eficiência, simplicidade, excelência e foco absoluto no sucesso do cliente.",
    gradient: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50"
  }
];

export default function MissionVisionValues() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
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
            O que nos guia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Missão, Visão e{" "}
            <span className="text-blue-600">Valores</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.gradient}`} />
                
                <div className={`w-16 h-16 ${card.bgLight} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className={`w-8 h-8 bg-gradient-to-r ${card.gradient} bg-clip-text`} style={{ color: card.gradient.includes('blue') ? '#3b82f6' : card.gradient.includes('indigo') ? '#6366f1' : '#a855f7' }} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {card.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}