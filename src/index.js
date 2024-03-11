import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello2 from './Hello2';
import Test from './Test';
import Bmi from './Bmi';
import Counter5 from './Counter5';
import Product from './Product';
import Shop from './shop';
import reportWebVitals from './reportWebVitals';
import Test2 from './Test2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Shop/> */}
    {/* <Counter5/> */}
    <Product/>
    {/* <Bmi/> */}
    {/* <Test2 /> */}
    {/* <Hello2 /> */}
    {/* <Hello2 f="Pollapat" s="Rattanathip"/> */}
    {/* <Hello /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
