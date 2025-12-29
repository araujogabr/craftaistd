"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DownloadLogo() {
  const svgContent = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb"/>
      <stop offset="100%" style="stop-color:#1e40af"/>
    </linearGradient>
  </defs>

  <rect width="200" height="200" rx="32" fill="url(#bgGradient)"/>

  <circle cx="50" cy="60" r="8" fill="white" opacity="0.6"/>
  <circle cx="150" cy="60" r="8" fill="white" opacity="0.6"/>
  <circle cx="50" cy="140" r="8" fill="white" opacity="0.6"/>
  <circle cx="150" cy="140" r="8" fill="white" opacity="0.6"/>

  <line x1="50" y1="60" x2="100" y2="100" stroke="white" stroke-width="3" opacity="0.3"/>
  <line x1="150" y1="60" x2="100" y2="100" stroke="white" stroke-width="3" opacity="0.3"/>
  <line x1="50" y1="140" x2="100" y2="100" stroke="white" stroke-width="3" opacity="0.3"/>
  <line x1="150" y1="140" x2="100" y2="100" stroke="white" stroke-width="3" opacity="0.3"/>

  <path 
    d="M130 60C130 60 110 40 80 50C50 60 40 90 40 100C40 110 50 140 80 150C110 160 130 140 130 140" 
    stroke="white" 
    stroke-width="12" 
    stroke-linecap="round"
    fill="none"
  />

  <circle cx="140" cy="100" r="10" fill="white"/>
  <circle cx="140" cy="100" r="16" stroke="white" stroke-width="3" opacity="0.4"/>
</svg>`;

  const downloadSVG = () => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'craftia-logo.svg';
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPNG = (size: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx!.drawImage(img, 0, 0, size, size);
      const pngUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = `craftia-logo-${size}x${size}.png`;
      a.click();
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">

        {/* VOLTAR */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Download da Logo CraftIA</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex justify-center mb-8">
            <div 
              className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Formatos disponíveis:</h2>

            <Button 
              onClick={downloadSVG}
              className="w-full bg-blue-600 hover:bg-blue-700 py-6"
            >
              <Download className="w-5 h-5 mr-2" />
              Download SVG (Vetorial)
            </Button>

            <div className="grid grid-cols-3 gap-3">
              <Button onClick={() => downloadPNG(256)} variant="outline" className="py-6">
                PNG 256px
              </Button>
              <Button onClick={() => downloadPNG(512)} variant="outline" className="py-6">
                PNG 512px
              </Button>
              <Button onClick={() => downloadPNG(1024)} variant="outline" className="py-6">
                PNG 1024px
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm">
          A logo está em formato vetorial SVG, ideal para qualquer tamanho sem perda de qualidade.
        </p>
      </div>
    </div>
  );
}
