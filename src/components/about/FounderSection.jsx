"use client"
import React from 'react';
import { Quote, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import fotoperfil from "@/assets/fotoperfil.png";

export default function FounderSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Fundador
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Quem está por trás da{" "}
            <span className="text-blue-600">CraftIA</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 md:p-12 border border-slate-100"
          >
            <div className="grid md:grid-cols-5 gap-10 items-center">
              {/* Photo */}
              <div className="md:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20" />

                  <Image
                    src={fotoperfil}
                    alt="Gabriel Araújo"
                    className="relative rounded-2xl w-full shadow-2xl border-4 border-white"
                    priority
                  />

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-slate-100"
                  >
                    <div className="flex items-center gap-2">
                      <div className="px-2 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">Gabriel Araújo</span>
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-slate-900">Fundador</p>
                        <p className="text-slate-500">CraftIA</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  Gabriel Araújo
                </h3>
                <p className="text-blue-600 font-medium mb-6">
                  Desenvolvedor Web & Mobile | UX Designer | Especialista em Experiência do Usuário
                </p>

                <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                  <p>
                    Gabriel é o criador da CraftIA. Com anos de experiência em desenvolvimento
                    e design, ele decidiu unir <strong className="text-slate-900">tecnologia + IA + UX</strong> para
                    ajudar pequenos negócios a crescer de forma simples e acessível.
                  </p>
                  <p>
                    Sua missão é eliminar as barreiras técnicas que impedem empreendedores
                    de terem uma presença digital profissional, tornando a tecnologia uma
                    aliada — não um obstáculo.
                  </p>
                </div>

                {/* Quote */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white fill-white" />
                  </div>
                  <p className="text-lg text-slate-700 italic">
                    "Acredito que toda empresa merece ter uma presença digital profissional —
                    <strong className="text-slate-900 not-italic"> sem complicação.</strong>"
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-6">
                  <a
                    href="https://www.linkedin.com/in/gabrielaraujux/"
                    target='_blank'
                    className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-slate-600 hover:text-blue-600" />
                  </a>
                  <a
                    href="mailto:comercial@craftaistd.com?subject=%5BSOLICITA%C3%87%C3%83O%20DE%20OR%C3%87AMENTO%20%7C%20Landing%20Page%5D&body=Ol%C3%A1%2C%20tudo%20bem%3F%0D%0A%0D%0AEstou%20interessado%20em%20desenvolver%20uma%20Landing%20Page%20profissional%20para%20o%20meu%20neg%C3%B3cio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%0D%0A%0D%0ASeria%20poss%C3%ADvel%20me%20informar%20sobre%3A%0D%0A- Pre%C3%A7os%20e%20planos%0D%0A- Prazo%20de%20entrega%0D%0A- O%20que%20est%C3%A1%20incluso%20no%20projeto%0D%0A%0D%0AJ%C3%A1%20tenho%20uma%20ideia%20de%20conte%C3%BAdo%20e%20p%C3%BAblico%20alvo.%20Podemos%20conversar%20para%20mais%20detalhes%3F%0D%0A%0D%0AAguardo%20o%20retorno.%0D%0A%0D%0AObrigado%20%21"
                    target='_blank'
                    className="w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-5 h-5 text-slate-600 hover:text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}