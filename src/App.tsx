/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Terminal, Layers } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between font-sans selection:bg-neutral-800">
      {/* Header */}
      <header className="border-b border-neutral-800/80 px-6 py-4 flex items-center justify-between backdrop-blur-md sticky top-0 z-10 bg-neutral-950/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700/60 shadow-inner">
            <Sparkles className="w-4 h-4 text-neutral-300" />
          </div>
          <span className="font-semibold tracking-tight text-neutral-200 text-sm">
            AI Studio App
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
            Environment Ready
          </span>
        </div>
      </header>

      {/* Main Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center max-w-3xl mx-auto w-full">
        <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-8 shadow-sm">
          <Terminal className="w-6 h-6 text-neutral-400" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100 mb-4">
          Ready to build your application
        </h1>

        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-normal">
          The workspace has been initialized and is ready. Tell me what you'd like to create, build, or fix, and I will implement it for you.
        </p>

        {/* Quick prompt ideas or info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left">
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-1">
              <Layers className="w-3.5 h-3.5" />
              Full Stack & Frontend
            </div>
            <p className="text-sm text-neutral-300">
              Interactive dashboards, data visualizers, calculators, forms, and utilities.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              AI & Integrations
            </div>
            <p className="text-sm text-neutral-300">
              Gemini AI intelligence, cloud databases, authentication, and custom APIs.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 px-6 py-4 text-center text-xs text-neutral-500">
        Google AI Studio &bull; TypeScript &bull; Tailwind CSS
      </footer>
    </div>
  );
}

