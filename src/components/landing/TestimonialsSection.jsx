"use client"
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marina Costa",
    role: "Nutricionista",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "Em 2 dias minha página estava pronta. Já na primeira semana recebi 5 novos pacientes pelo WhatsApp! O investimento se pagou no primeiro mês.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    role: "Advogado",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Finalmente tenho uma presença online profissional. Os clientes comentam que o site passa muita credibilidade. Recomendo demais!",
    rating: 5
  },
  {
    name: "Ana Paula Silva",
    role: "Personal Trainer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "Eu não entendia nada de tecnologia e eles fizeram tudo por mim. O processo foi super simples e o resultado ficou incrível!",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50" />
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
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Empreendedores que já{" "}
            <span className="text-blue-700">transformaram seus negócios</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8">
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white fill-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-50"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 rounded-full px-6 py-3 border border-blue-100">
            <Users className="w-5 h-5 text-blue-700" />
            <p className="text-blue-800 font-medium">
              +30 pequenos negócios já atendidos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}