import { useState, useEffect } from 'react';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
  version: string;
}

const COOKIE_CONSENT_KEY = 'portfolio_cookie_consent';
const COOKIE_CONSENT_VERSION = '1.0';

export const defaultConsent: CookieConsent = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
  preferences: false,
  timestamp: new Date().toISOString(),
  version: COOKIE_CONSENT_VERSION
};

// Cookie utility functions
export const setCookie = (name: string, value: string, days: number = 365) => {
  if (typeof document === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
};

export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const deleteCookie = (name: string) => {
  if (typeof document === 'undefined') return;
  
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// Cookie consent management
export const saveCookieConsent = (consent: CookieConsent) => {
  const consentWithTimestamp = {
    ...consent,
    timestamp: new Date().toISOString(),
    version: COOKIE_CONSENT_VERSION
  };
  
  setCookie(COOKIE_CONSENT_KEY, JSON.stringify(consentWithTimestamp), 365);
  
  // Clean up non-consented cookies
  if (!consent.analytics) {
    // Remove analytics cookies if they exist
    deleteCookie('_ga');
    deleteCookie('_gid');
    deleteCookie('_gat');
  }
  
  if (!consent.marketing) {
    // Remove marketing cookies if they exist
    deleteCookie('_fbp');
    deleteCookie('_fbc');
  }
  
  return consentWithTimestamp;
};

export const getCookieConsent = (): CookieConsent | null => {
  const consent = getCookie(COOKIE_CONSENT_KEY);
  
  if (!consent) return null;
  
  try {
    const parsed = JSON.parse(consent);
    
    // Check if consent is for current version
    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      return null;
    }
    
    return parsed;
  } catch {
    return null;
  }
};

export const hasConsent = (type: keyof Omit<CookieConsent, 'timestamp' | 'version'>): boolean => {
  const consent = getCookieConsent();
  return consent ? consent[type] : false;
};

// React hook for cookie consent
export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const existingConsent = getCookieConsent();
    
    if (existingConsent) {
      setConsent(existingConsent);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    const fullConsent = { ...defaultConsent, ...newConsent };
    const savedConsent = saveCookieConsent(fullConsent);
    setConsent(savedConsent);
    setShowBanner(false);
  };

  const acceptAll = () => {
    updateConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
  };

  const acceptNecessary = () => {
    updateConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
  };

  const revokeConsent = () => {
    deleteCookie(COOKIE_CONSENT_KEY);
    setConsent(null);
    setShowBanner(true);
  };

  return {
    consent,
    showBanner,
    hasConsent: consent !== null,
    updateConsent,
    acceptAll,
    acceptNecessary,
    revokeConsent
  };
}; 