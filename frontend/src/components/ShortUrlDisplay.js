import React from 'react';

function ShortUrlDisplay({ shortUrl }) {
  if (!shortUrl) return null;

  const fullUrl = `http://localhost:5000/api/${shortUrl}`; // Change to deployed backend in prod

  return (
    <div>
      <p>Shortened URL:</p>
      <a href={fullUrl} target="_blank" rel="noopener noreferrer">{fullUrl}</a>
    </div>
  );
}

export default ShortUrlDisplay;
