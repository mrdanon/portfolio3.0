'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

const ConditionalHeader = () => {
  const pathname = usePathname();
  
  // Hide header on privacy policy page
  if (pathname === '/privacy-policy') {
    return null;
  }
  
  return <Header />;
};

export default ConditionalHeader; 