"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import ladding1 from "@/assets/ladding1.png";
import ladding2 from "@/assets/ladding2.png";
import ladding3 from "@/assets/ladding3.png";
import ladding4 from "@/assets/ladding4.png";

export default function HeroSection({ onScrollToPricing }) {
  const whatsappLink =
    "https://wa.me/5592996074212?text=Olá! Quero criar minha Landing Page profissional.";

  const images = [ladding1, ladding2, ladding3, ladding4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 🔒 largura travada igual às outras sections */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-7xl mx-auto py-16 lg:py-0">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="mb-4 px-3 py-2 bg-amber-50 text-amber-700 border border-amber-200 text-xs sm:text-sm font-medium inline-flex items-center">
              <Zap className="w-4 h-4 mr-1 text-amber-500" />
              Páginas entregues em até 48h — Vagas limitadas
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-snug tracking-tight mb-6">
              Seu negócio está{" "}
              <span className="text-blue-700 relative">
                perdendo clientes
                <svg
                  className="absolute -bottom-1 left-0 w-full sm:-bottom-2"
                  viewBox="0 0 300 12"
                >
                  <path
                    d="M2 10C50 4 150 2 298 10"
                    stroke="#1D4ED8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                </svg>
              </span>{" "}
              — coloque sua empresa online em até 48h.
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Landing pages profissionais, rápidas e otimizadas para vender 24h por dia.
              <span className="font-medium text-gray-700">
                {" "}Perfeitas para pequenos empreendedores.
              </span>
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {["Entrega em 48h", "Design Profissional", "Suporte Incluso"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-5 text-base sm:text-lg font-semibold rounded-xl shadow-lg shadow-blue-700/25"
              >
                <a href={whatsappLink} target="_blank">
                  Quero minha Landing Page
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onScrollToPricing}
                className="border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50 px-6 py-5 text-base sm:text-lg rounded-xl"
              >
                Ver Planos e Preços
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              relative
              w-full
              max-w-[95%]
              sm:max-w-lg
              lg:max-w-xl
              xl:max-w-2xl
              mx-auto
              order-last lg:order-none
            "
          >
            <div className="relative bg-white rounded-2xl shadow-xl p-3 sm:p-4 lg:p-6">
              <Image
                src={images[index]}
                alt="Landing Page Mockup"
                className="w-full rounded-2xl transition-opacity duration-700"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
