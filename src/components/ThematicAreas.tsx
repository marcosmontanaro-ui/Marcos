import React, { useState } from 'react';
import { 
  Users, 
  Lock, 
  Smartphone, 
  HeartHandshake, 
  Compass, 
  BookOpen, 
  Info,
  CheckCircle,
  BarChart3
} from 'lucide-react';
import { THEMATIC_AREAS } from '../data/surveyData';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-4 h-4 text-sky-600" />,
  Lock: <Lock className="w-4 h-4 text-purple-600" />,
  Smartphone: <Smartphone className="w-4 h-4 text-emerald-600" />,
  HeartHandshake: <HeartHandshake className="w-4 h-4 text-rose-600" />,
  Compass: <Compass className="w-4 h-4 text-amber-600" />,
  BookOpen: <BookOpen className="w-4 h-4 text-indigo-600" />,
};

export const ThematicAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <section id="areas" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold">
              6
            </span>
            Desglose Específico: Top 3 de cada Área Temática
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Las 3 opciones más votadas dentro de cada bloque de preguntas del cuestionario (Q2 a Q7)
          </p>
        </div>
      </div>

      {/* 6 THEMATIC AREA CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {THEMATIC_AREAS.map((area) => {
          return (
            <div
              key={area.id}
              className="rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              style={{ borderTop: `4px solid ${area.color}` }}
            >
              <div className="p-5">
                {/* Header of card */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-100">
                      {iconMap[area.icon] || <BarChart3 className="w-4 h-4 text-slate-600" />}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {area.code}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    3 Opciones
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1" style={{ color: area.color }}>
                  {area.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                  {area.description}
                </p>

                {/* Items List */}
                <ol className="space-y-3">
                  {area.items.map((item, idx) => {
                    return (
                      <li 
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs flex flex-col gap-1.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-medium text-slate-800 leading-snug">
                            {item.text}
                          </span>
                          <span 
                            className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-white font-bold text-[11px] shrink-0"
                            style={{ backgroundColor: area.color }}
                          >
                            {item.count}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${(item.count / 114) * 100}%`,
                              backgroundColor: area.color
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-600 font-medium">
                          <span>{item.percentage}% del total</span>
                          <span>{item.count} / 114</span>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Area Card Footer */}
              <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Total encuestados: 114</span>
                <span className="font-semibold text-slate-700">
                  {Math.round(area.items.reduce((acc, curr) => acc + curr.count, 0) / area.items.length)} prom.
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
