'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, X, Check, Shield } from 'lucide-react';
import { 
  useCookieConsent, 
  CookieConsent as CookieConsentType, 
  getCookieConsent,
  registerCookiePopupController 
} from '@/lib/cookies';
import Link from 'next/link';

const CookiePopup = () => {
  const { consent, hasConsent, shouldShowPopup, updateConsent, acceptAll, acceptNecessary } = useCookieConsent();
  
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [customConsent, setCustomConsent] = useState<Partial<CookieConsentType>>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  // Register this component as the global controller
  useEffect(() => {
    const controller = {
      show: () => {
        console.log('🔊 Showing cookie popup');
        setIsVisible(true);
        setShowSettings(false);
      },
      hide: () => {
        console.log('🔇 Hiding cookie popup');
        setIsVisible(false);
        setShowSettings(false);
      },
      showSettings: () => {
        console.log('⚙️ Showing cookie settings');
        const existingConsent = consent || getCookieConsent();
        if (existingConsent) {
          setCustomConsent({
            necessary: existingConsent.necessary,
            analytics: existingConsent.analytics,
            marketing: existingConsent.marketing,
            preferences: existingConsent.preferences
          });
        }
        setIsVisible(true);
        setShowSettings(true);
      }
    };

    registerCookiePopupController(controller);

    // Show popup on initial load if should show
    if (shouldShowPopup) {
      console.log('🚀 Should show popup, displaying initial popup');
      setIsVisible(true);
    }

    return () => {
      // Cleanup if needed
    };
  }, [hasConsent, consent, shouldShowPopup]);

  const handleCustomAccept = () => {
    console.log('💾 Saving custom consent:', customConsent);
    updateConsent(customConsent);
  };

  const handleAcceptAll = () => {
    console.log('✅ Accepting all cookies');
    acceptAll();
  };

  const handleAcceptNecessary = () => {
    console.log('⚠️ Accepting necessary only');
    acceptNecessary();
  };

  const handleClose = () => {
    if (showSettings && hasConsent) {
      // If just closing settings and we have consent, just hide
      setIsVisible(false);
      setShowSettings(false);
    } else {
      // If no consent yet, force necessary only
      handleAcceptNecessary();
    }
  };

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookieConsentType,
      title: 'Necessary Cookies',
      description: 'Essential for website functionality, security, and user authentication. Cannot be disabled.',
      required: true,
      examples: 'Session management, security tokens, cookie consent preferences'
    },
    {
      key: 'preferences' as keyof CookieConsentType,
      title: 'Preference Cookies',
      description: 'Remember your settings and preferences to enhance your experience.',
      required: false,
      examples: 'Theme settings, language preferences, layout customizations'
    },
    {
      key: 'analytics' as keyof CookieConsentType,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve performance.',
      required: false,
      examples: 'Google Analytics, page views, user journey tracking'
    },
    {
      key: 'marketing' as keyof CookieConsentType,
      title: 'Marketing Cookies',
      description: 'Used to track visitors and display relevant advertisements.',
      required: false,
      examples: 'Social media pixels, advertising networks, retargeting'
    }
  ];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-end lg:items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white dark:bg-gray-900 rounded-t-2xl lg:rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {!showSettings ? (
            // Simple Consent Banner
            <div className="p-6 lg:p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                  <Cookie className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    🍪 We use cookies to enhance your experience
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    This website uses cookies to ensure you get the best experience. We use necessary cookies for basic functionality and optional cookies for analytics and preferences. You can choose which cookies to accept.
                  </p>
                  <div className="flex items-center space-x-6">
                    <Link 
                      href="/privacy-policy" 
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      Privacy Policy
                    </Link>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Customize Settings
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={handleAcceptNecessary}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 rounded-xl font-medium transition-colors"
                >
                  Accept Necessary Only
                </motion.button>
                <motion.button
                  onClick={handleAcceptAll}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center"
                >
                  <Check className="w-5 h-5 mr-2" />
                  Accept All Cookies
                </motion.button>
              </div>
            </div>
          ) : (
            // Detailed Settings
            <div className="max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Cookie Preferences
                    </h2>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Choose which cookies you want to accept. You can change these settings at any time.
                </p>
              </div>

              <div className="p-6 space-y-6">
                {cookieTypes.map((type) => (
                  <motion.div 
                    key={type.key} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {type.title}
                          </h3>
                          {type.required && (
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm rounded-full font-medium">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {type.description}
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm">
                          <strong>Examples:</strong> {type.examples}
                        </p>
                      </div>
                      <div className="ml-6">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={type.required || Boolean(customConsent[type.key])}
                            disabled={type.required}
                            onChange={(e) => {
                              if (!type.required) {
                                const newConsent = {
                                  ...customConsent,
                                  [type.key]: e.target.checked
                                };
                                console.log('🔄 Toggle cookie:', type.key, 'to', e.target.checked);
                                setCustomConsent(newConsent);
                              }
                            }}
                            className="sr-only"
                          />
                          <div className={`w-14 h-8 rounded-full transition-colors ${
                            (type.required || customConsent[type.key])
                              ? 'bg-blue-600' 
                              : 'bg-gray-300 dark:bg-gray-600'
                          } ${type.required ? 'opacity-50' : ''}`}>
                            <div className={`w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
                              (type.required || customConsent[type.key]) ? 'translate-x-7' : 'translate-x-1'
                            } mt-1`} />
                          </div>
                        </label>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={handleAcceptNecessary}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 rounded-xl font-medium transition-colors"
                  >
                    Accept Necessary Only
                  </motion.button>
                  <motion.button
                    onClick={handleCustomAccept}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200"
                  >
                    Save My Preferences
                  </motion.button>
                  <motion.button
                    onClick={handleAcceptAll}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors"
                  >
                    Accept All
                  </motion.button>
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p>
                    <strong>Your Rights:</strong> Under GDPR, you have the right to access, rectify, or delete your personal data. 
                    You can withdraw consent at any time. For more information, see our{' '}
                    <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookiePopup; 