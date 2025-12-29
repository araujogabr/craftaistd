"use client"
import React from 'react';
import { MessageCircle, Mail, Instagram, Linkedin, Facebook } from "lucide-react";
import CraftIALogo from "./CraftIALogo";

export default function FooterSection() {
  const whatsappLink = "https://wa.me/5592996074212";
  
  return (
    <footer className="bg-blue-950 text-white relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
                            <CraftIALogo size={48} />
                            <span className="text-2xl font-bold">CraftAI</span>
                          </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Criamos landing pages profissionais para pequenas empresas 
              que querem vender mais e conquistar novos clientes todos os dias.
            </p>
            <div className="flex gap-4">
              <a 
                target="_blank" 
                href="https://www.instagram.com/craftaistd?igsh=dHJ0MW03enVocnZi" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              {/* <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/craftaistd?igsh=dHJ0MW03enVocnZi" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  (92) 99607-4212
                </a>
              </li>
              <li>
                <a 
                  href="mailto:comercial@craftaistd.com?subject=%5BSOLICITA%C3%87%C3%83O%20DE%20OR%C3%87AMENTO%20%7C%20Landing%20Page%5D&body=Ol%C3%A1%2C%20tudo%20bem%3F%0D%0A%0D%0AEstou%20interessado%20em%20desenvolver%20uma%20Landing%20Page%20profissional%20para%20o%20meu%20neg%C3%B3cio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%0D%0A%0D%0ASeria%20poss%C3%ADvel%20me%20informar%20sobre%3A%0D%0A- Pre%C3%A7os%20e%20planos%0D%0A- Prazo%20de%20entrega%0D%0A- O%20que%20est%C3%A1%20incluso%20no%20projeto%0D%0A%0D%0AJ%C3%A1%20tenho%20uma%20ideia%20de%20conte%C3%BAdo%20e%20p%C3%BAblico%20alvo.%20Podemos%20conversar%20para%20mais%20detalhes%3F%0D%0A%0D%0AAguardo%20o%20retorno.%0D%0A%0D%0AObrigado%20%21"
                  target='_blank'
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  comercial@craftaistd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>© 2025 CraftAI. Todos os direitos reservados.</p>
              {/* <p className="mt-1">CNPJ: 00.000.000/0001-00</p> */}
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}