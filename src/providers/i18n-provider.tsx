import { useTranslation } from "react-i18next";
import type { I18nProvider } from "@refinedev/core";
import "@/i18n";

export const useI18nProvider = (): I18nProvider => {
  const { t, i18n } = useTranslation();

  return {
    translate: (key: string, options?: any, defaultMessage?: string) => {
      // In some cases key can be an object from Refine internal components
      if (typeof key !== "string") return defaultMessage || "";
      
      return t(key, options) || defaultMessage || key;
    },
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };
};
