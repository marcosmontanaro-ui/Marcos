/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Layers, 
  Presentation, 
  Download, 
  Share2, 
  ArrowUp, 
  Check, 
  Info,
  Calendar,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Header } from './components/Header';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { DemographicsSection } from './components/DemographicsSection';
import { TransversalTop10 } from './components/TransversalTop10';
import { GenderComparison } from './components/GenderComparison';
import { ThematicAreas } from './components/ThematicAreas';
import { ActionPlanSection } from './components/ActionPlanSection';
import { PresentationMode } from './components/PresentationMode';

export default function App() {
  const [activeView, setActiveView] = useState<'report' | 'presentation' | 'action-plan'>('report');
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navSections = [
    { id: 'resumen', label: '1. Titular Ejecutivo & Q8' },
    { id: 'demografia', label: '2. Demografía (N=114)' },
    { id: 'top10', label: '3. Top 10 General' },
    { id: 'comparativa', label: '4. Mujeres vs Varones' },
    { id: 'areas', label: '5. Áreas Temáticas (Q2-Q7)' },
    { id: 'plan-accion', label: '6. Plan de Acción por Segmento' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Presentation Mode Overlay */}
      <PresentationMode 
        isOpen={isPresentationOpen} 
        onClose={() => setIsPresentationOpen(false)} 
      />

      {/* Main App Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenPresentation={() => setIsPresentationOpen(true)}
      />

      {/* Quick Section Anchor Sub-nav (only in full report mode) */}
      {activeView === 'report' && (
        <div className="bg-white/80 backdrop-blur-xs border-b border-slate-200/80 sticky top-[61px] z-30 hidden md:block print:hidden shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1 py-2 overflow-x-auto no-scrollbar text-xs font-medium text-slate-600">
              <span className="text-slate-400 mr-2 shrink-0 flex items-center gap-1">
                <span>Saltar a:</span>
              </span>
              {navSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="px-2.5 py-1 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0"
                >
                  {sec.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Body Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-12">
        {/* Title Hero Block */}
        <div className="text-center max-w-3xl mx-auto space-y-2 pt-2 pb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold border border-sky-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Informe Pastoral y Pedagógico 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            📊 Presentación Final - Resultados de Encuesta
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Análisis integral de 114 respuestas: Diagnóstico demográfico, datos cualitativos, comparativas y plan de acción ministerial.
          </p>
        </div>

        {/* Dynamic Views */}
        {activeView === 'report' ? (
          <div className="space-y-14">
            <ExecutiveSummary />
            <DemographicsSection />
            <TransversalTop10 />
            <GenderComparison />
            <ThematicAreas />
            <ActionPlanSection />
          </div>
        ) : (
          <div className="space-y-10">
            <div className="p-5 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-indigo-950 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-base">Vista Enfocada: Plan de Acción por Segmento</h3>
                <p className="text-xs text-indigo-800">
                  Consulte las líneas pedagógicas y espirituales recomendadas según cada grupo de edad y sexo.
                </p>
              </div>
              <button
                onClick={() => setActiveView('report')}
                className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors shrink-0 cursor-pointer"
              >
                Volver al Informe Completo
              </button>
            </div>
            <ActionPlanSection />
          </div>
        )}
      </main>

      {/* Floating Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 hover:scale-105 transition-all z-40 print:hidden cursor-pointer"
          title="Volver al inicio"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 sm:px-6 lg:px-8 mt-16 text-center text-xs text-slate-500 space-y-2 print:border-t-2">
        <div className="flex items-center justify-center gap-2 font-medium text-slate-700">
          <BarChart3 className="w-4 h-4 text-sky-600" />
          <span>Presentación Final - Resultados de Encuesta (114 Respuestas)</span>
        </div>
        <p className="text-slate-400 max-w-md mx-auto">
          Herramienta de análisis ministerial para liderazgo, discipulado y mentoría de jóvenes y adultos.
        </p>
      </footer>
    </div>
  );
}
