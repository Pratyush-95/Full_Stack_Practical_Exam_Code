const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const Url = require("./model/Url");

// Create short URL
router.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;

  try {
    let url = await Url.findOne({ originalUrl });

    if (url) {
      return res.json(url);
    }

    const shortId = shortid.generate();

    url = new Url({
      originalUrl,
      shortId,
    });

    await url.save();

    res.json(url);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Redirect to original URL
router.get("/:shortId", async (req, res) => {
  try {
    const url = await Url.findOne({ shortId: req.params.shortId });

    if (url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json("URL not found");
    }
  } catch (err) {
    res.status(500).json("Server error");
  }
});

module.exports = router;