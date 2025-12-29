"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { ClipboardList, Sparkles, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Você preenche o formulário",
    description: "Conte sobre seu negócio, serviços e objetivos. Leva menos de 15 minutos.",
    color: "from-blue-500 to-blue-700"
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Agentes de IA otimizam sua página",
    description: "Criamos uma página profissional personalizada para seu tipo de cliente em até 48h.",
    color: "from-purple-500 to-violet-700"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Você aprova e começa a divulgar",
    description: "Revisamos juntos, fazemos ajustes e sua página vai ao ar!",
    color: "from-emerald-500 to-teal-700"
  }
];

export default function HowItWorksSection() {
  const whatsappLink = "https://wa.me/5592996074212?text=Olá! Quero começar minha Landing Page agora.";

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30" />
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
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Simples, rápido e{" "}
            <span className="text-blue-700">sem complicação.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Em apenas 3 passos, sua landing page profissional estará pronta para converter.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line - Desktop */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 h-full">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg mx-auto`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 md:right-auto md:-left-2 w-10 h-10 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center shadow-sm">
                      <span className="text-sm font-bold text-gray-900">{step.number}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for Mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:hidden">
                    <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button 
            asChild
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-7 text-lg font-semibold rounded-xl shadow-lg shadow-blue-700/25"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Quero começar agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}