import React, { useState } from 'react';
import ShortenForm from './components/ShortenForm';
import ShortUrlDisplay from './components/ShortUrlDisplay';

function App() {
  const [shortUrl, setShortUrl] = useState('');

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <ShortenForm setShortUrl={setShortUrl} />
      <ShortUrlDisplay shortUrl={shortUrl} />
    </div>
  );
}

export default App;
