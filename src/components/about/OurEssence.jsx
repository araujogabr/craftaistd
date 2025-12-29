"use client"
import React from 'react';
import { Sparkles, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function OurEssence() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nossa Essência
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Onde a <span className="text-blue-600">tecnologia</span> encontra a{" "}
            <span className="text-blue-600">artesania digital</span>
          </h2>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              <strong className="text-slate-900">CraftIA</strong> nasceu da união entre{" "}
              <em className="text-blue-600">tecnologia</em> e <em className="text-blue-600">artesania digital</em> 
              — o "craft" que está em nosso nome. Cada página que criamos é construída com 
              <strong className="text-slate-900"> precisão</strong>,{" "}
              <strong className="text-slate-900">estratégia</strong> e{" "}
              <strong className="text-slate-900">foco absoluto em resultados</strong>.
            </p>

            <p>
              Surgimos com um propósito claro: <strong className="text-slate-900">democratizar a presença digital 
              de alto nível</strong> para micro e pequenos empreendedores brasileiros. Aqueles que sonham grande, 
              mas precisam de soluções rápidas, acessíveis e eficientes.
            </p>

            <p>
              Não entregamos apenas páginas. Entregamos <strong className="text-slate-900">oportunidades de crescimento</strong>, 
              construídas com o que há de mais moderno em Inteligência Artificial e aprimoradas pelo olhar 
              humano de designers especializados em experiência do usuário.
            </p>
          </div>

          {/* Visual Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Sparkles, label: "Tecnologia + IA", color: "from-blue-500 to-blue-600" },
              { icon: Target, label: "Foco em Resultados", color: "from-indigo-500 to-indigo-600" },
              { icon: Heart, label: "Artesania Digital", color: "from-purple-500 to-purple-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-6"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-slate-900 font-semibold">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}