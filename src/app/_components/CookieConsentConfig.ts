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
      domain: 'clinipharma.eu',
      expiresAfterDays: 365,
    },

    onFirstConsent: ({ cookie }: { cookie: CookieValue }) => {
      console.log('onFirstConsent fired', cookie);
    },

    onConsent: ({ cookie }: { cookie: CookieValue }) => {
      console.log('onConsent fired!', cookie);

      if (cookie.categories?.includes('analytics')) {
        window.gtag('js', new Date());
        window.gtag('config', 'G-GFXH04LNFT');
      }
    },

    onChange: ({ cookie }: { cookie: CookieValue }) => {
      console.log('onChange fired!', cookie);

      if (!cookie.categories?.includes('analytics')) {
        document.cookie = '_ga=; Max-Age=0; path=/';
        document.cookie = '_gid=; Max-Age=0; path=/';
      }
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
      default: 'en',
      translations: {
        en: {
          consentModal: {
            title: 'We use cookies',
            description:
                  'Our website uses cookies to ensure you get the best possible user experience. By clicking “Accept all cookies,” you agree to their use for analytics and essential site functions.',
            acceptAllBtn: 'Accept All',
            acceptNecessaryBtn: 'Deny All',
            showPreferencesBtn: 'Manage preferences',
            footer: `
              <a href='/personal-data-processing/' target='_blank'>Personal Data Processing</a>
            `,
          },
          preferencesModal: {
            title: 'Manage cookies settings',
            acceptAllBtn: 'Accept All',
            acceptNecessaryBtn: 'Deny All',
            savePreferencesBtn: 'Accept current selection',
            closeIconLabel: 'Close window',
            sections: [
              {
                title: 'Use of Cookies',
                description: `Our website uses cookies to ensure you get the best user experience. They allow us to personalize content, improve site functionality, and analyze traffic. By clicking “Accept all cookies,” you agree to their use for analytics and essential site functions.`,
              },
              {
                title: 'Necessary Cookies <span class="pm__badge">Always enabled</span>',
                description: 'These cookies are essential for the proper functioning of the website. Without them, some features would not work correctly.',
                linkedCategory: 'necessary',
              },
              {
                title: 'Analytics Cookies',
                description: 'Track how visitors use our website. The data helps us understand how to improve and optimize the site to better meet your needs.',
                linkedCategory: 'analytics',
              },
              {
                title: 'More Information',
                description: 'If you have any questions about our cookie policy, <a href="/#contact">contact us</a>.',
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