
import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
  const inactiveClass = "px-3 py-1 rounded-md text-sm font-medium text-slate-400 hover:bg-slate-700 hover:text-white transition-colors";
  const activeClass = "px-3 py-1 rounded-md text-sm font-medium bg-indigo-600 text-white";

  return (
    <div className="flex items-center space-x-2 bg-slate-800 p-1 rounded-lg">
      <button
        onClick={() => setLanguage(Language.IT)}
        className={language === Language.IT ? activeClass : inactiveClass}
      >
        IT
      </button>
      <button
        onClick={() => setLanguage(Language.EN)}
        className={language === Language.EN ? activeClass : inactiveClass}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
