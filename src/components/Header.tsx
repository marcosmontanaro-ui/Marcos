import React, { useState } from 'react';
import { 
  BarChart3, 
  Presentation, 
  Printer, 
  Share2, 
  Sparkles, 
  FileText, 
  Layers, 
  Check,
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  activeView: 'report' | 'presentation' | 'action-plan';
  setActiveView: (view: 'report' | 'presentation' | 'action-plan') => void;
  onOpenPresentation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  onOpenPresentation,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    const summaryText = `📊 RESULTADOS DE ENCUESTA (114 Respuestas)
• Top 1: Uso del celular/pantallas (87 respuestas - 76.3%)
• Top 2: Temor al fracaso (83 respuestas - 72.8%)
• Top 3: No saber la voluntad de Dios para el futuro (75 respuestas - 65.8%)
• Alerta Crítica Varones: Pureza / Pornografía (#3 general en varones con 61.4%)
• Demografía: 70 Mujeres (61.4%), 44 Varones (38.6%) | 47% 14-17 años, 36% 18-25 años, 17% 26+ años.`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-3.5 gap-4">
          {/* Brand / Title */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-sm ring-2 ring-slate-800/10">
                <BarChart3 className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-slate-900 tracking-tight">
                    Resultados de Encuesta
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                    N = 114
                  </span>
                </div>
                <p className="text-xs text-slate-500 hidden sm:block">
                  Diagnóstico, datos cualitativos y plan de acción pastoral
                </p>
              </div>
            </div>

            {/* Mobile quick action */}
            <button
              onClick={onOpenPresentation}
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg shadow-xs hover:bg-indigo-700"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Diapositivas</span>
            </button>
          </div>

          {/* Navigation View Tabs */}
          <nav className="flex items-center p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 text-xs font-medium text-slate-600 w-full md:w-auto justify-center">
            <button
              onClick={() => setActiveView('report')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all ${
                activeView === 'report'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-slate-700" />
              <span>Informe Completo</span>
            </button>

            <button
              onClick={() => setActiveView('action-plan')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all ${
                activeView === 'action-plan'
                  ? 'bg-white text-indigo-700 font-semibold shadow-xs'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>Plan de Acción</span>
            </button>

            <button
              onClick={onOpenPresentation}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-indigo-900 hover:bg-indigo-50 font-medium transition-all"
            >
              <Presentation className="w-3.5 h-3.5 text-indigo-600" />
              <span>Modo Diapositivas</span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-2xs"
              title="Copiar resumen ejecutivo al portapapeles"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copiar Resumen</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-2xs"
              title="Imprimir o guardar como PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Imprimir / PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
