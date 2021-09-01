# SVNIT - Team 11
## Stock Analysis Web-Application
A MERN application that allows users to analyze the sentiment of the specific stock.
User will have the ability to search different stocks based on symbols and view the details and OHLC charts in real time.
We provided facility for user to filter stock details based on time(weekly and monthly by scrolling) changes. 
Stocks can be analysed in different graph formats such as OHLC, Candlestick charts, Colored Bar, Vertex Line and Hollow Candle.
User can see additional information on the selected stocks company. 


### Major Tech Stack & Dependencies:

| FrontEnd | BackEnd |
| --- | --- |
| React | Express |
| Apexcharts | Mongoose |
| Axios | Nodemon |
| CORS | Dotenv |
| Material UI | |
| D3 | |
 
### Prerequisites

Must haves:
- `Node` installed
- Terminal that supports `Nodejs` and `git commands`.
- `MongoDB` database

### Procedure to Install and Use the Appllication

1. Clone repository into your local device using following command:

``` 
$ git clone  <repository link>
```
</br>

2. Install the dependencies in package.json using following command:

```
$ npm install //Installation of dependencies for backend

$ cd client npm install //Installation of dependencies for frontend

$ cd ..
```
4. Run Application using following command:
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
 $ npm start
 ```
 
### Design Criteria and Scalability ideas

We decided to create a unique design for our project. Its a classic MERN App having two modes(development and production) for developer and users. 
The project has two parts backend and frontend. The client part in code structure shown is the frontend part where all the task related to rendering data was done and a preety nice UI was created. React is a free and open-source front-end JavaScript library for building user interfaces or UI components which is used here.
For making charts from the JSON file provided to us we used Apexcharts library which provides many options of graps according to our requirement. To provide real-time update of stocks we can also use socket.io . We have also taught to develop it further by providing features to buy and sell stocks and prediction of which stocks to buy using ML. Also to make it more competitive we can also make possible for user to see information about that particular stock company and provide its comparision to other related company with charts and stocks value comparision. 

We can further connect MongoDB database in the backend for addition and deletion of data related to stocks to make data access more dynamic. Moreever, the search history of the users stock can also be stored in this database for future referal. We also added several routes to allow movement to different parts of the website. Additional information related to the stocks company was fetched using public API's. Also to handel in frontend and backend independently in future we can use third party APIs handling app like POSTMAN, etc to maintain APIs. There are many more things we can do in this app.


### Code Structure

    .
    ├── client
    │   ├── build
    │   │   ├── asset-manifest.json
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   ├── manifest.json
    │   │   ├── service-worker.js
    │   │   └── static
    │   │       ├── css
    │   │       │   ├── main.f691cc0e.css
    │   │       │   └── main.f691cc0e.css.map
    │   │       └── js
    │   │           ├── main.68051522.js
    │   │           └── main.68051522.js.map
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   └── manifest.json
    │   ├── README.md
    │   └── src
    │       ├── actions
    │       │   └── actions.js
    │       ├── App.css
    │       ├── App.js
    │       ├── App.test.js
    │       ├── Components
    │       │   ├── StockCard.js
    │       │   ├── StockCards.js
    │       │   ├── StockChart.js
    │       │   ├── StockSelect.js
    │       │   ├── TickerItem.js
    │       │   └── Ticker.js
    │       ├── index.css
    │       ├── index.js
    │       ├── logo.svg
    │       ├── reducers
    │       │   ├── date.js
    │       │   ├── index.js
    │       │   ├── stocks.js
    │       │   └── ticker.js
    │       ├── registerServiceWorker.js
    │       ├── StateLoader.js
    │       ├── store.js
    │       ├── styles
    │       │   └── index.css
    │       └── utils
    │           └── helpers.js
    ├── controllers
    │   └── stock-controller.js
    ├── models
    │   ├── state.js
    │   └── symbols.js
    ├── package.json
    ├── package-lock.json
    ├── Procfile
    ├── README.md
    ├── server.js
    ├── start-client.js
    └── test-client.js


### Functionality:
</br>
<b>
 </br>
  *<i> Interactable D3 Candle Charts </i>
  </br>
  *<i> Table pagination/select/sort/search<i> 
 </br>
  *<i> View stocks Archive</i>
  </br>
   *<i>View Stocks Showcase</i>
 </br>
  *<i>Show Poll Statistics (Views, Link, Date Published, Etc...)</i>
   </br>
   *<i>Scalable Pagination</i>
  </br>
   *<i>Loading Screen Spinners</i>
 </br>
  </b>
  </br>
  
  ![My image](https://github.com/Alok650/stocks/blob/main/np-img.jpeg)
  

