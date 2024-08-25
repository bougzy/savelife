import React, { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/66cab8f2ea492f34bc09d352/1i63u4suq';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't need to render anything
};

export default TawkToChat;
