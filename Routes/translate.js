const express = require('express');
const router = express.Router();
const { translate } = require('bing-translate-api');

router.post('/translate', async(req,res) => {

    const {text, from , to, delimeter } = req.body;

    if(delimeter)
    {
      const pt1 = await translate(text.split(delimeter)[0], from ?? null, to, true).then(res2 => res2.translation
      ).catch(err => err);
      // res.json({0:text.split(delimeter)[0], 1:text.split(delimeter)[1]})

      const pt2 = await translate(text.split(delimeter)[1], from ?? null, to, true).then(res2 => res2.translation).catch(err => err);

      res.status(200).json({Title: pt1, Description: pt2});
      
    }else{
      await translate(text, from ?? null, to, true).then(res2 => {
          res.status(200).json(res2)
        }).catch(err => {
          console.error(err);
          res.status(500).json(err);
        });
    }

})

module.exports = router;