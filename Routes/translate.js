const express = require('express');
const router = express.Router();
const { translate } = require('bing-translate-api');

router.post('/translate', async(req,res) => {

    const {text, from , to } = req.body;


    await translate(text, from ?? null, to, true).then(res2 => {
        res.status(200).json(res2)
      }).catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
})

module.exports = router;