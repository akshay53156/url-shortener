import React, { useState } from 'react';

function ShortenForm({ setShortUrl }) {
  const [originalUrl, setOriginalUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl }),
      });

      const data = await res.json();
      setShortUrl(data.shortUrl);
    } catch (err) {
      alert('Error shortening URL');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
}

export default ShortenForm;
