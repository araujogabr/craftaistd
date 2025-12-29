"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, Star, ArrowRight, Zap, AlertCircle, Info } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Plano Simples",
    price: "290",
    description: "Ideal para presença digital rápida e objetiva.",
    features: [
      "Até 4 seções",
      "Botão WhatsApp integrado",
      "Design responsivo",
      "Entrega em 48h",
      "Suporte pós-entrega: 3 dias",
      "Não inclui formulário",
      "Não inclui domínio"
    ],
    popular: false,
    color: "border-gray-200 hover:border-blue-200",
    buttonStyle: "bg-gray-100 hover:bg-gray-200 text-gray-900"
  },
  {
    name: "Plano Profissional",
    price: "590",
    description: "Perfeito para quem quer captar leads e vender mais.",
    features: [
      "Até 6 seções",
      "Botão WhatsApp integrado",
      "Design responsivo",
      "Entrega em 72h",
      "Formulário integrado",
      "Suporte pós-entrega: 7 dias",
      "Não inclui domínio"
    ],
    popular: true,
    color: "border-blue-500 ring-2 ring-blue-100",
    buttonStyle: "bg-blue-700 hover:bg-blue-800 text-white shadow-lg shadow-blue-700/25"
  },
  {
    name: "Plano Premium",
    price: "990",
    description: "Máxima performance com suporte premium e recursos profissionais.",
    features: [
      "Até 8 seções",
      "Botão WhatsApp integrado",
      "Design responsivo",
      "Entrega em 5 dias",
      "Formulário integrado",
      "Domínio por 1 ano incluso",
      "Email profissional incluso",
      "Google Analytics básico",
      "Suporte pós-entrega: 30 dias"
    ],
    popular: false,
    color: "border-gray-200 hover:border-blue-200",
    buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white"
  }
];

export default function PricingSection() {
  const getWhatsappLink = (plan) => {
    return `https://wa.me/5592996074212?text=Olá! Tenho interesse no plano ${plan.name} de R$ ${plan.price}.`;
  };

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl opacity-60" />
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
            Planos e Preços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Planos de{" "}
            <span className="text-blue-700">Landing Page</span>
          </h2>
          <p className="text-lg text-gray-600">
            Investimento único, sem mensalidades. Sua página pronta para vender.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white rounded-3xl p-8 border-2 ${plan.color} transition-all duration-300 hover:shadow-xl ${plan.popular ? 'transform md:-translate-y-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-700 text-white px-4 py-1.5 text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 mr-1.5 fill-yellow-300 text-yellow-300" />
                    Mais Vendido
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-lg text-gray-500">R$</span>
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">pagamento único</p>
                <p className="text-xs text-gray-500 italic leading-relaxed px-2">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <TooltipProvider>
                  {plan.features.map((feature, featureIndex) => {
                    const isNegative = feature.startsWith("Não inclui");
                    const isSupport = feature.startsWith("Suporte pós-entrega");
                    
                    return (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isNegative ? 'bg-red-100' : plan.popular ? 'bg-blue-100' : 'bg-gray-100'}`}>
                          <Check className={`w-3 h-3 ${isNegative ? 'text-red-600' : plan.popular ? 'text-blue-700' : 'text-gray-700'}`} />
                        </div>
                        <span className={isNegative ? 'text-red-600 font-medium' : 'text-gray-700'}>
                          {feature}
                        </span>
                        {isSupport && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="w-4 h-4 text-blue-500 cursor-help flex-shrink-0 mt-0.5" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p className="font-semibold mb-2">O suporte inclui:</p>
                              <ul className="text-sm space-y-1">
                                <li>• Correções de bugs</li>
                                <li>• Ajustes de texto</li>
                                <li>• Pequenas mudanças visuais</li>
                                <li>• Troca de imagens</li>
                              </ul>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    );
                  })}
                </TooltipProvider>
              </div>

              <Button 
                asChild
                className={`w-full py-6 text-base font-semibold rounded-xl ${plan.buttonStyle}`}
              >
                <a href={getWhatsappLink(plan)} target="_blank" rel="noopener noreferrer">
                  Quero este plano
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Payment Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-3 bg-gray-50 rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-blue-700" />
            <p className="text-gray-600">
              Pagamentos via <span className="font-semibold text-gray-900">PIX</span> ou <span className="font-semibold text-gray-900">Cartão</span>. 
              50% na entrada + 50% na entrega.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-900 font-medium mb-2">⚠️ Informações importantes:</p>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>• Todos os planos incluem hospedagem frees</li>
              <li>• Parcelamento disponível apenas no plano Premium sem juros</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}