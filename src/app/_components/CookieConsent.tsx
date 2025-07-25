'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import getConfig from './CookieConsentConfig';
import './CookieConsent.css';

const CookieConsentComponent = () => {
  useEffect(() => {
    CookieConsent.run(getConfig());
  }, []);

  return (
      <div>
      </div>
  );
};

export default CookieConsentComponent;