"use client"
import React from 'react';
import { AlertCircle, Clock, HelpCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
  {
    icon: Clock,
    text: "Pequenos empreendedores não têm tempo para sites complexos"
  },
  {
    icon: HelpCircle,
    text: "Muitos não sabem por onde começar no digital"
  },
  {
    icon: AlertCircle,
    text: "Agências tradicionais são caras e demoradas"
  }
];

export default function WhyWeExist() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Por que existimos
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Entendemos a{" "}
              <span className="text-blue-600">dor do mercado</span>
            </h2>

            <div className="space-y-6 mb-10">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-lg text-slate-700 pt-2">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-xl font-bold">A CraftAI resolve isso.</p>
              </div>
              <p className="text-blue-100">
                Páginas de alta performance entregues em horas, não semanas. 
                Simples, rápido e acessível.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=700&fit=crop"
                alt="Empreendedor"
                className="rounded-3xl shadow-2xl w-full"
              />
              
              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-slate-100 max-w-xs"
              >
                <p className="text-2xl font-bold text-slate-900 mb-2">
                  "Nossa missão é fazer você{" "}
                  <span className="text-blue-600">vender mais</span>, mais rápido."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}