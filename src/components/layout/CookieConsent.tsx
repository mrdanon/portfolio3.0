'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, X, Check, Shield } from 'lucide-react';
import { useCookieConsent, CookieConsent as CookieConsentType } from '@/lib/cookies';
import Link from 'next/link';

const CookieConsent = () => {
  const { showBanner, updateConsent, acceptAll, acceptNecessary } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [customConsent, setCustomConsent] = useState<Partial<CookieConsentType>>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  if (!showBanner) return null;

  const handleCustomAccept = () => {
    updateConsent(customConsent);
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t-2 border-blue-500 shadow-2xl"
      >
        <div className="container mx-auto px-4 py-6">
          {!showDetails ? (
            // Simple Banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start space-x-4 flex-1">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    🍪 We use cookies to enhance your experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    This website uses cookies to ensure you get the best experience. We use necessary cookies for basic functionality and optional cookies for analytics and preferences. You can choose which cookies to accept.
                  </p>
                  <div className="flex items-center space-x-4 mt-3">
                    <Link 
                      href="/privacy-policy" 
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      Privacy Policy
                    </Link>
                    <button
                      onClick={() => setShowDetails(true)}
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center"
                    >
                      <Settings className="w-4 h-4 mr-1" />
                      Customize
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <motion.button
                  onClick={acceptNecessary}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-medium transition-colors"
                >
                  Accept Necessary Only
                </motion.button>
                <motion.button
                  onClick={acceptAll}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Accept All Cookies
                </motion.button>
              </div>
            </div>
          ) : (
            // Detailed Settings
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Cookie Preferences
                  </h3>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Choose which cookies you want to accept. You can change these settings at any time through our privacy policy page.
              </p>

              <div className="grid gap-4">
                {cookieTypes.map((type) => (
                  <div key={type.key} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {type.title}
                          </h4>
                          {type.required && (
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-xs rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          {type.description}
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs">
                          <strong>Examples:</strong> {type.examples}
                        </p>
                      </div>
                      <div className="ml-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={type.required || Boolean(customConsent[type.key])}
                            disabled={type.required}
                            onChange={(e) => {
                              if (!type.required) {
                                setCustomConsent(prev => ({
                                  ...prev,
                                  [type.key]: e.target.checked
                                }));
                              }
                            }}
                            className="sr-only"
                          />
                          <div className={`w-11 h-6 rounded-full transition-colors ${
                            (type.required || customConsent[type.key])
                              ? 'bg-blue-600' 
                              : 'bg-gray-300 dark:bg-gray-600'
                          } ${type.required ? 'opacity-50' : ''}`}>
                            <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                              (type.required || customConsent[type.key]) ? 'translate-x-6' : 'translate-x-1'
                            } mt-1`} />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <motion.button
                  onClick={acceptNecessary}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-medium transition-colors"
                >
                  Accept Necessary Only
                </motion.button>
                <motion.button
                  onClick={handleCustomAccept}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200"
                >
                  Save My Preferences
                </motion.button>
                <motion.button
                  onClick={acceptAll}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                >
                  Accept All
                </motion.button>
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                <p>
                  <strong>Your Rights:</strong> Under GDPR, you have the right to access, rectify, or delete your personal data. 
                  You can withdraw consent at any time. For more information, see our{' '}
                  <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent; 