import React from 'react';

function ShortUrlDisplay({ shortUrl }) {
  if (!shortUrl) return null;

  // frontend always calls /api/:shortUrl
  const fullUrl = `/api/${shortUrl}`;

  return (
    <div>
      <p>Shortened URL:</p>
      <a href={fullUrl} target="_blank" rel="noopener noreferrer">
        {window.location.origin}/api/{shortUrl}
      </a>
    </div>
  );
}

export default ShortUrlDisplay;
