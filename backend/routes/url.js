const express = require('express');
const router = express.Router();
const Url = require('../models/url');

router.post('/shorten', async (req, res) => {
  const { nanoid } = await import('nanoid');
  const { originalUrl } = req.body;
  const shortUrl = nanoid(6);

  const url = new Url({ originalUrl, shortUrl });
  await url.save();

  res.json({ originalUrl, shortUrl });
});

router.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;
  const url = await Url.findOne({ shortUrl });

  if (url) {
    url.clicks++;
    await url.save();
    return res.redirect(url.originalUrl);
  } else {
    return res.status(404).json({ error: 'URL not found' });
  }
});

module.exports = router;
