"use client"
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Em quanto tempo recebo minha página?",
    answer: "Dependendo do plano escolhido, sua página fica pronta em 48h a 5 dias. No plano Simples e Profissional, a entrega é ultra rápida: 48h a 72h úteis após o envio das informações e pagamento da entrada."
  },
  {
    question: "Preciso entender de tecnologia?",
    answer: "De jeito nenhum! Nós cuidamos de toda a parte técnica. Você só precisa nos enviar as informações sobre seu negócio (textos, fotos, contatos) e nós fazemos todo o resto. É simples assim."
  },
  {
    question: "Como envio minhas informações?",
    answer: "Após fechar o pedido, você receberá um formulário simples para preencher com as informações do seu negócio: nome, serviços, diferenciais, fotos e contatos. Leva menos de 15 minutos."
  },
  {
    question: "Posso pedir alterações depois?",
    answer: "Sim! Todos os planos incluem 1 rodada de ajustes gratuitos. O plano Premium inclui 2 rodadas. Após a entrega, você tem até 30 dias de suporte para solicitar pequenas modificações."
  },
  {
    question: "E se eu não gostar do design?",
    answer: "Trabalhamos com você até ficar satisfeito! Antes de começar, alinhamos suas preferências de estilo. Se ainda assim não gostar do resultado, fazemos ajustes sem custo extra dentro do período de revisão."
  },
  {
    question: "Preciso ter um domínio próprio?",
    answer: "No plano Premium, o domínio de 1 ano está incluso. Nos outros planos, podemos te ajudar a registrar um domínio (custo à parte, cerca de R$40/ano) ou usar um domínio que você já tenha."
  },
  {
    question: "A página funciona no celular?",
    answer: "Com certeza! Todas as nossas páginas são 100% responsivas, ou seja, funcionam perfeitamente em celulares, tablets e computadores. Mais de 80% dos acessos vêm de dispositivos móveis."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Aceitamos PIX e cartão de crédito. O pagamento é dividido: 50% na entrada para iniciar o projeto e 50% na entrega, após sua aprovação. Sem surpresas."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
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
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Perguntas{" "}
            <span className="text-blue-700">mais comuns</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas antes de começar. Se ainda tiver perguntas, fale conosco no WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-gray-100 px-6 shadow-sm hover:shadow-md transition-shadow duration-300 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold text-gray-900 hover:no-underline hover:text-blue-700 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}