import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);


var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);