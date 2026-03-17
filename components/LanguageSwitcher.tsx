import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLanguageChange('ko')}
        className={`px-3 py-1 text-sm font-bold rounded-md transition-colors ${
          language === 'ko'
            ? 'bg-russia-blue text-white'
            : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
        }`}
      >
        KO
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 text-sm font-bold rounded-md transition-colors ${
          language === 'en'
            ? 'bg-russia-blue text-white'
            : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
