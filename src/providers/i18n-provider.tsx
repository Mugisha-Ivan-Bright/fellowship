import { useTranslation } from "react-i18next";
import type { I18nProvider } from "@refinedev/core";
import "@/i18n";

export const useI18nProvider = (): I18nProvider => {
  const { t, i18n } = useTranslation();

  return {
    translate: (key: string, options?: any, defaultMessage?: string) => {
      // In some cases key can be an object from Refine internal components
      const translated = t(key, options);
      // If translation is missing, `t` returns the key itself (e.g. "nav.dashboard").
      // In that case prefer the provided defaultMessage when available.
      if (typeof translated === "string" && translated !== key) return translated;
      return defaultMessage || (typeof key === "string" ? key : "");
    },
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };
};
