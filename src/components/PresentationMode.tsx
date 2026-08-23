import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  BarChart3, 
  AlertTriangle, 
  ShieldCheck, 
  Users, 
  Smartphone, 
  Compass, 
  Target,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SURVEY_STATS, TRANSVERSAL_TOP_10, WOMEN_TOP_10, MEN_TOP_10, QUALITATIVE_Q8, THEMATIC_AREAS, SEGMENT_PLANS } from '../data/surveyData';

interface PresentationModeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = 8;

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, totalSlides, onClose]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handleFinish = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col justify-between select-none overflow-hidden animate-in fade-in duration-200">
      {/* Presentation Top Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30 font-bold text-xs">
            📊
          </div>
          <div>
            <span className="text-xs font-bold text-slate-200 tracking-tight">
              Presentación Ejecutiva • Resultados de Encuesta (N=114)
            </span>
          </div>
        </div>

        {/* Slide Counter & Controls */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
            Diapositiva {currentSlide + 1} de {totalSlides}
          </span>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Pantalla Completa"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-rose-900/40 hover:border-rose-700/50 transition-colors"
            title="Cerrar presentación (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Presentation Main Slide Canvas */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
        <div className="max-w-5xl w-full mx-auto">
          {/* SLIDE 1: PORTADA & RESUMEN EJECUTIVO */}
          {currentSlide === 0 && (
            <div className="space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Diagnóstico Pastoral y Juvenil
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
                Presentación Final: Resultados de Encuesta
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
                Análisis integral de 114 respuestas: Diagnóstico, datos cualitativos y plan de acción ministerial.
              </p>

              {/* Metrics Summary Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-3xl font-extrabold text-sky-400">114</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Respuestas Totales</div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-3xl font-extrabold text-indigo-400">16</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Frentes de Conflicto</div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-3xl font-extrabold text-emerald-400">6</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Segmentos de Acción</div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: EL ELEFANTE EN LA HABITACIÓN (Q8) */}
          {currentSlide === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-3xl mx-auto mb-6">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  Pregunta Q8 • Análisis Cualitativo
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                  "El Elefante en la Habitación"
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  <em>"Si tuvieras libertad total de irte y volver sin ser juzgado/a, ¿qué harías?"</em>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Fidelidad y Pertenencia</span>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50 inline-block mb-3">
                      &gt;60% de las respuestas
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      La mayoría afirma que <em>"No se irían"</em> o <em>"Nunca se apartarían"</em>. Fuerte amor por la congregación y sentido de pertenencia a pesar de sus batallas.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-300/80 italic">
                    "No me iría, este es mi lugar y mi familia"
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                      <Smartphone className="w-4 h-4" />
                      <span>Ocio y Entretenimiento</span>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/50 inline-block mb-3">
                      Pasatiempos comunes
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      Actividades comunes como <em>"Ir a la cancha", "recitales y recitales", "cine o deportes"</em> sin sentir señalamiento moral o culpa.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-300/80 italic">
                    "Disfrutar de hobbies y fútbol sin ser juzgado"
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-rose-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Vida Social Nocturna</span>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800/50 inline-block mb-3">
                      Minoría sincera
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      Deseos sinceros de experimentar <em>"Salir de fiesta", "ir a bailar", "tomar alcohol"</em> o inquietudes morales no procesadas.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-rose-300/80 italic">
                    "Salir de noche y bailar sin prejuicios"
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 3: ALERTAS CRÍTICAS */}
          {currentSlide === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-3xl mx-auto mb-6">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                  Diagnóstico Urgente
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                  2 Alertas Críticas de Intervención
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/40 shadow-xl space-y-4">
                  <div className="flex items-center gap-3 text-rose-400 font-bold text-lg">
                    <span className="p-2 rounded-xl bg-rose-900/60 text-rose-300 border border-rose-700/50">
                      🚨
                    </span>
                    <h3>Alerta 1: Varones y Pureza</h3>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    Salto abrupto en las luchas con la <strong>pornografía y tentaciones sexuales</strong> desde los 14 años. Es el <strong>puesto #2 indiscutido en varones jóvenes (14-25)</strong> con 61.4% de menciones entre hombres.
                  </p>
                  <div className="p-3.5 rounded-xl bg-rose-900/30 border border-rose-700/50 text-xs text-rose-200">
                    🎯 <strong>Acción urgente:</strong> Grupos pequeños cerrados, sinceros y confidenciales de rendición de cuentas sin culpabilización destructiva.
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-amber-950/40 border border-amber-500/40 shadow-xl space-y-4">
                  <div className="flex items-center gap-3 text-amber-400 font-bold text-lg">
                    <span className="p-2 rounded-xl bg-amber-900/60 text-amber-300 border border-amber-700/50">
                      ⚠️
                    </span>
                    <h3>Alerta 2: Jóvenes y el Fracaso</h3>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    El <strong>"Temor al fracaso o a equivocarme"</strong> es la problemática #2 general (72.8%), sumado al miedo por no saber "la voluntad de Dios" (65.8%). Revela alta ansiedad y autoexigencia asfixiante.
                  </p>
                  <div className="p-3.5 rounded-xl bg-amber-900/30 border border-amber-700/50 text-xs text-amber-200">
                    🎯 <strong>Acción urgente:</strong> Enseñar la teología de la gracia y el descanso; normalizar el aprendizaje a través del error.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 4: DEMOGRAFÍA */}
          {currentSlide === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-3xl mx-auto mb-6">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  Muestra Representativa
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                  Radiografía Demográfica (N = 114)
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 mb-1">114</div>
                  <div className="text-xs text-slate-400 font-medium">Total Encuestados</div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">70</div>
                  <div className="text-xs text-slate-400 font-medium">Mujeres (61.4%)</div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 mb-1">44</div>
                  <div className="text-xs text-slate-400 font-medium">Varones (38.6%)</div>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">16</div>
                  <div className="text-xs text-slate-400 font-medium">Frentes de Conflicto</div>
                </div>
              </div>

              {/* Age segments bar visual */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-300">
                  Distribución por Rango de Edad
                </div>
                <div className="w-full h-4 rounded-full bg-slate-800 flex overflow-hidden">
                  <div style={{ width: '47.4%' }} className="bg-emerald-500 h-full" title="14-17 (47.4%)"></div>
                  <div style={{ width: '36.0%' }} className="bg-amber-500 h-full" title="18-25 (36.0%)"></div>
                  <div style={{ width: '16.6%' }} className="bg-purple-500 h-full" title="26+ (16.6%)"></div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs pt-2">
                  <div className="text-emerald-400 font-medium">
                    🟢 14 a 17 años: <strong>54 personas (47.4%)</strong>
                  </div>
                  <div className="text-amber-400 font-medium">
                    🟡 18 a 25 años: <strong>41 personas (36.0%)</strong>
                  </div>
                  <div className="text-purple-400 font-medium">
                    🟣 26+ años: <strong>19 personas (16.6%)</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 5: TOP 10 GENERAL */}
          {currentSlide === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-3xl mx-auto mb-4">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  Consolidado Transversal
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Top 10 Problemáticas Generales
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {TRANSVERSAL_TOP_10.slice(0, 8).map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${
                        item.rank === 1 ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-300'
                      }`}>
                        #{item.rank}
                      </span>
                      <span className="font-medium text-slate-200 line-clamp-1">{item.title}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-sky-950 text-sky-400 font-bold border border-sky-800/50 shrink-0">
                      {item.totalVotes} ({item.percentage}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 6: COMPARATIVA MUJERES VS VARONES */}
          {currentSlide === 5 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-3xl mx-auto mb-4">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  Diferencias de Género
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Mujeres vs. Varones: Principales Frentes
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/40 space-y-3">
                  <div className="flex items-center justify-between text-amber-400 font-bold text-sm border-b border-slate-800 pb-2">
                    <span>👩 Top Mujeres (N=70)</span>
                    <span className="text-xs text-amber-300 font-normal">Ansiedad y Vocación</span>
                  </div>
                  <ol className="space-y-2 text-xs text-slate-300">
                    <li className="flex justify-between">1. Uso del celular / Pantallas <strong className="text-amber-400">56 (80%)</strong></li>
                    <li className="flex justify-between">2. Voluntad de Dios para futuro <strong className="text-amber-400">53 (76%)</strong></li>
                    <li className="flex justify-between">3. Temor al fracaso <strong className="text-amber-400">53 (76%)</strong></li>
                    <li className="flex justify-between">4. Pareja dentro de la iglesia <strong className="text-amber-400">33 (47%)</strong></li>
                    <li className="flex justify-between">5. Presión de familia / entorno <strong className="text-amber-400">31 (44%)</strong></li>
                  </ol>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-sky-500/40 space-y-3">
                  <div className="flex items-center justify-between text-sky-400 font-bold text-sm border-b border-slate-800 pb-2">
                    <span>👨 Top Varones (N=44)</span>
                    <span className="text-xs text-sky-300 font-normal">Pureza y Soledad</span>
                  </div>
                  <ol className="space-y-2 text-xs text-slate-300">
                    <li className="flex justify-between">1. Uso del celular / Pantallas <strong className="text-sky-400">31 (70%)</strong></li>
                    <li className="flex justify-between">2. Temor al fracaso <strong className="text-sky-400">30 (68%)</strong></li>
                    <li className="flex justify-between bg-rose-950/60 p-1.5 rounded border border-rose-800/60 text-rose-200">
                      <span>3. Pureza / Pornografía</span>
                      <strong className="text-rose-400">27 (61%) 🚨</strong>
                    </li>
                    <li className="flex justify-between">4. Voluntad de Dios para futuro <strong className="text-sky-400">22 (50%)</strong></li>
                    <li className="flex justify-between">5. Ambientes incómodos / salidas <strong className="text-sky-400">18 (41%)</strong></li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 7: ÁREAS TEMÁTICAS Q2-Q7 */}
          {currentSlide === 6 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-3xl mx-auto mb-4">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  Bloques Temáticos
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Desglose por Áreas Temáticas (Q2 a Q7)
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                {THEMATIC_AREAS.map((area) => (
                  <div key={area.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="font-bold text-sky-400 flex items-center justify-between">
                      <span>{area.code} • {area.title}</span>
                    </div>
                    <div className="text-slate-300 text-[11px] leading-snug">
                      Top 1: <strong className="text-white">{area.items[0]?.text}</strong> ({area.items[0]?.count})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 8: PLAN DE ACCIÓN & CONCLUSIÓN */}
          {currentSlide === 7 && (
            <div className="space-y-6 animate-in fade-in duration-300 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                Conclusión y Plan de Acción
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                3 Líneas de Acción Inmediatas
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto mt-6">
                <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-2">
                  <div className="font-bold text-emerald-400 text-sm">1. Grupos de Rendición</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Crear espacios cerrados y confidenciales para varones y adolescentes sobre pureza, sexualidad y vida íntima sin juicio.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-2">
                  <div className="font-bold text-amber-400 text-sm">2. Mentoría Vocacional</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Talleres de discernimiento, alivio de la ansiedad del futuro y pedagogía del error para bajar la presión al fracaso.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-sky-500/30 space-y-2">
                  <div className="font-bold text-sky-400 text-sm">3. Higiene Digital</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Retiros de desconexión, herramientas de autocontrol y uso consciente de pantallas para frenar la dependencia masiva.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleFinish}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-sm shadow-lg hover:from-sky-400 hover:to-indigo-500 transition-all cursor-pointer"
                >
                  Finalizar Presentación 🎉
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Presentation Bottom Navigation Controls */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
        <button
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        {/* Slide Dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlide === idx 
                  ? 'bg-sky-400 w-6' 
                  : 'bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Ir a diapositiva ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            if (currentSlide < totalSlides - 1) {
              setCurrentSlide((prev) => prev + 1);
            } else {
              handleFinish();
            }
          }}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-500 text-xs font-semibold transition-colors shadow-xs"
        >
          <span>{currentSlide === totalSlides - 1 ? 'Finalizar' : 'Siguiente'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
