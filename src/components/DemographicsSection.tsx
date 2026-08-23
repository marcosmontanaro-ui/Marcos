import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  Layers, 
  PieChart as PieIcon, 
  Activity,
  Percent,
  Info
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SURVEY_STATS } from '../data/surveyData';

const SEX_DATA = [
  { name: 'Mujeres', value: 70, percentage: 61.4, color: '#E67E22' },
  { name: 'Varones', value: 44, percentage: 38.6, color: '#2980B9' },
];

const AGE_DATA = [
  { name: '14 a 17 años', value: 54, percentage: 47.4, color: '#27AE60' },
  { name: '18 a 25 años', value: 41, percentage: 36.0, color: '#F39C12' },
  { name: '26 años en adelante', value: 19, percentage: 16.6, color: '#8E44AD' },
];

export const DemographicsSection: React.FC = () => {
  const [selectedSexIndex, setSelectedSexIndex] = useState<number | null>(null);
  const [selectedAgeIndex, setSelectedAgeIndex] = useState<number | null>(null);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 text-white p-2.5 rounded-lg shadow-lg border border-slate-700 text-xs">
          <p className="font-semibold">{data.name}</p>
          <p className="text-slate-300">
            Respuestas: <strong className="text-white">{data.value}</strong> ({data.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="demografia" className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold">
              3
            </span>
            Demografía de la Encuesta
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Muestra representativa de la congregación dividida por sexo biológico y grupos de edad
          </p>
        </div>
      </div>

      {/* STATS 4-CARD GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Total Encuestados */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 shadow-sm border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-300">Muestra Total</span>
            <Users className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1">
            {SURVEY_STATS.totalRespondents}
          </div>
          <div className="text-xs text-slate-400 font-medium">Total Encuestados</div>
        </div>

        {/* Frentes de Conflicto */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 text-white p-5 shadow-sm border border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-300">Variables Medidas</span>
            <Layers className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1">
            {SURVEY_STATS.totalConflictAreas}
          </div>
          <div className="text-xs text-slate-400 font-medium">Frentes de Conflicto Totales</div>
        </div>

        {/* Mujeres */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900/90 to-amber-950 text-white p-5 shadow-sm border border-amber-800/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-amber-200">Segmento Femenino</span>
            <span className="text-xs font-bold text-amber-300 bg-amber-900/60 px-2 py-0.5 rounded-full border border-amber-700/50">
              61.4%
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-amber-100 mb-1">
            {SURVEY_STATS.womenCount}
          </div>
          <div className="text-xs text-amber-200/90 font-medium">Mujeres</div>
        </div>

        {/* Varones */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-900/90 to-sky-950 text-white p-5 shadow-sm border border-sky-800/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-sky-200">Segmento Masculino</span>
            <span className="text-xs font-bold text-sky-300 bg-sky-900/60 px-2 py-0.5 rounded-full border border-sky-700/50">
              38.6%
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sky-100 mb-1">
            {SURVEY_STATS.menCount}
          </div>
          <div className="text-xs text-sky-200/90 font-medium">Varones</div>
        </div>
      </div>

      {/* 2 DEMOGRAPHIC CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sex Distribution Chart */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-bold text-slate-900">
              Distribución por Sexo
            </h3>
            <span className="text-xs font-medium text-slate-500">114 personas</span>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Mayoría femenina (61.4%) frente a un 38.6% de participación masculina.
          </p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={SEX_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={3}
                  dataKey="value"
                  onMouseEnter={(_, index) => setSelectedSexIndex(index)}
                  onMouseLeave={() => setSelectedSexIndex(null)}
                >
                  {SEX_DATA.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      stroke="#fff" 
                      strokeWidth={2}
                      className="cursor-pointer transition-opacity"
                      opacity={selectedSexIndex === null || selectedSexIndex === index ? 1 : 0.6}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  formatter={(value, entry: any) => (
                    <span className="text-xs font-medium text-slate-700">
                      {value} ({entry.payload.percentage}%)
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 text-center text-xs">
            <div className="p-2 rounded-lg bg-amber-50/60 border border-amber-100">
              <span className="font-bold text-amber-900">70 Mujeres</span>
              <div className="text-[11px] text-amber-700">61.4% de la muestra</div>
            </div>
            <div className="p-2 rounded-lg bg-sky-50/60 border border-sky-100">
              <span className="font-bold text-sky-900">44 Varones</span>
              <div className="text-[11px] text-sky-700">38.6% de la muestra</div>
            </div>
          </div>
        </div>

        {/* Age Distribution Chart */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-bold text-slate-900">
              Distribución por Edad
            </h3>
            <span className="text-xs font-medium text-slate-500">3 Grupos etarios</span>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Casi la mitad son adolescentes (47.4%), seguidos por jóvenes de 18 a 25 años (36.0%).
          </p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={AGE_DATA}
                  cx="50%"
                  cy="50%"
                  outerRadius={95}
                  dataKey="value"
                  onMouseEnter={(_, index) => setSelectedAgeIndex(index)}
                  onMouseLeave={() => setSelectedAgeIndex(null)}
                >
                  {AGE_DATA.map((entry, index) => (
                    <Cell 
                      key={`cell-age-${index}`} 
                      fill={entry.color} 
                      stroke="#fff" 
                      strokeWidth={2}
                      className="cursor-pointer transition-opacity"
                      opacity={selectedAgeIndex === null || selectedAgeIndex === index ? 1 : 0.6}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  formatter={(value, entry: any) => (
                    <span className="text-xs font-medium text-slate-700">
                      {value} ({entry.payload.percentage}%)
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-100 text-center text-xs">
            <div className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-100">
              <span className="font-bold text-emerald-900">54 Jóvenes</span>
              <div className="text-[10px] text-emerald-700">14-17 (47.4%)</div>
            </div>
            <div className="p-2 rounded-lg bg-amber-50/60 border border-amber-100">
              <span className="font-bold text-amber-900">41 Jóvenes</span>
              <div className="text-[10px] text-amber-700">18-25 (36.0%)</div>
            </div>
            <div className="p-2 rounded-lg bg-purple-50/60 border border-purple-100">
              <span className="font-bold text-purple-900">19 Adultos</span>
              <div className="text-[10px] text-purple-700">26+ (16.6%)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
