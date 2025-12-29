"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, UserX, TrendingDown, Users, ShieldX, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Search,
    text: "Seu negócio só depende de boca a boca.",
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    icon: UserX,
    text: "Seus clientes não conseguem te achar ou entrar em contato.",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    icon: TrendingDown,
    text: "Você perde vendas por não ter presença online.",
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    icon: Users,
    text: "Seus concorrentes já têm site e aparecem antes de você.",
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    icon: ShieldX,
    text: "Sem site = menos confiança + menos autoridade.",
    color: "text-rose-500",
    bg: "bg-rose-50"
  }
];

export default function ProblemSection() {
  const whatsappLink = "https://wa.me/5592996074212?text=Olá! Quero resolver minha presença online.";

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            O Problema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Seu cliente te procura no Google,{" "}
            <span className="text-red-600">mas ele não te encontra.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Enquanto você lê isso, potenciais clientes estão escolhendo seus concorrentes porque eles têm presença online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${problem.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon className={`w-7 h-7 ${problem.color}`} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button 
            asChild
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-blue-700/25"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Quero resolver isso agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}