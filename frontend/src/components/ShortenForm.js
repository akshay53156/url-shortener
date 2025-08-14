import React, { useState } from 'react';
import axios from 'axios';

function ShortenForm({ setShortUrl }) {
  const [originalUrl, setOriginalUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/shorten`, { originalUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      alert('Error shortening URL');
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
