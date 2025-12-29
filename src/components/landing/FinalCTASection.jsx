"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  const whatsappLink = "https://wa.me/5592996074212?text=Olá! Quero falar com um especialista sobre minha landing page.";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-700/30"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Pronto para colocar seu negócio no digital{" "}
            <span className="text-blue-700">e vender mais?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Dê o primeiro passo para profissionalizar sua presença online. 
            Estamos aqui para ajudar você a conquistar mais clientes.
          </p>

          {/* CTA Button */}
          <Button 
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-xl shadow-green-600/30 hover:shadow-2xl hover:shadow-green-600/40 transition-all duration-300 group"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <MessageCircle className="w-7 h-7" />
              Falar com Especialista Agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <p className="mt-6 text-gray-500">
            Atendimento rápido, sem compromisso.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-100">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">48h</p>
              <p className="text-gray-500 text-sm">Entrega rápida</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">+30</p>
              <p className="text-gray-500 text-sm">Projetos entregues</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-gray-500 text-sm">Clientes satisfeitos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}