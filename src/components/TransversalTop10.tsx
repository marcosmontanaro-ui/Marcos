import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { 
  Flame, 
  ListFilter, 
  Search, 
  Sparkles, 
  BarChart2, 
  ListOrdered,
  Layers,
  ArrowUpDown
} from 'lucide-react';
import { TRANSVERSAL_TOP_10 } from '../data/surveyData';

export const TransversalTop10: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'chart' | 'list'>('chart');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  // Short label for chart display
  const chartData = TRANSVERSAL_TOP_10.map((item, idx) => {
    let shortName = item.title;
    if (shortName.length > 42) {
      shortName = shortName.substring(0, 40) + '...';
    }
    return {
      rank: item.rank,
      name: shortName,
      fullName: item.title,
      totalVotes: item.totalVotes,
      percentage: item.percentage,
      womenVotes: item.womenVotes,
      menVotes: item.menVotes,
      category: item.category,
      color: idx === 0 ? '#0284C7' : idx < 3 ? '#0EA5E9' : '#38BDF8',
    };
  }).reverse(); // Reverse for horizontal layout so rank 1 is on top

  const filteredItems = TRANSVERSAL_TOP_10.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const CustomChartTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 text-white p-3 rounded-xl shadow-xl border border-slate-700 max-w-sm text-xs space-y-1.5">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5">
            <span className="font-bold text-sky-400">Puesto #{data.rank}</span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
              {data.category}
            </span>
          </div>
          <p className="font-medium text-slate-100 text-xs leading-snug">{data.fullName}</p>
          <div className="pt-1 text-slate-300 flex items-center justify-between">
            <span>Menciones Totales:</span>
            <strong className="text-white text-sm font-bold">{data.totalVotes} de 114 ({data.percentage}%)</strong>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-slate-800 text-[11px]">
            <span className="text-amber-300">👩 {data.womenVotes} Mujeres</span>
            <span className="text-sky-300">👨 {data.menVotes} Varones</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="top10" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold">
              4
            </span>
            Top 10 Problemáticas Generales Agrupadas (Toda la iglesia)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Consolidado general de los 114 encuestados ordenado por frecuencia absoluta de menciones
          </p>
        </div>

        {/* View Switcher and Search */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar problemática..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 w-40 sm:w-48 transition-all"
            />
          </div>

          <div className="flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200">
            <button
              onClick={() => setViewMode('chart')}
              className={`p-1.5 rounded-md text-xs transition-colors ${
                viewMode === 'chart'
                  ? 'bg-white text-sky-700 shadow-2xs font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Ver Gráfico de Barras"
            >
              <BarChart2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md text-xs transition-colors ${
                viewMode === 'list'
                  ? 'bg-white text-sky-700 shadow-2xs font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Ver Lista Detallada"
            >
              <ListOrdered className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* CHART VIEW */}
      {viewMode === 'chart' ? (
        <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-sky-500"></span>
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Menciones Totales de 114 Respuestas
              </span>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Pase el cursor sobre cada barra para ver desglose por sexo
            </span>
          </div>

          <div className="h-[480px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis 
                  type="number" 
                  domain={[0, 100]} 
                  tick={{ fontSize: 11, fill: '#64748B' }} 
                  unit=""
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={210}
                  tick={{ fontSize: 11, fill: '#334155', fontWeight: 500 }}
                />
                <Tooltip content={<CustomChartTooltip />} />
                <Bar 
                  dataKey="totalVotes" 
                  radius={[0, 6, 6, 0]}
                  animationDuration={1000}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`bar-${index}`}
                      fill={index === chartData.length - 1 ? '#0284C7' : '#0EA5E9'}
                      opacity={hoveredBar === null || hoveredBar === index ? 1 : 0.65}
                      onMouseEnter={() => setHoveredBar(index)}
                      onMouseLeave={() => setHoveredBar(null)}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-sky-600"></div>
                <span>Puesto #1 (#87 votos - 76.3%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-sky-400"></div>
                <span>Resto del Top 10</span>
              </div>
            </div>
            <span>Fuente: Encuesta Eclesiástica 114 Casos</span>
          </div>
        </div>
      ) : (
        /* LIST VIEW */
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
          <div className="divide-y divide-slate-100">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                    item.rank === 1 
                      ? 'bg-amber-500 text-white shadow-xs' 
                      : item.rank <= 3 
                      ? 'bg-sky-600 text-white' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {item.rank}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {item.percentage}% de la congregación
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 shrink-0 sm:self-center pl-11 sm:pl-0">
                  <div className="text-right">
                    <div className="text-lg font-extrabold text-slate-900">
                      {item.totalVotes}
                    </div>
                    <div className="text-[11px] text-slate-400">menciones</div>
                  </div>

                  <div className="flex flex-col gap-1 border-l border-slate-200 pl-3 text-[11px]">
                    <span className="text-amber-800 font-medium bg-amber-50 px-1.5 py-0.5 rounded">
                      👩 {item.womenVotes} M
                    </span>
                    <span className="text-sky-800 font-medium bg-sky-50 px-1.5 py-0.5 rounded">
                      👨 {item.menVotes} V
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
