"use client"
import React from 'react';
import { MessageCircle, Award, Clock, Search, Palette, Handshake, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: MessageCircle,
    title: "Capta Clientes Automaticamente",
    description: "Integração direta com WhatsApp para receber mensagens 24h.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Award,
    title: "Aumenta sua Autoridade",
    description: "Transmita profissionalismo e ganhe a confiança do cliente.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: Clock,
    title: "Funciona 24h por Dia",
    description: "Seu negócio trabalhando enquanto você descansa.",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Search,
    title: "Apareça no Google",
    description: "Seja encontrado por quem busca seus serviços.",
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: Palette,
    title: "Design Profissional",
    description: "Visual moderno que passa credibilidade instantânea.",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Handshake,
    title: "Fechamento Imediato",
    description: "Estrutura pensada para converter visitante em cliente.",
    color: "from-cyan-500 to-teal-600"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Benefícios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            O que uma Landing Page{" "}
            <span className="text-blue-700">faz por você?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-500 relative overflow-hidden">
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px', borderRadius: '1rem' }}>
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/50 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-blue-200" />
              </div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Uma página bem feita aumenta em até{" "}
                <span className="text-yellow-300">300%</span>{" "}
                as chances de um cliente chamar você.
              </p>
              <p className="text-blue-200 text-lg">
                Transforme visitantes em clientes com uma landing page profissional.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}