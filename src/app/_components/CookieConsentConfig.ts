// Extend the Window interface
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

import type { CookieConsentConfig, CookieValue } from 'vanilla-cookieconsent';

const getConfig = (): CookieConsentConfig => {
  const config: CookieConsentConfig = {
    cookie: {
      name: 'cookie_consent',
      path: '/',
      domain: 'clinipharma.cz',
      expiresAfterDays: 365,
    },

    onFirstConsent: ({ cookie }: { cookie: CookieValue }) => {
      console.log('onFirstConsent fired', cookie);
    },

    onConsent: ({ cookie }: { cookie: CookieValue }) => {
      console.log('onConsent fired!', cookie);

      if (cookie.categories?.includes('analytics')) {
        window.gtag('js', new Date());
        window.gtag('config', 'G-xxxxxxxxxx');
      }
    },

    onChange: ({ cookie }: { cookie: CookieValue }) => {
      console.log('onChange fired!', cookie);

      if (!cookie.categories?.includes('analytics')) {
        document.cookie = '_ga=; Max-Age=0; path=/';
        document.cookie = '_gid=; Max-Age=0; path=/';
      }
    },

    onModalReady: ({ modalName }: { modalName: string }) => {
      console.log('ready:', modalName);
    },

    onModalShow: ({ modalName }: { modalName: string }) => {
      console.log('visible:', modalName);
    },

    onModalHide: ({ modalName }: { modalName: string }) => {
      console.log('hidden:', modalName);
    },

    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'bottom left',
        equalWeightButtons: true,
        flipButtons: false,
      },
      preferencesModal: {
        layout: 'box',
        equalWeightButtons: false,
        flipButtons: false,
      },
    },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {
        autoClear: {
          cookies: [
            { name: /^_ga/ },
            { name: '_gid' },
          ],
        },
      },
    },

    language: {
      default: 'cs',
      translations: {
        cs: {
          consentModal: {
            title: 'Používáme cookies',
            description:
                'Naše webová stránka používá soubory cookies, abychom vám zajistili co nejlepší uživatelský zážitek. Kliknutím na „Přijmout všechny cookies“ souhlasíte s jejich používáním pro účely analýzy a nezbytné funkce webu.',
            acceptAllBtn: 'Přijmout vše',
            acceptNecessaryBtn: 'Odmítnout vše',
            showPreferencesBtn: 'Spravovat preference',
            footer: `
              <a href='/zpracovani-osobnich-udaju/' target='_blank'>Zásady ochrany osobních údajů</a>
            `,
          },
          preferencesModal: {
            title: 'Spravovat nastavení cookies',
            acceptAllBtn: 'Přijmout vše',
            acceptNecessaryBtn: 'Odmítnout vše',
            savePreferencesBtn: 'Přijmout aktuální výběr',
            closeIconLabel: 'Zavřít okno',
            sections: [
              {
                title: 'Využití cookies',
                description: `Naše webová stránka používá soubory cookies, abychom vám zajistili co nejlepší uživatelský zážitek. Díky nim můžeme personalizovat obsah, zlepšovat funkčnost webu a analyzovat jeho návštěvnost. Kliknutím na „Přijmout všechny cookies“ souhlasíte s jejich používáním pro účely analýzy a nezbytné funkce webu.`,
              },
              {
                title: 'Nezbytné cookies <span class="pm__badge">Vždy povoleno</span>',
                description: 'Tyto cookies jsou nutné pro správné fungování webu. Bez nich by některé funkce nefungovaly správně ',
                linkedCategory: 'necessary',
              },
              {
                title: 'Analytické cookies',
                description: 'Sledují, jak návštěvníci používají náš web. Získané údaje nám pomáhají pochopit, jak web zlepšit a optimalizovat tak, aby vyhovoval vašim potřebám.',
                linkedCategory: 'analytics',
              },
              {
                title: 'Více informací',
                description: 'Máte-li jakékoli dotazy týkající se našich zásad používání cookies, <a href="/kontakt/">kontaktujte nás</a>.',
              },
            ],
          },
        },
      },
    },
  };

  return config;
};

export default getConfig;