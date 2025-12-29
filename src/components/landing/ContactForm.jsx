"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    objective: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, send to your backend or WhatsApp API
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nTelefone: ${formData.phone}\nNegócio: ${formData.business}\nMeu objetivo é: ${formData.objective}`;
    const whatsappUrl = `https://wa.me/5592996074212?text=${encodeURIComponent(whatsappMessage)}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Redirect to WhatsApp after showing success
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="contact-form">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Formulário de Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Solicite seu{" "}
            <span className="text-blue-700">orçamento grátis</span>
          </h2>
          <p className="text-lg text-gray-600">
            Preencha o formulário abaixo e entraremos em contato em até 2 horas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-600">Redirecionando para o WhatsApp...</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Seu nome completo *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Ex: João da Silva"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="mt-2 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        WhatsApp *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        className="mt-2 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="business" className="text-gray-700 font-medium">
                        Seu negócio *
                      </Label>
                      <Select
                        value={formData.business}
                        onValueChange={(value) => handleChange('business', value)}
                        required
                      >
                        <SelectTrigger className="mt-2 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Selecione o tipo do seu negócio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saude">Saúde & Bem-estar</SelectItem>
                          <SelectItem value="beleza">Beleza & Estética</SelectItem>
                          <SelectItem value="advocacia">Advocacia & Consultoria</SelectItem>
                          <SelectItem value="alimentacao">Alimentação & Restaurante</SelectItem>
                          <SelectItem value="fitness">Fitness & Personal</SelectItem>
                          <SelectItem value="educacao">Educação & Cursos</SelectItem>
                          <SelectItem value="servicos">Serviços Gerais</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="objective" className="text-gray-700 font-medium">
                        Qual seu principal objetivo de negócio?
                      </Label>
                      <Textarea
                        id="objective"
                        placeholder="Ex: Quero receber mais contatos pelo WhatsApp e aparecer no Google..."
                        value={formData.objective}
                        onChange={(e) => handleChange('objective', e.target.value)}
                        className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white h-14 text-lg font-semibold rounded-xl shadow-lg shadow-blue-700/25"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar e Falar no WhatsApp
                        </>
                      )}
                    </Button>

                    <p className="text-center text-sm text-gray-500 font-bold">
                      *Ao enviar, você concorda com nossa política de privacidade.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}