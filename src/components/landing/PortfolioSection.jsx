"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


const portfolioItems = [
  {
    title: "Paulo Batata",
    category: "Personal Soccer",
    image: "/paulo.png"
  },
  {
    title: "Portifólio",
    category: "Desenvolvedor e UX Designer",
    image: "/gabriel.png"
  },
  {
    title: "Kazza do Modulado",
    category: "Móveis Planejados",
    image: "/kazza.png"
  },
  // {
  //   title: "Restaurante Gourmet",
  //   category: "Gastronomia",
  //   image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
  // },
  // {
  //   title: "Consultoria Financeira",
  //   category: "Finanças",
  //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
  // },
  // {
  //   title: "Studio de Arquitetura",
  //   category: "Design & Arquitetura",
  //   image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop"
  // }
];

export default function PortfolioSection() {
  const whatsappLink = "https://wa.me/5592996074212?text=Olá! Vi o portfólio e quero algo assim para mim.";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Veja algumas páginas{" "}
            <span className="text-blue-700">que criamos</span>
          </h2>
          <p className="text-lg text-gray-600">
            Cada projeto é único e personalizado para as necessidades do cliente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-blue-300 text-sm font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.category}
                  </p>
                  <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
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
              Quero algo assim para mim
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}