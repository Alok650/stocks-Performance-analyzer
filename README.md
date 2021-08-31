# Stock Analysis Web-Application

A MERN application that allows users to analyze the sentiment of the specific stock.
User will have the ability to search different stocks basesd on symbols and view the details and OHLC charts in real time.
We provided facility for user to filter stock details based on weekly and monthly changes. 
Stocks can be analysed in different graph formats such as OHLC, Candlestick charts, Colored Bar, Vertex Line and Hollow Candle.
User can see additional information on the selected stocks company. 


### Major Tech Stack & Dependencies:


   `React.JS`
  </br>
  `Material UI`
  </br>
  `D3`
  </br>
  `Apexcharts.js`
  </br>
  `Axios`
  </br>
  `Express`
  </br>
  `MongoDB`
  </br>
  `Mongoose`
  </br>
  `cors`
  </br>
  `Socket.io`
</br>
### Prerequisites
Must haves:
- `Node` installed
- Terminal that supports `Nodejs` and `git commands`.
- `MongoDB` databse

### Procedure to Install and Use the Appllication

1.Clone repository into your local device using following command:

``` 
$ git clone  <repository link>
```
</br>

2.Install the dependencies in package.json using following command:

```
$ npm install //Installation of dependencies for backend

$ cd client npm install //Installation of dependencies for frontend

$ cd ..
```
 
3.Run Application using following command:
###### Run Frontend and Backend together
```
$ npm run dev
```
 
###### Backend only
```
$ npm run server
```
 
 ###### Frontend only
 ```
 $ npm run client
 ```
 
 ###### Build client
 ```
 $ cd client
 $ npm run build
 ```
 
 ###### Run in Producation Mode
 ```
 $ npm start\
 ```
 
### Design Criteria





### Project Description in Detail:



Functionality:
</br>
<b>
 </br>
  *<i> Interactable D3 Candle Charts </i>
  </br>
  *<i> Table pagination/select/sort/search<i> 
 </br>
  *<i> View Poll Archive</i>
  </br>
   *<i>Vite Poll Showcase</i>
 </br>
  *<i>Show Poll Statistics (Views, Link, Date Published, Etc...)</i>
   </br>
   *<i>Scalable Pagination</i>
  </br>
   *<i>Loading Screen Spinners</i>
 </br>
  
  </b>
  </br>
  
Market:
</br>
![Alt text](https://github.com/DanielLopezCS/React-Stock-Trading-Simulator/blob/master/Screenshots/market.png "Market")

Table (Search/Sort/Select/Pagination):
</br>
![Alt text](https://github.com/DanielLopezCS/React-Stock-Trading-Simulator/blob/master/Screenshots/search.png "Table")

Trading:
</br>
![Alt text](https://github.com/DanielLopezCS/React-Stock-Trading-Simulator/blob/master/Screenshots/trade.png "Trade Menus")
