const express = require('express');
const router = express.Router();
const data = require('../Data.json');
// Routes

router.post("/candlestick/:symbol",(req,res) => {
    const symbol = req.body.symbol;
   console.log(symbol);
    const testJSON = [
      {
          "Meta Data": {
              "1. Information": "Daily Prices (open, high, low, close) and Volumes",
              "2. Symbol": symbol,
              "3. Last Refreshed": "2021-08-25",
              "4. Output Size": "Compact",
              "5. Time Zone": "US/Eastern"
          },
          "Time Series (Daily)": {}
      }];
    //var objList=[];
    let obj={};
    for (let i in data){
      if(data[i].symbol === symbol){
  
        let temp1=data[i].date;
        let temp=String(temp1);
        obj["1. open"]=data[i].open;
        obj["2. high"]=data[i].high;
        obj["3. low"]=data[i].low;
        obj["4. close"]=data[i].close;
        obj["5. volume"]=data[i].volume;
        res.json(obj);
        testJSON[0]["Time Series (Daily)"][temp]=obj;
      }
    }
    console.log(testJSON);
    res.json(testJSON);
  });


module.exports = router;