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
const COOKIE_POPUP_SHOWN_KEY = 'portfolio_cookie_popup_shown';
const COOKIE_CONSENT_VERSION = '1.0';

export const defaultConsent: CookieConsent = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
  preferences: false,
  timestamp: new Date().toISOString(),
  version: COOKIE_CONSENT_VERSION
};

// LocalStorage utility functions
export const setLocalStorage = (key: string, value: string) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(key, value);
    console.log('💾 LocalStorage set:', key);
  } catch (error) {
    console.error('❌ LocalStorage set error:', error);
  }
};

export const getLocalStorage = (key: string): string | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const value = localStorage.getItem(key);
    console.log('🔍 LocalStorage get:', key, value ? 'found' : 'not found');
    return value;
  } catch (error) {
    console.error('❌ LocalStorage get error:', error);
    return null;
  }
};

export const removeLocalStorage = (key: string) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(key);
    console.log('🗑️ LocalStorage removed:', key);
  } catch (error) {
    console.error('❌ LocalStorage remove error:', error);
  }
};

// Cookie popup state management
export const hasShownCookiePopup = (): boolean => {
  const shown = getLocalStorage(COOKIE_POPUP_SHOWN_KEY);
  return shown === 'true';
};

export const markCookiePopupAsShown = () => {
  setLocalStorage(COOKIE_POPUP_SHOWN_KEY, 'true');
  console.log('✅ Cookie popup marked as shown');
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
  
  // Mark popup as shown in localStorage
  markCookiePopupAsShown();
  
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
  const [shouldShowPopup, setShouldShowPopup] = useState(false);

  useEffect(() => {
    console.log('🔍 Checking existing consent and popup state');
    const existingConsent = getCookieConsent();
    const popupShown = hasShownCookiePopup();
    
    if (existingConsent) {
      console.log('✅ Found existing consent');
      setConsent(existingConsent);
      setHasConsent(true);
      setShouldShowPopup(false);
    } else if (popupShown) {
      console.log('⚠️ No consent but popup was shown before');
      setHasConsent(false);
      setShouldShowPopup(false);
    } else {
      console.log('❌ No existing consent and popup not shown');
      setHasConsent(false);
      setShouldShowPopup(true);
    }
  }, []);

  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    console.log('🔄 Updating consent:', newConsent);
    const fullConsent = { ...defaultConsent, ...newConsent };
    const savedConsent = saveCookieConsent(fullConsent);
    setConsent(savedConsent);
    setHasConsent(true);
    setShouldShowPopup(false);
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
    removeLocalStorage(COOKIE_POPUP_SHOWN_KEY);
    setConsent(null);
    setHasConsent(false);
    setShouldShowPopup(true);
    showCookiePopup();
  };

  return {
    consent,
    hasConsent,
    shouldShowPopup,
    updateConsent,
    acceptAll,
    acceptNecessary,
    revokeConsent
  };
}; 