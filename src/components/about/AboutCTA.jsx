"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutCTA() {
  const whatsappLink = "https://wa.me/5592996074212?text=Olá! Vim pela página Sobre e quero solicitar minha Landing Page.";

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
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
            className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/30"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para transformar seu negócio com uma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              landing page inteligente?
            </span>
          </h2>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Dê o primeiro passo para uma presença digital profissional. 
            Estamos prontos para ajudar você a vender mais.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl transition-all duration-300 group"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <MessageCircle className="w-7 h-7" />
              Solicitar minha Landing Page agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <p className="mt-6 text-slate-500">
            Atendimento rápido via WhatsApp. Sem compromisso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}