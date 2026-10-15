import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Language, Page } from '../types';
import { I18N } from '../i18n/translations';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('id');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const t = useCallback(
    (key: string): string => {
      return I18N[lang][key] || key;
    },
    [lang]
  );

  return (
    <AppContext.Provider value={{ lang, setLang, currentPage, setCurrentPage, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider');
  return context;
};
