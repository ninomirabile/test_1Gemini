
import React, { useState } from 'react';
import { Language } from './types';
import { content } from './constants/content';
import LanguageSwitcher from './components/LanguageSwitcher';
import CodeBlock from './components/CodeBlock';
import { LightbulbIcon, CheckCircleIcon } from './components/icons';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.IT);
  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {currentContent.title}
          </h1>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </header>

        <main className="space-y-12">
          <p className="text-lg text-slate-400">{currentContent.subtitle}</p>

          {/* Section 1: Generate Apps */}
          <section>
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4 border-b border-slate-700 pb-2">
              {currentContent.generateApps.title}
            </h2>
            <p className="text-slate-400 mb-6">{currentContent.generateApps.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentContent.generateApps.steps.map((step, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    <LightbulbIcon className="w-5 h-5 mr-2 text-amber-400" />
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Build Prompts */}
          <section>
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4 border-b border-slate-700 pb-2">
              {currentContent.buildPrompts.title}
            </h2>
            <p className="text-slate-400 mb-6">{currentContent.buildPrompts.description}</p>
            <div className="space-y-8">
              {currentContent.buildPrompts.principles.map((principle, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                     <CheckCircleIcon className="w-6 h-6 mr-3 text-green-400" />
                    {principle.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{principle.text}</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-red-400 mb-1">{principle.badExample.title}</h4>
                      <CodeBlock code={principle.badExample.code} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-1">{principle.goodExample.title}</h4>
                      <CodeBlock code={principle.goodExample.code} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="text-center text-slate-500 mt-16 pb-8">
          <p>{currentContent.footer}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
