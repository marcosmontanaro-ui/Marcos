import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  Tv, 
  Sparkles, 
  Flame, 
  Compass, 
  CheckCircle2, 
  Quote, 
  Info,
  ChevronRight
} from 'lucide-react';
import { QUALITATIVE_Q8 } from '../data/surveyData';

export const ExecutiveSummary: React.FC = () => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState<number | null>(null);

  return (
    <section id="resumen" className="space-y-6">
      {/* 1. ANÁLISIS CUALITATIVO Q8: EL ELEFANTE EN LA HABITACIÓN */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-purple-100 shadow-sm">
        <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-purple-500 to-indigo-600"></div>
        <div className="p-6 sm:p-8 pl-8 sm:pl-10">
          <div className="flex items-center gap-2 text-purple-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-purple-600" />
            1. Análisis Cualitativo
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-1">
            "El Elefante en la Habitación" (Pregunta Q8)
          </h3>
          <p className="text-slate-600 text-sm italic mb-6">
            Ante la consigna: <span className="font-semibold text-purple-900">"Si tuvieras libertad total de irte y volver sin ser juzgado/a, ¿qué harías?"</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Fidelidad */}
            <div className="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200/80 shadow-2xs hover:border-emerald-300 transition-colors">
              <div>
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fidelidad y Pertenencia</span>
                </div>
                <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 mb-2.5">
                  &gt;60% de las respuestas
                </span>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Más del <strong>60% de las respuestas</strong> afirman que <em>"No se irían"</em> o <em>"Nunca se apartarían"</em>. Demuestra que, a pesar de las presiones, hay un fuerte arraigo espiritual y amor por la iglesia base.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100/80 text-[11px] text-emerald-900/80 italic">
                "No me iría, este es mi lugar y mi familia"
              </div>
            </div>

            {/* Ocio y Entretenimiento */}
            <div className="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-b from-amber-50/50 to-white border border-amber-200/80 shadow-2xs hover:border-amber-300 transition-colors">
              <div>
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
                  <Tv className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Ocio y Entretenimiento</span>
                </div>
                <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 mb-2.5">
                  Patrón recurrente
                </span>
                <p className="text-slate-700 text-xs leading-relaxed">
                  El segundo patrón tiene que ver con actividades recreativas comunes: <em>"Ir a la cancha", "recitales y conciertos", "ir al cine" o "hacer deportes"</em> sin sentir culpa o señalamiento de otros.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-100/80 text-[11px] text-amber-900/80 italic">
                "Disfrutar de hobbies y fútbol sin ser juzgado"
              </div>
            </div>

            {/* Vida Social Nocturna */}
            <div className="flex flex-col justify-between p-5 rounded-xl bg-gradient-to-b from-rose-50/50 to-white border border-rose-200/80 shadow-2xs hover:border-rose-300 transition-colors">
              <div>
                <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-2">
                  <Flame className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Vida Social Nocturna</span>
                </div>
                <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 mb-2.5">
                  Minoría sincera
                </span>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Una minoría muy sincera expresó deseos de experimentar el mundo: <em>"Salir de fiesta", "ir a bailar", "tomar algo (vino/whisky)"</em> o dar rienda suelta a inquietudes morales reprimidas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-rose-100/80 text-[11px] text-rose-900/80 italic">
                "Salir de noche y bailar sin prejuicios"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ALERTAS CRÍTICAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Alerta 1: Varones y Pureza */}
        <div className="rounded-2xl bg-rose-50/80 border border-rose-200 p-6 shadow-2xs transition-all hover:bg-rose-50">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="p-1.5 rounded-lg bg-rose-600 text-white shrink-0 shadow-xs">
              <AlertTriangle className="w-4 h-4" />
            </span>
            <h4 className="text-base font-bold text-rose-950">
              Alerta Crítica 1: Varones y Pureza
            </h4>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Existe un <strong>salto abrupto en las luchas con la pornografía y tentaciones sexuales</strong> desde el inicio de la adolescencia (puesto <strong>#2 indiscutido en varones de 14 a 25 años</strong>, con 61.4% de menciones entre varones).
          </p>
          <div className="p-3 rounded-xl bg-white border border-rose-200/80 text-xs text-rose-900 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0"></span>
            <strong>Intervención urgente:</strong> Crear grupos pequeños cerrados, sinceros y confidenciales de rendición de cuentas.
          </div>
        </div>

        {/* Alerta 2: Jóvenes y el Fracaso */}
        <div className="rounded-2xl bg-amber-50/80 border border-amber-200 p-6 shadow-2xs transition-all hover:bg-amber-50">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="p-1.5 rounded-lg bg-amber-600 text-white shrink-0 shadow-xs">
              <AlertTriangle className="w-4 h-4" />
            </span>
            <h4 className="text-base font-bold text-amber-950">
              Alerta Crítica 2: Jóvenes y el Fracaso
            </h4>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            El <strong>"Temor al fracaso o a equivocarme"</strong> superó ampliamente a problemáticas clásicas (72.8% total). Esto, sumado al miedo por no saber "la voluntad de Dios" (65.8%), indica <strong>altos niveles de ansiedad y presión</strong> del entorno.
          </p>
          <div className="p-3 rounded-xl bg-white border border-amber-200/80 text-xs text-amber-900 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0"></span>
            <strong>Intervención urgente:</strong> Redefinir la teología del éxito, la gracia y el acompañamiento en la toma de decisiones.
          </div>
        </div>
      </div>
    </section>
  );
};
