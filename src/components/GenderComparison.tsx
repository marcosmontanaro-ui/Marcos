import React, { useState } from 'react';
import { 
  Users, 
  ArrowRight, 
  Sparkles, 
  AlertCircle, 
  TrendingUp, 
  Check, 
  Info 
} from 'lucide-react';
import { WOMEN_TOP_10, MEN_TOP_10 } from '../data/surveyData';

export const GenderComparison: React.FC = () => {
  const [highlightPurity, setHighlightPurity] = useState(false);

  return (
    <section id="comparativa" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold">
              5
            </span>
            Comparativa Top 10 Problemáticas: Mujeres vs. Varones
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Análisis diferencial de luchas, prioridades y puntos de quiebre entre ambos sexos
          </p>
        </div>

        {/* Quick highlight toggle */}
        <button
          onClick={() => setHighlightPurity(!highlightPurity)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors self-start sm:self-auto ${
            highlightPurity
              ? 'bg-rose-50 border-rose-300 text-rose-800'
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
          <span>{highlightPurity ? 'Mostrando foco Pureza' : 'Destacar Alerta Pureza'}</span>
        </button>
      </div>

      {/* KEY INSIGHT SUMMARY BANNER */}
      <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs sm:text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-white font-semibold">Divergencia Crítica:</strong> Mientras el <strong>celular y el temor al fracaso</strong> lideran en ambos géneros, en los <strong>varones la Pureza / Pornografía salta al puesto #3 (61.4%)</strong>, mientras que en las <strong>mujeres el discernimiento vocacional (#2 - 75.7%)</strong> y la preocupación por la <strong>pareja (#4 - 47.1%)</strong> tienen un peso marcadamente mayor.
          </span>
        </div>
      </div>

      {/* 2 SIDE-BY-SIDE CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* MUJERES CARD */}
        <div className="rounded-2xl bg-white border border-amber-200/90 shadow-xs overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">👩🏽</span>
              <div>
                <h3 className="text-base font-bold tracking-tight">Top 10 Mujeres</h3>
                <span className="text-[11px] text-amber-100 font-medium">
                  Total encuestadas: 70 mujeres (61.4%)
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
              70 Casos
            </span>
          </div>

          {/* List items */}
          <div className="p-4 sm:p-5 flex-1 divide-y divide-slate-100">
            {WOMEN_TOP_10.map((item) => (
              <div 
                key={`w-${item.rank}`}
                className="py-3 flex items-center justify-between gap-3 hover:bg-amber-50/40 rounded-lg px-2 -mx-2 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold shrink-0 mt-0.5">
                    {item.rank}
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-amber-500 text-white font-bold text-xs shadow-2xs">
                    {item.count}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium w-10 text-right hidden sm:inline">
                    {item.pct}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Women Footer summary */}
          <div className="bg-amber-50/60 p-4 border-t border-amber-100 text-xs text-amber-900 flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Fuerte presencia de ansiedad sobre el futuro y presión relacional/familiar.</span>
          </div>
        </div>

        {/* VARONES CARD */}
        <div className="rounded-2xl bg-white border border-sky-200/90 shadow-xs overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">👨🏽</span>
              <div>
                <h3 className="text-base font-bold tracking-tight">Top 10 Varones</h3>
                <span className="text-[11px] text-sky-100 font-medium">
                  Total encuestados: 44 varones (38.6%)
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
              44 Casos
            </span>
          </div>

          {/* List items */}
          <div className="p-4 sm:p-5 flex-1 divide-y divide-slate-100">
            {MEN_TOP_10.map((item) => {
              const isPurity = item.text.includes('Pureza / Moralidad');
              const shouldHighlight = highlightPurity && isPurity;

              return (
                <div 
                  key={`m-${item.rank}`}
                  className={`py-3 flex items-center justify-between gap-3 rounded-lg px-2 -mx-2 transition-all ${
                    shouldHighlight 
                      ? 'bg-rose-100/80 border border-rose-300 ring-2 ring-rose-400/30' 
                      : 'hover:bg-sky-50/40'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5 ${
                      isPurity 
                        ? 'bg-rose-600 text-white' 
                        : 'bg-sky-100 text-sky-800'
                    }`}>
                      {item.rank}
                    </span>
                    <div>
                      <p className={`text-xs sm:text-sm font-medium leading-snug ${
                        isPurity ? 'text-rose-950 font-bold' : 'text-slate-800'
                      }`}>
                        {item.text}
                      </p>
                      {isPurity && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 mt-0.5 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                          🚨 Puesto #3 en varones (61.4%)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-white font-bold text-xs shadow-2xs ${
                      isPurity ? 'bg-rose-600' : 'bg-sky-600'
                    }`}>
                      {item.count}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium w-10 text-right hidden sm:inline">
                      {item.pct}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Men Footer summary */}
          <div className="bg-sky-50/60 p-4 border-t border-sky-100 text-xs text-sky-900 flex items-center gap-2">
            <Info className="w-4 h-4 text-sky-600 shrink-0" />
            <span>Predominio de la batalla con la pureza sexual y sensación de aislamiento/soledad.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
