import React, { useState } from 'react';
import { 
  Target, 
  Filter, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Tag, 
  ChevronRight,
  Lightbulb,
  Heart,
  Users
} from 'lucide-react';
import { SEGMENT_PLANS } from '../data/surveyData';

export const ActionPlanSection: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');

  const filteredSegments = SEGMENT_PLANS.filter((seg) => {
    if (selectedAge !== 'all' && seg.ageRange !== selectedAge) return false;
    if (selectedGender !== 'all' && seg.gender !== selectedGender) return false;
    return true;
  });

  return (
    <section id="plan-accion" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold">
              7
            </span>
            Top 5 por Segmento y Líneas de Acción Sugeridas
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Estrategias pedagógicas y pastorales focalizadas para líderes de jóvenes, adolescentes y adultos
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Age Filter */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
            <span className="text-slate-400 pl-1 font-medium hidden sm:inline">Edad:</span>
            <button
              onClick={() => setSelectedAge('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                selectedAge === 'all'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setSelectedAge('14 a 17 años')}
              className={`px-2 py-1 rounded-md transition-colors ${
                selectedAge === '14 a 17 años'
                  ? 'bg-white text-emerald-800 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              14-17
            </button>
            <button
              onClick={() => setSelectedAge('18 a 25 años')}
              className={`px-2 py-1 rounded-md transition-colors ${
                selectedAge === '18 a 25 años'
                  ? 'bg-white text-amber-800 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              18-25
            </button>
            <button
              onClick={() => setSelectedAge('26 años en adelante')}
              className={`px-2 py-1 rounded-md transition-colors ${
                selectedAge === '26 años en adelante'
                  ? 'bg-white text-purple-800 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              26+
            </button>
          </div>

          {/* Gender Filter */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
            <button
              onClick={() => setSelectedGender('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                selectedGender === 'all'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ambos
            </button>
            <button
              onClick={() => setSelectedGender('Mujer')}
              className={`px-2 py-1 rounded-md transition-colors ${
                selectedGender === 'Mujer'
                  ? 'bg-white text-amber-800 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              👩 Mujeres
            </button>
            <button
              onClick={() => setSelectedGender('Varon')}
              className={`px-2 py-1 rounded-md transition-colors ${
                selectedGender === 'Varon'
                  ? 'bg-white text-sky-800 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              👨 Varones
            </button>
          </div>
        </div>
      </div>

      {/* 6 SEGMENT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSegments.map((segment) => {
          const isWomen = segment.gender === 'Mujer';

          return (
            <div
              key={segment.id}
              className="rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              style={{
                borderTop: `4px solid ${isWomen ? '#E67E22' : '#2980B9'}`,
              }}
            >
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Segment Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1.5">
                      <span>{isWomen ? '👩' : '👨'}</span>
                      <span>{segment.ageRange}</span>
                    </span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      isWomen 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-sky-100 text-sky-800'
                    }`}>
                      {segment.gender}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                    {segment.title}
                  </h3>

                  {/* Top 5 Problems */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Top 5 Problemáticas
                    </span>
                    <ol className="space-y-2">
                      {segment.topProblems.map((prob, idx) => (
                        <li
                          key={idx}
                          className="flex items-start justify-between gap-2 text-xs text-slate-700 pb-1.5 border-b border-dashed border-slate-100 last:border-none"
                        >
                          <div className="flex items-start gap-2">
                            <span className="text-slate-400 font-semibold shrink-0">
                              {idx + 1}.
                            </span>
                            <span className="leading-snug">{prob.text}</span>
                          </div>
                          <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-white font-bold text-[11px] shrink-0 ${
                            isWomen ? 'bg-amber-500' : 'bg-sky-600'
                          }`}>
                            {prob.count}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Suggested Action Box */}
                <div>
                  <div className="rounded-xl bg-sky-50/80 border border-sky-200/80 p-4 text-xs text-slate-800 space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-sky-950">
                      <Target className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Enfoque sugerido:</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-xs">
                      {segment.actionFocus}
                    </p>
                  </div>

                  {/* Priority Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
                    {segment.keyPriorities.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
