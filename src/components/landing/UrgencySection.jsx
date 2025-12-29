"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Armchair, BadgeDollarSign, Zap, Headphones, ArrowRight, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const bonuses = [
  {
    icon: BadgeDollarSign,
    title: "Alcance seus clientes",
    description: "Páginas otimizadas para vender"
  },
  {
    icon: Zap,
    title: "Entrega expressa",
    description: "Sua página pronta em até 48h"
  },
  {
    icon: Headphones,
    title: "Suporte dedicado",
    description: "Planos com até 30 dias de suporte pós-entrega"
  }
];

export default function UrgencySection() {
  const whatsappLink = "https://wa.me/5592996074212?text=Olá! Quero garantir minha vaga para a landing page.";

  return (
    <section className="py-24 bg-gradient-to-r from-[#006891] via-[#0502c7] to-[#006891] from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-5 py-2 mb-8">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-semibold text-sm">Oferta especial por tempo limitado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Estamos aceitando apenas{" "}
            <span className="text-yellow-400">5 novos projetos</span>{" "}
            por semana
          </h2>
          
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Para garantir qualidade e atenção individual a cada cliente, 
            limitamos nossas vagas. Garanta a sua antes que as inscrições fechem.
          </p>

          {/* Bonuses */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <bonus.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-white font-bold mb-1">{bonus.title}</h3>
                <p className="text-blue-300 text-sm">{bonus.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Highlight Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-8 mb-10 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-7 h-7 text-blue-900" />
              <p className="text-2xl font-bold text-blue-900">
                Feche hoje e receba seu site em até 48h
              </p>
            </div>
            <p className="text-blue-900/80">
              Aproveite o bônus de entrega expressa incluído na oferta
            </p>
          </motion.div>

          {/* CTA */}
          <Button 
            asChild
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-900 px-12 py-8 text-xl font-bold rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Quero minha landing page agora
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}