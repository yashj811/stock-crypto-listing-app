const express = require("express");

const router = express.Router();
const axios = require("axios");
const Crypto = require("../../models/CryptoModel");

// router.get('/', (req,res) => console.log(res))

router.post("/", async (req, res) => {
  const { name, symbol, market_cap, price } = req.body;
  try {
    let cryptoItem = await Crypto.findOne({name});

    if (cryptoItem) {
      res.status(400).json({ errors: [{ msg: "Item already exist" }] });
    }

    cryptoItem = new Crypto({
      name,
      symbol,
      market_cap,
      price,
    });

    await cryptoItem.save();
    res.send(cryptoItem.name);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.get("/", async (req, res) => {;
  try {
    let cryptoItems = await Crypto.find().populate('crypto');
    res.json(cryptoItems);
  
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.put("/", async (req, res) => {
  try {
    let cryptoItems = await Crypto.findOneAndRemove({name : req.body.name});
    res.json(cryptoItems);
  
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});


module.exports = router;
