import React, { useState, useEffect } from 'react';

const Toast = ({ message, show }) => {
  if (!show) return null;
  return (
    <div className="fixed bottom-10 right-10 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg animate-bounce z-50">
      {message}
    </div>
  );
};

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null | 'error'>(null);
  const [showCongrats, setShowCongrats] = useState(false);

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
      return <p>당신은 {count.toLocaleString()}번째 방문자입니다.</p>;
    }
    return <p>방문자 수를 불러오는 중입니다...</p>;
  }

  return (
    <div className="text-center text-sm">
      {renderContent()}
      <Toast message={`🎉 ${typeof count === 'number' ? count.toLocaleString() : ''}번째 방문을 축하합니다! 🎉`} show={showCongrats} />
    </div>
  );
};

export default VisitorCounter;
