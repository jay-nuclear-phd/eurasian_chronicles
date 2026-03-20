import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { UI_STRINGS } from '../constants';

const Toast = ({ message, show }) => {
  if (!show) return null;
  return (
    <div className="fixed bottom-10 right-10 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg animate-bounce z-50">
      {message}
    </div>
  );
};

const VisitorCounter = () => {
  const { language } = useLanguage();
  const [count, setCount] = useState<number | null | 'error'>(null);
  const [showCongrats, setShowCongrats] = useState(false);

  const t = UI_STRINGS.visitorCounter;

  useEffect(() => {
    // Using a more reliable counter service and added better error handling.
    fetch('https://counter.dev/hit/eurasian-chronicles-jnp')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.value === 'number') {
          setCount(data.value);
          if (data.value > 0 && data.value % 100 === 0) {
            setShowCongrats(true);
            setTimeout(() => {
              setShowCongrats(false);
            }, 5000); // Hide after 5 seconds
          }
        } else {
          // If the response is not as expected, treat it as an error.
          throw new Error('Invalid data format from counter API');
        }
      })
      .catch(err => {
        console.error("Failed to fetch visitor count:", err);
        setCount('error');
      });
  }, []);

  const renderContent = () => {
    if (count === 'error') {
      return null;
    }
    if (typeof count === 'number') {
      return <p>{t.count[language](count.toLocaleString())}</p>;
    }
    return <p>{t.loading[language]}</p>;
  }

  return (
    <div className="text-center text-sm">
      {renderContent()}
      <Toast message={typeof count === 'number' ? t.congrats[language](count.toLocaleString()) : ''} show={showCongrats} />
    </div>
  );
};

export default VisitorCounter;
