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
  
  const cookieString = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
  document.cookie = cookieString;
  console.log('🍪 Cookie set:', name);
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
  console.log('🗑️ Cookie deleted:', name);
};

// Cookie consent management
export const saveCookieConsent = (consent: CookieConsent) => {
  const consentWithTimestamp = {
    ...consent,
    timestamp: new Date().toISOString(),
    version: COOKIE_CONSENT_VERSION
  };
  
  console.log('💾 Saving cookie consent:', consentWithTimestamp);
  setCookie(COOKIE_CONSENT_KEY, JSON.stringify(consentWithTimestamp), 365);
  
  // Clean up non-consented cookies
  if (!consent.analytics) {
    deleteCookie('_ga');
    deleteCookie('_gid');
    deleteCookie('_gat');
  }
  
  if (!consent.marketing) {
    deleteCookie('_fbp');
    deleteCookie('_fbc');
  }
  
  return consentWithTimestamp;
};

export const getCookieConsent = (): CookieConsent | null => {
  const consent = getCookie(COOKIE_CONSENT_KEY);
  
  if (!consent) {
    console.log('❌ No cookie consent found');
    return null;
  }
  
  try {
    const parsed = JSON.parse(consent);
    console.log('✅ Cookie consent loaded:', parsed);
    
    // Check if consent is for current version
    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      console.log('🔄 Cookie consent version mismatch, clearing');
      return null;
    }
    
    return parsed;
  } catch (error) {
    console.error('💥 Error parsing cookie consent:', error);
    return null;
  }
};

export const hasConsent = (type: keyof Omit<CookieConsent, 'timestamp' | 'version'>): boolean => {
  const consent = getCookieConsent();
  return consent ? consent[type] : false;
};

// Global cookie popup management
let globalCookiePopupController: {
  show: () => void;
  hide: () => void;
  showSettings: () => void;
} | null = null;

export const registerCookiePopupController = (controller: {
  show: () => void;
  hide: () => void;
  showSettings: () => void;
}) => {
  globalCookiePopupController = controller;
  console.log('🎮 Cookie popup controller registered');
};

export const showCookiePopup = () => {
  console.log('📢 Show cookie popup requested');
  if (globalCookiePopupController) {
    globalCookiePopupController.show();
  } else {
    console.warn('⚠️ Cookie popup controller not registered');
  }
};

export const hideCookiePopup = () => {
  console.log('🔇 Hide cookie popup requested');
  if (globalCookiePopupController) {
    globalCookiePopupController.hide();
  }
};

export const showCookieSettings = () => {
  console.log('⚙️ Show cookie settings requested');
  if (globalCookiePopupController) {
    globalCookiePopupController.showSettings();
  } else {
    console.warn('⚠️ Cookie popup controller not registered');
  }
};

// React hook for cookie consent
export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    console.log('🔍 Checking existing consent');
    const existingConsent = getCookieConsent();
    
    if (existingConsent) {
      console.log('✅ Found existing consent');
      setConsent(existingConsent);
      setHasConsent(true);
    } else {
      console.log('❌ No existing consent found');
      setHasConsent(false);
    }
  }, []);

  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    console.log('🔄 Updating consent:', newConsent);
    const fullConsent = { ...defaultConsent, ...newConsent };
    const savedConsent = saveCookieConsent(fullConsent);
    setConsent(savedConsent);
    setHasConsent(true);
    hideCookiePopup();
  };

  const acceptAll = () => {
    console.log('✅ Accept all cookies');
    updateConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
  };

  const acceptNecessary = () => {
    console.log('⚠️ Accept necessary only');
    updateConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
  };

  const revokeConsent = () => {
    console.log('🗑️ Revoking consent');
    deleteCookie(COOKIE_CONSENT_KEY);
    setConsent(null);
    setHasConsent(false);
    showCookiePopup();
  };

  return {
    consent,
    hasConsent,
    updateConsent,
    acceptAll,
    acceptNecessary,
    revokeConsent
  };
}; 