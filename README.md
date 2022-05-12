# Service Oriented Architecture
## _Group 7_

## _Finance Reminder Service v1.0.0_

Finance Reminder Service is a application providing a service for receiving notifications via Gmail about finance equaties (stocks, cryptocurrencies, ...) target price achieved.


## Tech

Finance Reminder Service uses a number of open source projects to work properly:

- [ReactJS] - A JavaScript library for building user interfaces
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework

## API service

Call this to register email notifications when price of specific symbol meets the TP (take profit) price or SL (stop loss) price.

```sh
Endpoint: /finance-reminder-application
Body: {
    to: string;
    symbol: string;
    tp: number;
    sl: number;
}
```

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd finance-reminder
npm i
npm start
```


## License

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [ReactJS]: <https://reactjs.org/>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
